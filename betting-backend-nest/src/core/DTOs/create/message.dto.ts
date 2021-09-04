import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class MessageDto {
  @Field()
  messageHead: string;

  @Field()
  messageBody: string;

  @Field()
  customerId: string
}