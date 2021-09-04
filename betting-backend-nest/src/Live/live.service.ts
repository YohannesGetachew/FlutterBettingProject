import {Injectable} from "@nestjs/common";
import {GrpcMethod} from "@nestjs/microservices";
import {IFixture} from "../lsports/interfaces/fixture";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable()
export class LiveService {
    liveFixture = new Subject();
    liveFixture$ = this.liveFixture.asObservable();


    liveOdd = new Subject();
    liveOdd$ = this.liveOdd.asObservable();


    liveScore = new Subject();
    liveScore$ = this.liveScore.asObservable();
}
