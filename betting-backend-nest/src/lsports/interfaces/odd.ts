import {Bet} from "../models/odd";

export interface IOdd {
  id: string;
  marketId: string;
  fixtureId: string;
  bookmakerId: string;
  bets: Bet[];
}
