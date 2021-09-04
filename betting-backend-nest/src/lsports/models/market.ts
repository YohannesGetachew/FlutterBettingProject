import { Field, ObjectType } from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Base } from './base';

@ObjectType()
@Schema()
export class Market extends Base {
    @Field(type => String)
    @Prop({index: true, unique: true})
    id: string;

    @Field(type => String)
    @Prop({index: true, unique: true})
    name: string;

    @Field(type => Number, {nullable: true})
    @Prop()
    order: number;

    @Field(type => Boolean)
    @Prop({default: true})
    isAvailable: boolean
}

export const MarketSchema = SchemaFactory.createForClass(Market);