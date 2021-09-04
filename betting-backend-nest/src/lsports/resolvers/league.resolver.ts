import {
  Resolver,
  Query,
  Args,
  ResolveProperty,
  Parent,
  Mutation,
  ResolveField,
} from '@nestjs/graphql';
import { League } from '../models/league';
import { Fixture } from '../models/fixture';
import { LeagueService } from '../services/league.service';
import { FixtureService } from '../services/fixture.service';
import { LeagueDTO } from '../dtos/league.dto';
import { LeagueArg } from '../args/league.arg';
import {FixtureLoader} from "../loaders/fixture.loader";
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';
@Resolver((of) => League)
export class LeagueResolver {
  constructor(
    private leagueService: LeagueService,
    private fixtureService: FixtureService,
    private fixtureLoader: FixtureLoader,
    private countryService: CountryService
  ) {}
  @Query((returns) => [League])
  leagues(@Args() args: LeagueArg) {
    // @TODO
    return this.leagueService.findAll(args);
  }
  @Query((returns) => League)
  league(@Args('id') id: string) {
    return this.leagueService.findById(id);
  }
  // TODO add guard here
  @Mutation((returns) => League)
  updateLeague(
    @Args('id') id: string,
    @Args('updateInput') updateInput: LeagueDTO,
  ) {
    return this.leagueService.update(id, updateInput);
  }

  @ResolveField(returns => Country)
  country(@Parent() league) {
    return this.countryService.findOne({id: league.countryId});
  }

  @ResolveField((returns) => [Fixture])
  async fixtures(
    @Parent() league,
  ) {
    return await this.fixtureLoader.load(league.id);
   // return await this.fixtureService.findAll({leagueId: league.id});
  }
}
