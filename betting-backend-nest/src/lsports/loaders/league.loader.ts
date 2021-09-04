import {Injectable, Scope} from "@nestjs/common";
import * as Dataloader from 'dataloader';
import {Idataloader} from "./IDataloader";
import {League} from "../models/league";
import {LeagueService} from "../services/league.service";
@Injectable({scope: Scope.REQUEST})
export class LeagueLoader implements Idataloader<string, League[]>{
    constructor(
        readonly dataLoader: Dataloader<any, any>,
    ) {
    }
    public static async create(
        leagueService: LeagueService,
    ): Promise<LeagueLoader> {
        const dataloader =  new Dataloader<string, League[]>(
            async keys => {
                const leagues = await leagueService.findByCountryIds(keys);
                return keys.map(key => leagues.filter(odd => odd.countryId === key));
            });
        return new LeagueLoader(dataloader);
    }

    load(id: string): Promise<League[]> {
        return this.dataLoader.load(id);
    }
}
