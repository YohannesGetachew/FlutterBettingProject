import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;

  @Field()
  refreshToken?: string;

  @Field({defaultValue: 'bearer', nullable: true})
  tokenType: string;

  @Field(returns => Number)
  expiresIn: number; // in seconds
}