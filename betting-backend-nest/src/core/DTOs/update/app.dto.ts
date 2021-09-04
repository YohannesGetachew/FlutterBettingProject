import { Field, InputType } from '@nestjs/graphql';
import { AdvertisementDTO } from './advertisement.dto';
@InputType()
export class AppDto {
  @Field({nullable: true})
  appName: string;

  @Field({nullable: true})
  appLogo: string;

  @Field(returns => Number, {nullable: true})
  maxWin: number;

  @Field(returns => Number, {nullable: true})
  maxStake: number;

  @Field(returns => Number, {nullable: true})
  minStake: number;

  @Field(returns => Number, {nullable: true})
  withdrawalLimit: number;

  @Field({nullable: true})
  rules: string;

  @Field(returns => [AdvertisementDTO], {nullable: true})
  advertisements: AdvertisementDTO[];

  @Field(returns => Number, {nullable: true})
  commissionRate: number;

  @Field(returns => Number, {nullable: true})
  vatRate: number;

  @Field(returns => Number, {nullable: true})
  bookmaker: number; // selected Bookmaker

}