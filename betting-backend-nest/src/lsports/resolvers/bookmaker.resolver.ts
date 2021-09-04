import {Resolver, Query} from '@nestjs/graphql';
import { Bookmaker } from '../models/bookmaker';
import { BookmakerService } from '../services/bookmaker.service';

@Resolver(of => Bookmaker)
export class BookmakerResolver {
    constructor(private readonly bookmakerService: BookmakerService) {}
    @Query(returns => [Bookmaker])
    bookmakers() {
        return this.bookmakerService.findAll({});
    }

}