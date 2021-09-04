import {Controller, Inject} from "@nestjs/common";
import {GrpcMethod} from "@nestjs/microservices";
import {IFixture} from "../lsports/interfaces/fixture";
import {LiveService} from "./live.service";
import { PubSubEngine } from 'graphql-subscriptions';
import {IOdd} from "../lsports/interfaces/odd";
import {ILiveScore} from "../lsports/interfaces/livescore";
@Controller()
export class LiveController {
    constructor(private liveService: LiveService,
        @Inject("PUB_SUB") private pubSub: PubSubEngine) {
    }
    @GrpcMethod('LiveService', 'sendNewFixture')
    sendNewFixture(fixture: IFixture): {isOk: boolean} {
        this.pubSub.publish('liveFixture', {liveFixture: fixture}).then();
        return {isOk: true};
    }

    @GrpcMethod('LiveService', 'sendNewOdd')
    sendNewOdd(odd: IOdd): {isOk: boolean} {
        this.pubSub.publish('liveOdd', {liveOdd: odd}).then();
        return {isOk: true};
    }


    @GrpcMethod('LiveService', 'sendLiveScore')
    sendLiveScore(liveScore: ILiveScore): {isOk: boolean} {
        this.pubSub.publish('liveScore', {liveScore: liveScore}).then();
        return {isOk: true};
    }
}
