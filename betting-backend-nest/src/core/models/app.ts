import {ObjectType, Field} from '@nestjs/graphql';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Base } from './base';

@ObjectType()
export class Advertisement {
  @Field()
  id: string;

  @Field({nullable: true})
  name: string;

  @Field({defaultValue: 'Header'})
  position: string;

  @Field()
  imagePath: string;
}


@ObjectType()
@Schema({timestamps: true})
export class App extends Base {
  @Field()
  @Prop({index: true, unique: true, default: 'Birrbet'})
  appName: string;
  
  @Field()
  @Prop()
  appLogo: string;

  @Field({defaultValue: new Date()})
  currentTime: string; // server time

  @Field(returns => Number)
  @Prop({default: 200000})
  maxWin: number;

  @Field(returns => Number)
  @Prop({default: 1000})
  maxStake: number;

  @Field(returns => Number)
  @Prop({default: 30})
  minStake: number;

  @Field(returns => Number)
  @Prop({default: 1000})
  withdrawalLimit: number;

  @Field(returns => Number)
  @Prop({default: 0.15})
  commissionRate: number;

  @Field(returns => Number)
  @Prop({default: 0.15})
  vatRate: number;

  @Field()
  @Prop({default: 8})
  bookmaker: number; // selected Bookmaker

  @Field(returns => [Advertisement])
  @Prop({default: []})
  advertisements: Advertisement[];

  @Field({nullable: true})
  @Prop()
  rules: string;
}

export const AppSchema = SchemaFactory.createForClass(App);