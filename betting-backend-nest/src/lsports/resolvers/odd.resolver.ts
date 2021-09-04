import {Resolver, Query, Args, ResolveField, Parent, Subscription} from '@nestjs/graphql';
import { OddArg } from '../args/odd.arg';
import { Market } from '../models/market';
import { Odd } from '../models/odd';
import { OddService } from '../services/odd.service';
import { MarketService } from '../services/market.service';
// import {PubSub, PubSubEngine} from "graphql-subscriptions";
// import {LiveService} from "../../Live/live.service";
import { Inject } from '@nestjs/common';
@Resolver(of => Odd)
export class OddResolver {
    constructor(private oddService: OddService,
        private marketService: MarketService,
                // private liveService: LiveService,
                // @Inject("PUB_SUB") private pubSub: PubSubEngine
    ) {}
    @Query(returns => [Odd])
    odds(@Args() args: OddArg) {
        return this.oddService.findAll(args);
    }
    @Query(returns => Odd)
    odd(@Args('id') id: string) {
        return this.oddService.findById(id);
    }
    @ResolveField(returns => Market)
    market(@Parent() odd) {
        return this.marketService.findOne({id: odd.marketId});
    }


    // @Subscription(returns => Odd, {name: "liveOdd", nullable: true})
    // async liveOdd() {
    //    return this.pubSub.asyncIterator('liveOdd');
    // }
}
