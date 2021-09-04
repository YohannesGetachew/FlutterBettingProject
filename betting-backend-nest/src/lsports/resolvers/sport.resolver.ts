import {Resolver, Query, Args, Parent, ResolveField, Mutation} from '@nestjs/graphql';
import {Sport} from '../models/sport';
import {SportService} from '../services/sport.service';
import {CountryService} from '../services/country.service';
import {SportDTO} from '../dtos/sport.dto';
import {Fixture} from "../models/fixture";
import {FixtureService} from "../services/fixture.service";

@Resolver(of => Sport)
export class SportResolver {
    constructor(
        private sportService: SportService,
        private countryService: CountryService,
        private fixtureService: FixtureService
    ) {
    }

    @Query(returns => [Sport])
    sports() {
        return this.sportService.findAll({});
    }

    @Query(returns => Sport)
    sport(@Args('id') id: string) {
        return this.sportService.findById(id);
    }

    @Mutation(returns => Sport)
    updateSport(@Args('id') id: string, @Args('updateInput') updateInput: SportDTO) {
        return this.sportService.update(id, updateInput);
    }

    @ResolveField(returns => [Fixture])
    fixtures(@Parent() sport) {
        return this.fixtureService.findAll({sportId: sport.id});
    }
}

