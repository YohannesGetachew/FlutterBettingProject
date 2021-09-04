import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class LeagueArg {
  @Field((type) => Boolean, { nullable: true })
  isTop: boolean;
  @Field((type) => Boolean, { nullable: true })
  isAvailable: boolean;
  @Field((type) => String, { nullable: true })
  countryId: string;
  @Field((type) => String, { nullable: true })
  sportId: string;
}
