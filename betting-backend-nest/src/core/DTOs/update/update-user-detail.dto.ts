import { InputType, PickType, Field } from "@nestjs/graphql";

@InputType()
export class UpdateUserDetailDTO {
    @Field(returns => Number, {nullable: true})
    accountBalance: number; // if only the user is customer
  
    @Field({nullable: true})
    profileImage: string;
}