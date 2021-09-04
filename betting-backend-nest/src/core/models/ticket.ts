import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { ObjectType, Field, registerEnumType} from '@nestjs/graphql';
import { Base } from './base';
import { User } from './user';
import { Shop } from './shop';
import { Bet } from './bet';

export enum TicketStatus {
  PENDING = "PENDING",
  LOSE = "LOSE",
  WIN = "WIN"
}

registerEnumType(TicketStatus, {
  name: 'TicketStatus',
});

export enum PlacerType {
  GUEST = "GUEST",
  CASHIER = "CASHIER",
  CUSTOMER = "CUSTOMER"
}
registerEnumType(PlacerType, {
  name: 'PlacerType',
});

@ObjectType()
@Schema({timestamps: true})
export class Ticket extends Base {
  @Field(returns => Number)
  @Prop()
  stake: number; // deduce vat value and set it here

  @Field(returns => Number)
  @Prop()
  vatValue: number;

  @Field(returns => Number)
  @Prop()
  totalOdds: number; // total number of odds winMoney = stake * totalOdds

  @Field()
  @Prop({ unique: true, index: true })
  ticketID: string; // cashier uses this id for searching

  @Field(returns => Boolean)
  @Prop({default: false})
  isPlaced: boolean;

  @Field(returns => String, {nullable: true})
  @Prop()
  placedDate: string

  @Field({nullable: true})
  @Prop({index: true })
  placementID: string; // used for searching purpose for customer after placing 

  @Field(type => TicketStatus)
  @Prop({index: true, default: TicketStatus.PENDING})
  status: TicketStatus; //InComplete, win, lose

  // WHO SAVED THE TICKET ?
  // UPDATED AT TIME OF PLACEMENT
  // how guest can place bet?
  @Field(type => PlacerType)
  @Prop({default: PlacerType.GUEST})
  placerType: PlacerType;

  @Field({nullable: true})
  @Prop({index: true})
  userID: string; // this user 
  

  @Field({nullable: true}) // if null it's Online
  @Prop({index: true})
  shopID: string;

  @Field({nullable: true})
  user: User; // this user 
  

  @Field({nullable: true}) // if null it's Online
  shop: Shop;

  @Field(type => [Bet], {nullable: true})
  bets: Bet[];

  @Field(returns => Boolean)
  @Prop({default: false})
  isExpired: boolean;

  @Field({nullable: true})
  @Prop()
  resolvedDate: string

  @Field({nullable: true})
  @Prop()
  paidDate: string

  @Field({nullable: true})
  payer: User

  @Field({nullable: true})
  @Prop({index: true})
  payerID: string
}


export const TicketSchema = SchemaFactory.createForClass(Ticket);