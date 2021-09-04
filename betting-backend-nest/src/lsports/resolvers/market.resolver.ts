import {Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { MarketDTO } from '../dtos/market.dto';
import { Market } from '../models/market';
import { MarketService } from '../services/market.service';

@Resolver(of => Market)
export class MarketResolver {
    constructor(
        private readonly marketService: MarketService,
        ) {}

    @Query(returns => [Market])
    markets() {
        return this.marketService.findAll({});
    }

    @Mutation(returns => Market)
    updateMarket(@Args('id') id: string, @Args('updateInput') updateInput: MarketDTO) {
        return this.marketService.update(id, updateInput);
    }

    // favourite markets ? by number of placed bets
    // {_id: string, count: number}
    // @Query(returns => [FavMarket])
    // favMarkets() {
    //     // get number of bets grouped by type, then get max of 5
    //     return this.betService.favMarkets();
    // }
}
