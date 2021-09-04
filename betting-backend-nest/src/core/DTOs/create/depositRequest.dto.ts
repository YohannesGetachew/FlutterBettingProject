import { InputType, Field } from '@nestjs/graphql';
import {EvidenceType, TransferSource} from '../../models/depositRequest'

@InputType()
export class DepositRequestDto{
    @Field(type=> EvidenceType)
    evidenceType: EvidenceType

    @Field()
    evidence: string

    @Field()
    transferSource: TransferSource
}