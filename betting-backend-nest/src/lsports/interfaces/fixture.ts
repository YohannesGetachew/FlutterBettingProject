import { Participant, ScoreboardStatus } from '../models/fixture';

export interface IFixture {
  id: string;
  startDate: string;
  status: ScoreboardStatus;
  sportId: string;
  leagueId: string;
  countryId: string;
  participants: Participant[];
}
