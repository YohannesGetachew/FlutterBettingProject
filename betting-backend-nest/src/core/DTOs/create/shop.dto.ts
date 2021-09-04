import { Field, InputType } from '@nestjs/graphql';
import { Contact, Location } from '../../models/shop';
import { LocationDTO } from './location.dto';
import { ContactDTO } from './contact.dto';

@InputType()
export class ShopDto {
  @Field()
  branchName: string;
  @Field(returns => Boolean, {nullable: true, defaultValue: true})
  isActive: boolean;
  @Field(type=>String)
  adminId: string;
  @Field(returns => [ContactDTO], {nullable: true})
  contacts: ContactDTO[];
  @Field(returns => LocationDTO, {nullable: true})
  location: LocationDTO;
}