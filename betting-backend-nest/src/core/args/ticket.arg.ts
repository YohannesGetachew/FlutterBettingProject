import { ArgsType, Field } from '@nestjs/graphql';
import { TicketStatus, PlacerType } from '../models/ticket';
@ArgsType()
export class TicketArg {
    @Field({nullable: true})
    date: string;

    @Field({nullable: true})
    isPlaced: boolean;

    @Field({defaultValue: false, nullable: true})
    isExpired: boolean;

    @Field({nullable: true})
    userID: string;

    @Field({nullable: true})
    status: TicketStatus;


    @Field({nullable: true})
    placerType: PlacerType;
}