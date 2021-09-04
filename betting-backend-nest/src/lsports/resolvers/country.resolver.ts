import {Resolver, Query, Args, ResolveProperty, Parent, Mutation, ResolveField} from '@nestjs/graphql';
import { CountryDTO } from '../dtos/country.dto';
import { Country } from '../models/country';
import { League } from '../models/league';
import { CountryService } from '../services/country.service';
import { LeagueService } from '../services/league.service';
import {LeagueLoader} from "../loaders/league.loader";

@Resolver(of => Country)
export class CountryResolver {
    constructor(
        private countryService: CountryService,
        private leagueService: LeagueService,
        private leagueLoader: LeagueLoader
        ) {}
    @Query(returns => [Country])
    countries() {
        return this.countryService.findAll({});
    }
    @Query(returns => Country)
    country(@Args('id') id: string) {
        return this.countryService.findById(id);
    }
    @Mutation(returns => Country)
    updateCountry(@Args('id') id: string, @Args('updateInput') updateInput: CountryDTO) {
        return this.countryService.update(id, updateInput);
    }
    @ResolveField(returns => [League])
    leagues(@Parent() country) {
        return  this.leagueLoader.load(country.id);
       // return this.leagueService.findAll({countryId: country.id});
    }
    // TODO resolve the league
}
