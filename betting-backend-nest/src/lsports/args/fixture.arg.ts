import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ScoreboardStatus } from '../models/fixture';

@ArgsType()
export class FixtureArg {
    @Field(type => Boolean, {nullable: true})
    isAvailable: boolean;

    @Field(type => String, {nullable: true})
    leagueId: number;

    @Field(type => String, {nullable: true})
    id: string;

    @Field(type => String, {nullable: true})
    sportId: string;

    @Field(type => ScoreboardStatus, {defaultValue: ScoreboardStatus.Not_started_yet})
    status: ScoreboardStatus;
    // league, live, status, isAvailbable, hightlighted, sport
}