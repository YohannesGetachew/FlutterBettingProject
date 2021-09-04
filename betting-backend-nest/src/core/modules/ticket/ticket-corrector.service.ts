import { Injectable } from '@nestjs/common';
import { Logger} from '@nestjs/common';
import { bet, fixture } from './data';

enum PeriodType {
  BOTH = 'BOTH',
  EITHER = 'EITHER',
  FIRST = 'FIRST',
  SECOND = 'SECOND'
}
enum BetType {
  GOAL = 'GOAL',
  CORNER = 'CORNER',
  ASIAN_HANDICAP = 'ASIAN_HANDICAP',
  HANDICAP = 'HANDICAP',
  CARD = 'CARD'
}
@Injectable()
export class TicketCorrectorService {
  // bets with fixtureId, type of market, value user placed, fixture
  // determine if the bet type is goal
  // events/statistics -> corners and cards

  constructor() {
    this.correct(bet, fixture);
  }
  // TODO takes bet type and decide which period the bet is from.
  getPeriod (type: string): PeriodType {
    if (type.includes('First Half')) {
      return PeriodType.FIRST;
    } else if (type.includes('Second Half')) {
      return PeriodType.SECOND;
    } else if (type.includes('Either Half') || type.includes('HT/FT') || type.includes("Highest Scoring Half") || type.includes("Win Both Halves")) {
      return PeriodType.EITHER;
    }
    return PeriodType.BOTH;
  }
  getBetType(type: string): BetType {
    if (type.includes('Asian Handicap')) {
      return BetType.ASIAN_HANDICAP;
    } else if (type.includes('Handicap')) {
      return BetType.HANDICAP;
    } else if (type.includes('Corners')) {
      return BetType.CORNER;
    } else if (type.includes('Cards')) {
      return BetType.CARD;
    }
    return BetType.GOAL;
  }
  getInterestedResult(period: PeriodType, betType: BetType, fixture) {
    const events = ["Team To Score First", "Team To Score Last", "First 10 min Winner"]
    if (betType === BetType.GOAL) {
      switch (period) {
        case PeriodType.BOTH:
          return fixture.score.fulltime;
        case PeriodType.EITHER:
          return fixture.score; // return both half T and Full T
        case PeriodType.SECOND:
          return this.getSecondHalfResult(fixture.score);
        case PeriodType.FIRST:
          return fixture.score.halftime;
      }
    }
    // get cards and corners from statistics ?
  }
  getCorrectResult (result, type: string, userBetValue: string): string {
    // Goals Over/Under, Goals Even/odd, Ht/Ft Double, Exact Score
    if (type.includes('Goals Over/Under') || type.includes("Total - ")) {
      const [t, n] = userBetValue.split(" ");
      const team = type === 'Goals Over/Under' ? "both" : ("Total - Home" === type ? "home" : "away");
      return this.computeOverUnderGoals(result, t, n, team);
    } else if (type.includes("HT/FT Double")) {
      return `${this.compareResultGetHighest(result.halftime)}/${this.compareResultGetHighest(result.fulltime)}`;
    } else if (type.includes('Exact Score') || type.includes('Correct Score')) {
      return `${result.home}:${result.away}`;
    } else if (type.includes('Double Chance')) {
      return this.computeDoubleChance(result, userBetValue);
    } else if (type.includes('Odd/Even')) {
      return this.computeOddEven(result);
    } else if (type.includes("Both Teams Score")) {
      return !!(result.away && result.home) ? "Yes" : "No";
    } else if (type.includes("Win To Nil")) {
      return this.computeWinToNil(result, userBetValue);
    } else if (type.includes("Exact Goals")) {
      return this.computeExactGoals(type, result);
    } else if (type.includes("To Win Either Half")) {
      return this.computeToWinHalf(result, userBetValue, 'either');
    } else if (type.includes("Results/Both Teams Score")) {
      return `${this.compareResultGetHighest(result)}/${(!!(result.away && result.home) ? "Yes" : "No")}`
    } else if (type.includes("Result/Total Goals")) {
      const [t, n] = userBetValue.split("/")[1].split(" ");
      return `${this.compareResultGetHighest(result)}/${this.computeOverUnderGoals(result, t, n, 'both')}`
    } else if (type.includes("Team Score a Goal")){
      return this.computeTeamScoreGoal(type, result);
    } else if (type.includes("Winning Margin")) {
      return ;
    } else if (type.includes("Total Goals/Both Teams To Score")) {
      const n =  userBetValue.split("/")[1].split(" ")[1];
      return this.computeTotalGoalsBothTeamsToScore(result, n);
    } else if (type.includes("Highest Scoring Half")) {
      return this.computeHighestScoringHalf(result);
    } else if (type.includes('Win Both Halves')) {
      return this.computeToWinHalf(result, userBetValue, 'both');
    } else if (type.includes("Goal Line")) {
    } else if (type.includes("Clean Sheet")) {
    } else if (type.includes("Halftime Result/Both Teams Score")) {
    } else if (type.includes("Halftime Result/Total Goals")) {
    } else if (type.includes("Both Teams to Score 1st Half - 2nd Half")) {
    } else if (type.includes("10 Over/Under")) {
    } else if (type.includes("RTG_H1")) {
    } else if (type.includes("Own Goal")) {
    } else if (type.includes("Away Odd/Even")) {}
    // TODO asian handicap and handicap is not done yet
    // TODO card and corner market
    // TODO events
    return this.compareResultGetHighest(result);
  }
  computeHighestScoringHalf(result): string {
    // Draw, 1st Half, 2nd Half
    const sh = this.getSecondHalfResult(result);
    const fh = result.halftime;
    if ((fh.away + fh.away) > (sh.away + sh.home)) {
      return '1st Half';
    } else if ((fh.away + fh.away) < (sh.away + sh.home)) {
      return '2nd Half';
    }
    return 'Draw';
  }
  computeTotalGoalsBothTeamsToScore(result, n): string {
    return `${((result.home + result.away) > Number(n) ? 'o' : 'u')}/${((!!result.home && !!result.away) ? 'yes' : 'no')} ${n}`;
  }
  computeTeamScoreGoal(type, result): string {
    const team = type.split(" ")[0].toLowerCase();
    return !!(result[team]) ? 'Yes' : 'No';
  }
  computeExactGoals(type: string, result): string {
    if (type.includes('Home')) {
      return result.home >= 3 ? "more 3" : String(result.home);
    } else if (type.includes('away')) {
      return result.away >= 3 ? "more 3" : String(result.away);
    }
    if (type.includes("First Half")) {
      return (result.home + result.away) >= 5 ? "more 5" : String(result.home + result.away)
    }
    else if (type.includes("Second Half")) {
      return (result.home + result.away) >= 5 ? "more 5" : String(result.home + result.away)
    }
    return (result.home + result.away) >= 7 ? "more 7" : String(result.home + result.away)
  }
  computeToWinHalf(result, userBetValue, d): string {
    const fh = result.halftime;
    const sh = this.getSecondHalfResult(result);
    if (d === 'either') {
      if (userBetValue === "Home") {
        if (this.compareResultGetHighest(fh) === 'Home' || this.compareResultGetHighest(sh) === "Home"){
          return userBetValue;
        } else {
          return "Away";
        }
      } else if (userBetValue === "Away") {
        if (this.compareResultGetHighest(fh) === 'Away' || this.compareResultGetHighest(sh) === "Away"){
          return userBetValue;
        } else {
          return "Home";
        }
      }
    } else {
      if (userBetValue === "Home") {
        if (this.compareResultGetHighest(fh) === 'Home' && this.compareResultGetHighest(sh) === "Home"){
          return userBetValue;
        } else {
          return "Away";
        }
      } else if (userBetValue === "Away") {
        if (this.compareResultGetHighest(fh) === 'Away' && this.compareResultGetHighest(sh) === "Away"){
          return userBetValue;
        } else {
          return "Home";
        }
      }
    }
  }
  doesTeamConcede(result, team): boolean {
    if (team === 'home') {
      return !result.away
    }
    return !result.home;
  }
  getSecondHalfResult(result): {home: number, away: number} {
    // fulltime - halftime. how about extratime and penalty ????
    return {
      home: result.fulltime.home - result.halftime.home,
      away: result.fulltime.away - result.halftime.away
    };
  }
  computeWinToNil(result, userBetValue): string {
    const r = this.compareResultGetHighest(result);
    return r === userBetValue && this.doesTeamConcede(result, userBetValue) ? userBetValue : null;
  }
  computeOddEven(result): string {
    return (result.home + result.away) % 2 === 0 ? "Even" : "odd";
  }
  computeDoubleChance(result, userBetValue: string): string {
    const r = this.compareResultGetHighest(result);
    let re;
    if (r === "Draw") {
      re = ["Home/Draw", "Draw/Away"];
    } else if (r === "Away") {
      re = ["Home/Away", "Draw/Away"];
    } else {
      re = ["Home/Away", "Home/Draw"];
    }
    return re.includes(userBetValue) ? userBetValue : re[0];
  }
  computeOverUnderGoals(result, sign, value, team): string {
    let totalGoals;
    if (team === 'both') {
      totalGoals = result.home + result.away
    } else if (team === 'home') {
      totalGoals = result.home;
    } else {
      totalGoals = result.away;
    }
    if (totalGoals > Number(value)) {
      return `Over ${value}`;
    }
    return `Under ${value}`;
  }
  compareResultGetHighest(result): string {
    if (result.home > result.away) {
      return 'Home';
    } else if (result.home < result.away) {
      return 'Away';
    }
    return 'Draw';
  }
  correct(bet, fixture): void {
    const period = this.getPeriod(bet.type);
    const betType = this.getBetType(bet.type);
    const iR = this.getInterestedResult(period, betType, fixture);
    Logger.log(bet.value === this.getCorrectResult(iR, bet.type, bet.value) ? 'CORRECT' : 'NOT_CORRECT');
    // what is the correct answer for the type of bet and for given fixture
  }
}