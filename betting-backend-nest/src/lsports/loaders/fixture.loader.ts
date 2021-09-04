import {Injectable, Scope} from "@nestjs/common";
import * as Dataloader from 'dataloader';
import {Idataloader} from "./IDataloader";
import {League} from "../models/league";
import {LeagueService} from "../services/league.service";
import {Fixture} from "../models/fixture";
import {FixtureService} from "../services/fixture.service";
@Injectable({scope: Scope.REQUEST})
export class FixtureLoader implements Idataloader<string, Fixture[]>{
    constructor(
        readonly dataLoader: Dataloader<any, any>,
    ) {
    }
    public static async create(
        fixtureService: FixtureService,
    ): Promise<FixtureLoader> {
        const dataloader =  new Dataloader<string, Fixture[]>(
            async keys => {
                const fixtures = await fixtureService.findAllNotExpired(keys);
                return keys.map(key => fixtures.filter(fixture => fixture.leagueId === key));
            });
        return new FixtureLoader(dataloader);
    }

    load(id: string): Promise<Fixture[]> {
        return this.dataLoader.load(id);
    }
}
