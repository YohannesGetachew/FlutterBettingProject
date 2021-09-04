import {Args, Query, Resolver, Subscription} from "@nestjs/graphql";
import {LiveScore} from "../models/livescore";
// import {LiveScoreService} from "../services/livescore.service";
import {LiveService} from "../../Live/live.service";
import { PubSubEngine } from "graphql-subscriptions";
import { Inject } from "@nestjs/common";

@Resolver(of => LiveScore)
export class LiveScoreResolver {
    constructor(
        //         private readonly liveService: LiveService,
        // @Inject("PUB_SUB") private pubSub: PubSubEngine
        ) {
    }
    // @Query(returns => LiveScore)
    // liveScoreByFixture(@Args('fixtureId') fixtureId: string) {
    //     return this.liveScoreService.findOne({fixtureId});
    // }

    // @Subscription(returns => LiveScore, {name: "liveScore", nullable: true})
    // liveScore() {
    //     return this.pubSub.asyncIterator('liveScore');;
    // }
}
