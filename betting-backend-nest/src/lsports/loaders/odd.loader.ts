import {Injectable, Scope} from "@nestjs/common";
import * as Dataloader from 'dataloader';
import {Idataloader} from "./IDataloader";
import {Odd} from "../models/odd";
import {OddService} from "../services/odd.service";
@Injectable({scope: Scope.REQUEST})
export class OddLoader implements Idataloader<string, Odd[]>{
    constructor(
        readonly dataLoader: Dataloader<any, any>,
    ) {
    }
    public static async create(
        oddService: OddService,
    ): Promise<OddLoader> {
        const dataloader =  new Dataloader<string, Odd[]>(
            async keys => {
                const odds = await oddService.findByFixtureIds(keys);
                return keys.map(key => odds.filter(odd => odd.fixtureId === key));
            });
        return new OddLoader(dataloader);
    }

    load(id: string): Promise<Odd[]> {
        return this.dataLoader.load(id);
    }
}
