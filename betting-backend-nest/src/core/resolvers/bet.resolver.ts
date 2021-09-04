import {Resolver, Query} from '@nestjs/graphql';
import { Bet } from '../models/bet';

@Resolver(of => Bet)
export class BetResolver {
    @Query(returns => [Bet])
    bets() {
        // filter by date =  ['today', 'this week', 'last week', 'this month', 'last month']
        // filter 
    }
}
