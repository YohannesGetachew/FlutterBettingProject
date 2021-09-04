import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction, TransactionType } from '../../models/transaction';
import { Model } from 'mongoose';
import { TransactionDTO } from '../../DTOs/create/transaction.dto';
import { UserService } from '../user/user.service';
import { User } from '../../models/user';
import { BaseService } from '../../../shared/base.service';
import { getMessage } from 'src/core/models/message';
import { MessageService } from '../message/message.service';
@Injectable()
export class TransactionService extends BaseService<Transaction> {
    constructor(
        @InjectModel(Transaction.name) private TransactionModel: Model<Transaction>,
        private readonly userService: UserService,
        private readonly messageService: MessageService,
        ) {
            super();
            this._model = this.TransactionModel;
        }
    

    async findAll(filters: any): Promise<Transaction[]> {
        if(filters.customerUsername) {
            const user = await this.userService.findOne({username: filters.customerUsername});
            if(user) {
                if(filters.from && filters.to) {
                    return this.TransactionModel.aggregate([
                        {
                            $match: {"customerId": user._id, "createdAt": { $gte: new Date(filters.from), $lte: new Date(filters.to) }}
                        }
                    ]).sort({createdAt: -1}).exec(); 
                }
                return this.TransactionModel.find({customerId: user._id}).exec();
            }
            return [];
        } else if(filters.cashierUsername) {
            const user = await this.userService.findOne({username: filters.cashierUsername});
            if(user) {
                if(filters.from && filters.to) {
                    return this.TransactionModel.aggregate([
                        {
                            $match: {"cashierId": user._id, "createdAt": { $gte: new Date(filters.from), $lte: new Date(filters.to) }}
                        }
                    ]).sort({createdAt: -1}).exec(); 
                }
                return this.TransactionModel.find({cashierId: user._id}).exec();
            }
            return [];
        } else if(filters.type) {
            if(filters.from && filters.to) {
                return this.TransactionModel.aggregate([
                    {
                        $match: {"type": filters.type, "createdAt": { $gte: new Date(filters.from), $lte: new Date(filters.to) }}
                    }
                ]).sort({createdAt: -1}).exec(); 
            }
            return this.TransactionModel.find({type: filters.type}).sort({createdAt: -1}).exec();
        } else if(filters.from && filters.to) { 
            return this.TransactionModel.aggregate([
                {
                    $match: {"createdAt": { $gte: new Date(filters.from), $lte: new Date(filters.to) }}
                }
            ]).sort({createdAt: -1}).exec(); 
        }
        return this.TransactionModel.find(filters).sort({createdAt: -1}).exec();
    }
    async makeTransaction(transaction: TransactionDTO, cashier: User) {
        //
        const user = await this.userService.findById(transaction.customer);
        let balanceAfterTransaction
        if(transaction.type === TransactionType.DEPOSIT) {
          if(user) {
            balanceAfterTransaction  = user.accountBalance + transaction.amount;
              const success = await this.userService.update(transaction.customer, {accountBalance: balanceAfterTransaction});
              if(!success) {
                throw new HttpException('Requested can\'t be porcessed at this time', HttpStatus.INTERNAL_SERVER_ERROR);
              }
            }
        } else if(transaction.type === TransactionType.WITHDRAW) {
            if(user) {
                balanceAfterTransaction  = user.accountBalance - transaction.amount;
                if(balanceAfterTransaction < 0) {
                    throw new HttpException("Not Enough Account Balance", HttpStatus.FORBIDDEN);
                }
                const success = await this.userService.update(transaction.customer, {accountBalance: balanceAfterTransaction});
                if(!success) {
                    throw new HttpException('Requested can\'t be porcessed at this time', HttpStatus.INTERNAL_SERVER_ERROR);
                }
            }
        }
        const data = {
            type: transaction.type,
            amount: transaction.amount,
            customerId: transaction.customer,
            balanceAfterTransaction: balanceAfterTransaction,
            cashierId: cashier._id,
        }
        const createdTransaction = await this.create(data);
        if(!createdTransaction){
            throw new HttpException('Requested can\'t be porcessed at this time', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        const messageObject = getMessage('TRANSACTION_SUCCESS', {transactionType: transaction.type ,transactionAmount: transaction.amount})
        const messageToCreate = {
             ...messageObject,
             customerId: transaction.customer
        }
        const transactionMessage = await this.messageService.createMessage(messageToCreate)
        if(!transactionMessage){
            throw new HttpException('Requested can\'t be porcessed at this time', HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return createdTransaction
    }

    async checkBalance(userId, value: number){
       const user = await this.userService.findById(userId) 
        if(user) {
            return user.accountBalance >= value;
        }
    }

    makeWithdrawal() {}
    makeDeposit() {}
}