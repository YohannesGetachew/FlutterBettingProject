import { ObjectType,Field, registerEnumType } from "@nestjs/graphql";
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base';
import { User } from "./user";

export enum EvidenceType {
    TRANSACTION_PICTURE = "TRANSACTION_PICTURE",
    TRANSACTION_ID = "TRANSACION_ID"
}

export enum TransferSource {
    CBE = "CBE",
    AMOLE = "AMOLE",
    MBIRR="MBIRR",
    BANK="BANK"
}

registerEnumType(EvidenceType, {
    name: 'EvidenceType',
});

registerEnumType(TransferSource, {
    name: 'TransferSource',
});


@ObjectType()
@Schema({timestamps: true})
export class DepositRequest extends Base {
    @Field()
    @Prop({ unique: true, index: true })
    requestId: string;

    @Field(type => EvidenceType)
    @Prop({required:true})
    evidenceType: EvidenceType

    @Field(type => String)
    @Prop()
    evidence: string

    @Prop({required: true})
    customerId: string 

    @Field(type => User)
    customer: User

    @Field(type => TransferSource)
    @Prop({required: true})
    transferSource: TransferSource
    
    @Field(type => Boolean)
    @Prop({required:true, default: false})
    confirmed: boolean

    @Field(type => Boolean)
    @Prop({required: true, default: false})
    denied: boolean


    @Field(type => String, {nullable: true})
    @Prop()
    transactionId: string
}

export const DepositRequestSchema = SchemaFactory.createForClass(DepositRequest);
