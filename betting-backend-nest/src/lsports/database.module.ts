import { Module } from '@nestjs/common';
import { Bookmaker, BookmakerSchema } from './models/bookmaker';
import { Country, CountrySchema } from './models/country';
import { Fixture, FixtureSchema } from './models/fixture';
import { League, LeagueSchema } from './models/league';
import { Market, MarketSchema } from './models/market';
import { Odd, OddSchema } from './models/odd';
import { Sport, SportSchema } from './models/sport';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmakerService } from './services/bookmaker.service';
import { CountryService } from './services/country.service';
import { FixtureService } from './services/fixture.service';
import { LeagueService } from './services/league.service';
import { MarketService } from './services/market.service';
import { OddService } from './services/odd.service';
import { SportService } from './services/sport.service';
import {LiveScoreService} from "./services/livescore.service";
import {LiveScore, LiveScoreSchema} from "./models/livescore";
const MODELS = [
  { name: Bookmaker.name, schema: BookmakerSchema },
  { name: Country.name, schema: CountrySchema },
  { name: Fixture.name, schema: FixtureSchema },
  { name: League.name, schema: LeagueSchema },
  { name: Market.name, schema: MarketSchema },
  { name: Odd.name, schema: OddSchema },
  { name: Sport.name, schema: SportSchema },
  { name: LiveScore.name, schema: LiveScoreSchema},
];
const PROVIDERS = [
  BookmakerService,
  CountryService,
  FixtureService,
  LeagueService,
  MarketService,
  OddService,
  SportService,
    LiveScoreService,
];

@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  providers: PROVIDERS,
  exports: [MongooseModule, ...PROVIDERS],
})
export class DatabaseModule {}
