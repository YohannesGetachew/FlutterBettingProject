import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { DepositRequest } from "../../../core/models/depositRequest";
import {DepositRequestDto} from '../../DTOs/create/depositRequest.dto'
import { BaseService } from "../../../shared/base.service";
import { Role, User } from "src/core/models";
import { TransactionService } from "../transaction/transaction.service";
import { TransactionType } from "src/core/models/transaction";
import { UpdateDepositRequestDto } from "src/core/DTOs/update/updateDepositRequest.dto";
import { MessageService } from "../message/message.service";
import { getMessage } from "src/core/models/message";

@Injectable()
export class DepositRequestService extends BaseService<DepositRequest>{
    constructor(
        @InjectModel(DepositRequest.name) private DepositRequestModel: Model<DepositRequest>,
        private readonly messageService: MessageService,
        private readonly transactionService: TransactionService
    ){
        super()
        this._model = this.DepositRequestModel
    }

    async findAll(): Promise<DepositRequest[]>{
        return this.DepositRequestModel.find().sort({createdAt: -1}).exec()
    }

    async createDepositRequest(customer: User,depositRequestInput: DepositRequestDto) {
            if (customer.role !== Role.CUSTOMER) {
            throw new HttpException(
              "You don't have a persmission",
              HttpStatus.UNAUTHORIZED,
            );
          }
        const requestId = await this.generateRequestId()
        if(!requestId){
            throw new HttpException('Requested can\'t be porcessed at this time', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const data = {
            requestId: requestId,
            evidenceType: depositRequestInput.evidenceType,
            evidence: depositRequestInput.evidence,
            customerId: customer._id,
            transferSource: depositRequestInput.transferSource
        }
        const createdDepositRequest = await this.create(data)
        if(!createdDepositRequest){
            throw new HttpException('Requested can\'t be porcessed at this time', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const messageObject = getMessage('DEPOSIT_REQUEST_SENT', {requestId: data.requestId})
        const messageToCreate = {
             ...messageObject,
             customerId: customer._id
        }
        await this.messageService.createMessage(messageToCreate)

        return createdDepositRequest
    } 

    async confirmDepositRequest(cashier: User, depositRequestId: string, updateDepositRequestInput: UpdateDepositRequestDto){
        if (cashier.role !== Role.CASHIER) {
            throw new HttpException(
              "You don't have a persmission",
              HttpStatus.UNAUTHORIZED,
            );
          }
        const depositRequestToUpdate = await this.findById(depositRequestId)
        if(!depositRequestToUpdate){
            throw new HttpException('deposit request not found', HttpStatus.NOT_FOUND)
        }

        if(depositRequestToUpdate.denied){
            throw new HttpException( "Request has already been denied",HttpStatus.INTERNAL_SERVER_ERROR );
        }

        const depositToMake = {
            type: TransactionType.DEPOSIT,
            amount: updateDepositRequestInput.amount,
            customer: depositRequestToUpdate.customerId
        }

        const deposit = await this.transactionService.makeTransaction(depositToMake,cashier)

      
        const confirmedDepositRequestData = {
            evidenceType: depositRequestToUpdate.evidenceType,
            evidence: depositRequestToUpdate.evidence,
            customerId: depositRequestToUpdate.customerId,
            transferSource: depositRequestToUpdate. transferSource,
            confirmed: true,
            transactionId: deposit._id
        }

        const confirmedDepositRequest = await this.update(depositRequestId, confirmedDepositRequestData)

        if(!confirmedDepositRequest){
            throw new HttpException('Requested can\'t be porcessed at this time', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return confirmedDepositRequest
    }
    
    async denyDepositRequest(cashier: User, depositRequestId: string){
         if (cashier.role !== Role.CASHIER) {
            throw new HttpException(
              "You don't have a persmission",
              HttpStatus.UNAUTHORIZED,
            );
          }
        const depositRequest = await this.findById(depositRequestId)
        if(!depositRequest){
            throw new HttpException( "Deposit request not found",HttpStatus.NOT_FOUND );
        }
        if(depositRequest.confirmed){
            throw new HttpException( "Request already confirmed",HttpStatus.INTERNAL_SERVER_ERROR );
        }

        const deniedDepositRequest = await this.update(depositRequestId, {denied: true})

        if(!deniedDepositRequest){
            throw new HttpException( "Failed to deny deposit request",HttpStatus.INTERNAL_SERVER_ERROR );
        }

        const messageObject = getMessage('DEPOSIT_REQUEST_DENIED', {requestId: deniedDepositRequest.requestId})
        const messageToCreate = {
             ...messageObject,
             customerId: deniedDepositRequest.customerId
        }
        await this.messageService.createMessage(messageToCreate)

        return deniedDepositRequest
    }

    async deleteDepositRequest(cashier: User, depositRequestId: string){
         if (cashier.role !== Role.CASHIER) {
            throw new HttpException(
              "You don't have a persmission",
              HttpStatus.UNAUTHORIZED,
            );
          }

        const depositRequest = await this.findById(depositRequestId)
        if(!depositRequest){
            throw new HttpException( "Deposit request not found",HttpStatus.NOT_FOUND );
        }
        if(!(depositRequest.confirmed || depositRequest.denied)){
            throw new HttpException( "You must either confirm or deny before deleting",HttpStatus.INTERNAL_SERVER_ERROR );
        }
        
        const deletedDepositRequest = await this.deleteById(depositRequestId)

        if(!deletedDepositRequest){
            throw new HttpException( "Failed to delete deposit request",HttpStatus.INTERNAL_SERVER_ERROR ); 
        }
        return 'Success'

    }

    async generateRequestId(): Promise<string> {
        const id = `${this.randomChar()}${this.randomSixDigitNumber()}`;
        const message = await this.findOne({ requestId: id });
        return message ? this.generateRequestId() : id;
    }
    
    randomChar() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(Math.floor(Math.random() * 26));
    }

    randomSixDigitNumber() {
        const minm = 100000;
        const maxm = 999999;
        return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    }
}