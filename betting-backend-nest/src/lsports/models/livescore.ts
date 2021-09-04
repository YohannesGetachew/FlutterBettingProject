import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base';
import {ObjectType, Field, registerEnumType} from '@nestjs/graphql';

export enum IncidentType {
  'Football_Corners' = 1,
  'Football_Penalties' = 8,
  'Football_Goal' = 9,
  'Football_Own_goal' = 24,
  'Football_Missed_penalty' = 40,
  'Football_Penalty_goal' = 25,
  'Football_Substitutions' = 10,
  'Football_Red_cards' = 7,
  'Football_Yellow_cards' = 6,

  'Tennis_Aces' = 20,
  'Tennis_Double_faults' = 21,
  'Tennis_First_serve_wins' = 34,

  'Basketball_Fouls' = 12,
  'Basketball_Two_points' = 28,
  'Basketball_Three_points' = 30,
  'Basketball_Time_outs' = 31,
  'Basketball_Free_throws' = 32,

  'IceHockey_Penalties' = 8,
  'Baseball_Hits' = 33,
  //
}

registerEnumType(IncidentType,{
  name: "IncidentType"
});




@ObjectType()
export class Scoreboard {
  @Field(type => String, {nullable: true})
  Status: string;
  @Field(type => String, {nullable: true})
  Description: string;
  @Field(type => Number, {nullable: true})
  CurrentPeriod: number;
  @Field(type => String, {nullable: true})
  Time: string;
  @Field(type => [Result], {nullable: true})
  Results: Result[];
}

@ObjectType()
export class Result {
  @Field(type => String, {nullable: true})
  Value: string;
  
  @Field(type => String, {nullable: true})
  Position: string;
}
@ObjectType()
export class Incident {
  @Field(type => String, {nullable: true})
  Period: string;
  @Field(type => String, {nullable: true})
  Seconds: string;
  @Field(type => IncidentType, {nullable: true})
  IncidentType: IncidentType; // enum
  @Field(type => Number, {nullable: true})
  ParticipantPosition: number;
  @Field(type => String, {nullable: true})
  PlayerName: string;
  @Field(type => [Result], {nullable: true})
  Results: Result[];
}
@ObjectType()
export class Period {
  @Field(type => Number, {nullable: true})
  Type: number; // enum
  @Field(type => Boolean, {nullable: true})
  IsConfirmed: boolean;
  @Field(type => Boolean, {nullable: true})
  IsFinished: boolean;
  @Field(type => [Result], {nullable: true})
  Results: Result[];
  @Field(type => [Incident], {nullable: true})
  Incidents: Incident[];
}
@ObjectType()
export class StatisticsValue {
  @Field(type => String, {nullable: true})
  Value: string;
  @Field(type => String, {nullable: true})
  Position: string;
}
@ObjectType()
export class Statistic {
  @Field(type => IncidentType, {nullable: true})
  Type: IncidentType; // enum value
  @Field(type => StatisticsValue, {nullable: true})
  Value: StatisticsValue;
}
//The livescore element holds all scores and statistics:
@ObjectType()
export class livescore {
  @Field(type => Scoreboard, {nullable: true})
  Scoreboard: Scoreboard;
  @Field(type => [Period], {defaultValue: []})
  Periods: Period[];
  @Field(type => [Statistic], {defaultValue: []})
  Statistics: Statistic[];
}

@ObjectType()
@Schema({timestamps: true})
export class LiveScore extends Base {
  @Field()
  @Prop()
  fixtureId: string;
  @Field(type => livescore)
  @Prop()
  score: livescore;
}

export const LiveScoreSchema = SchemaFactory.createForClass(LiveScore);
