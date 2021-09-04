import {Resolver, Query, Args, ResolveProperty, Parent, Mutation, ResolveField, Subscription} from '@nestjs/graphql';
import {FixtureArg} from '../args/fixture.arg';
import {FixtureDTO} from '../dtos/fixture.dto';
import {Fixture} from '../models/fixture';
import {BasicOdd, Odd} from '../models/odd';
import {FixtureService} from '../services/fixture.service';
import {OddService} from '../services/odd.service';
import {OddLoader} from "../loaders/odd.loader";
import {Country} from '../models/country';
import {CountryService} from '../services/country.service';
import {League} from '../models/league';
import {LeagueService} from '../services/league.service';
// import {GrpcMethod} from "@nestjs/microservices";
// import {IFixture} from "../interfaces/fixture";
// import {LiveService} from "../../Live/live.service";
import { LiveScore } from '../models/livescore';
import {LiveScoreService} from "../services/livescore.service";
// import { Inject } from '@nestjs/common';
// import { PubSubEngine } from 'graphql-subscriptions';

@Resolver(of => Fixture)
export class FixtureResolver {

    constructor(
        private fixtureService: FixtureService,
        private oddService: OddService,
        private oddLoader: OddLoader,
        private countryService: CountryService,
        private leagueService: LeagueService,
        // private liveService: LiveService,
        private liveScoreService: LiveScoreService,
        // @Inject("PUB_SUB") private pubSub: PubSubEngine
    ) {
    }

    @Query(returns => [Fixture])
    fixtures(@Args() args: FixtureArg) {
        // args league, live, status, isAvailbable, hightlighted, sport
        return this.fixtureService.findAll(args);
    }

    @Query(returns => Fixture, {nullable: true})
    fixture(@Args('id') id: string) {
        return this.fixtureService.findOne({id});
    }

    @Mutation(returns => Fixture)
    updateFixture(@Args('id') id: string, @Args('updateInput') updateInput: FixtureDTO) {
        return this.fixtureService.update(id, updateInput);
    }

    //basic odds
    @ResolveField(returns => BasicOdd, {defaultValue: {}})
    basicOdds(@Parent() fixture) {
        return this.oddService.basicOdds(fixture.id)
    }

    // all odds
    // @ResolveField(returns => BasicOdd, {defaultValue: {}})
    // basicOdds(
    //     @Parent() fixture,
    //     @Loader(OddLoader) oddLoader: DataLoader<Odd['fixture'], BasicOdd>,
    //     ){
    //         console.log(JSON.stringify(fixture));
    //     return oddLoader.loadMany(fixture.fixtures);
    // }
    @ResolveField(returns => [Odd])
    odds(
        @Parent() fixture,
    ) {
        return this.oddLoader.load(fixture.id);
        //  return this.oddService.findAll({fixtureId: fixture.id});
    }

    // // fav fixture
    // @Query(returns => [FavFixture])
    // favFixtures() {
    //     return this.fixtureService.favFixture();
    // }

    @ResolveField(returns => Country)
    country(@Parent() fixture) {
        return this.countryService.findOne({id: fixture.countryId})
    }

    @ResolveField(returns => League)
    league(@Parent() fixture) {
        return this.leagueService.findOne({id: fixture.leagueId})
    }

    // @Subscription(returns => Fixture, {name: "liveFixture", nullable: true}, )
    // async liveFixture() {
    //     return this.pubSub.asyncIterator('liveFixture');;
    // }

    @ResolveField(returns => LiveScore)
    liveScore(@Parent() fixture) {
        return this.liveScoreService.findOne({fixtureId: fixture.id});
    }
}
