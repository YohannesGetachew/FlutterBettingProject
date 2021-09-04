import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { BaseService } from "../../../shared/base.service";
import { Role, User } from "src/core/models";
import { Message } from "src/core/models/message";
import {MessageDto} from 'src/core/DTOs/create/message.dto'

@Injectable()
export class MessageService extends BaseService<Message>{
    constructor(
        @InjectModel(Message.name) private MessageModel: Model<Message>,
    ){
        super()
        this._model = this.MessageModel
    }

    async findAll(customer: User): Promise<Message[]>{
        return this.MessageModel.find({customerId: customer._id}).sort({createdAt: -1}).exec()
    }

    async createMessage(message: MessageDto) {
        const createdMessage = await this.create(message)
        if(!message){
            throw new HttpException('Message couldnt be created', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return createdMessage
    }

    async updateMessage(customer: User, messageId: string) {
            if (customer.role !== Role.CUSTOMER) {
                throw new HttpException(
                "You don't have a persmission",
                HttpStatus.UNAUTHORIZED,
                );
           }
      
        const messageToUpdate = await this.findById(messageId)
        if(!messageToUpdate){
            throw new HttpException('Message not found', HttpStatus.NOT_FOUND);
        }

        if(messageToUpdate.isRead){
            throw new HttpException('Message is already read', HttpStatus.BAD_REQUEST);
        }

        const updatedMessage = this.update(messageId,{isRead: true})
        if(!updatedMessage){
             throw new HttpException('Message could not be updated', HttpStatus.INTERNAL_SERVER_ERROR);
        }
       
        return updatedMessage
    } 

}