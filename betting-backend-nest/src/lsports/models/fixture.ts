import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Base } from './base';
import { Country } from './country';
import { League } from './league';
import { BasicOdd, Odd } from './odd';
import { Sport } from './sport';
import { LiveScore } from './livescore';

export class ExtraData {
  [name: string]: string;
}
export enum ScoreboardStatus {
  'Not_started_yet' = 1,
  'In_progress' = 2,
  'Finished' = 3,
  'Cancelled' = 4,
  'Postponed' = 5,
  'Interrupted' = 6,
  'Abandoned' = 7,
  'Coverage_lost' = 8,
  'About_to_start' = 9,
}

export interface Market {
  id: string;
  name: string;
  providers: Provider[];
}

export interface Provider {
  id: string;
  name: string;
  LastUpdate: string;
  ProviderFixtureId: string;
  ProviderLeagueId: string;
  ProviderMarketId: string;
  bets: Bet[];
}
export enum BetSettlement {
  'Cancelled' = -1,
  'Loser' = 1,
  'Winner' = 2,
  'Refund' = 3,
  'HalfLost' = 4,
  'HalfWon' = 5,
}

export enum IncidentType {
  '[Football] Corners' = 1,
  '[Football] Penalties' = 8,
  '[Football] Goal' = 9,
  '[Football] Own goal' = 24,
  '[Football] Missed penalty' = 40,
  '[Football] Penalty goal' = 25,
  '[Football] Substitutions' = 10,
  '[Football] Red cards' = 7,
  '[Football] Yellow cards' = 6,

  '[Tennis] Aces' = 20,
  '[Tennis] Double faults' = 21,
  '[Tennis] First serve wins' = 34,

  '[Basketball] Fouls' = 12,
  '[Basketball] Two points' = 28,
  '[Basketball] Three points' = 30,
  '[Basketball] Time outs' = 31,
  '[Basketball] Free throws' = 32,

  '[Ice Hockey] Penalties' = 8,
  '[Baseball] Hits' = 33,
  //
}

export enum StatusDescription {
  'Halftime' = 1,
  'Overtime Halftime' = 2,
  'Home participant has retired' = 3,
  'Away participant has retired' = 4,
  'Coverage for this event has been lost' = 5,
  'Medical timeout' = 6,
  'Timeout of home team' = 7,
  'Timeout of away team' = 8,
  'Timeout (when team is not known)' = 9,
  'Home walkover' = 10,
  'Away walkover' = 11,
}
export interface Bet {
  id: string;
  name: string;
  StartPrice: string;
  Price: string; // current price
  Settlement: BetSettlement; // enum
  LastUpdate: string;
}
export interface Scoreboard {
  staus: string;
  description: string;
  currentPeriod: string;
  time: number;
  score: Score[];
}
export interface Score {
  Score: string;
  Position: string;
}
export interface Incident {
  Period: string;
  Seconds: string;
  IncidentType: IncidentType; // enum
  ParticipantPosition: number;
  PlayerName: string;
  score: Score[];
}
export interface Period {
  Type: number; // enum
  isConfirmed: boolean;
  isFinished: boolean;
  socre: Score[];
  Incidents: Incident[];
}
export interface StatisticsValue {
  value: string;
  position: string;
}
export interface Statistic {
  Type: string;
  Value: StatisticsValue;
}
//The livescore element holds all scores and statistics:
export interface Livescore {
  Scoreboard: Scoreboard;
  periods: Period[];
  Statistics: Statistic[];
}
@ObjectType()
export class Participant {
  @Field(type => String, {nullable: true})
  id: string;

  @Field(type => String, {nullable: true})
  name: string;

  @Field(type => Number, {nullable: true})
  rotationId: number;

  @Field(type => Number, {nullable: true})
  position: number; // in 2-participant events 1 - home and 2 - away
  /**
   * Will only show in outright events.
   * False if the participant is no longer active. For example: When a horse is set as non-runner
   */

  @Field(type => Boolean, {nullable: true})
  isActive: boolean;
  
  ExtraData: ExtraData[];
}

registerEnumType(ScoreboardStatus, {
  name: 'ScoreboardStatus',
});
@ObjectType()
@Schema({ timestamps: true })
export class Fixture extends Base {
  @Field(type => String)
  @Prop({ unique: true })
  id: string;

  @Field(type => String)
  @Prop()
  startDate: string;

  @Field(type => ScoreboardStatus)
  @Prop()
  status: ScoreboardStatus;
  
  @Field(type => String)
  @Prop()
  sportId: string;

  @Field(type => Sport)
  sport: Sport;
  
  @Field(type => String)
  @Prop()
  leagueId: string;

  @Field(type => League)
  league: League;
  
  @Field(type => String)
  @Prop()
  countryId: string;

  @Field(type => Country)
  country: Country;
  
  @Field(type => [Participant])
  @Prop()
  participants: Participant[];
  
  @Field(returns => BasicOdd, {defaultValue: {odds:{bets: []}, more: 0}})
  basicOdds: BasicOdd;

  @Field(type => [Odd], {defaultValue: [], nullable: true})
  odds: Odd[];

  @Field(type => LiveScore, {nullable: true})
  liveScore: LiveScore;
}
export const FixtureSchema = SchemaFactory.createForClass(Fixture);
