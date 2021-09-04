import {Module, HttpModule, Scope} from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { BookmakerResolver } from './resolvers/bookmaker.resolver';
import { CountryResolver } from './resolvers/country.resolver';
import { FixtureResolver } from './resolvers/fixture.resolver';
import { LeagueResolver } from './resolvers/league.resolver';
import { MarketResolver } from './resolvers/market.resolver';
import { OddResolver } from './resolvers/odd.resolver';
import { SportResolver } from './resolvers/sport.resolver';
import {FixtureLoader} from "./loaders/fixture.loader";
import {LeagueLoader} from "./loaders/league.loader";
import {OddLoader} from "./loaders/odd.loader";
import {OddService} from "./services/odd.service";
import {FixtureService} from "./services/fixture.service";
import {LeagueService} from "./services/league.service";
// import {LiveModule} from "../Live/Live.module";
import {LiveScoreResolver} from "./resolvers/livescore.resolver";
@Module({
  imports: [
    HttpModule.register({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'gzip',
      },
    }),
    DatabaseModule,
      // LiveModule
  ],
  providers: [
    SportResolver,
    BookmakerResolver,
    CountryResolver,
    FixtureResolver,
    LeagueResolver,
    MarketResolver,
    OddResolver,
      LiveScoreResolver,
    {
      inject: [OddService],
      useFactory: OddLoader.create,
      provide: OddLoader,
      scope: Scope.REQUEST,
    },
    {
      inject: [FixtureService],
      useFactory: FixtureLoader.create,
      provide: FixtureLoader,
      scope: Scope.REQUEST,
    },
    {
      inject: [LeagueService],
      useFactory: LeagueLoader.create,
      provide: LeagueLoader,
      scope: Scope.REQUEST,
    },
  ],
})
export default class LSportModule {}
