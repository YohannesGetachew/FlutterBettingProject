export enum IncidentType {
    'Football_Corners' = 1,
    'Football_Penalties' = 8,
    'Football_Goal' = 9,
    'Football_Own_goal' = 24,
    'Football_Missed_penalty' = 40,
    'Football_Penalty_goal' = 25,
    'Football_Substitutions' = 10,
    'Football_Red_cards' = 7,
    'Football_Yellow_cards' = 6,

    'Tennis_Aces' = 20,
    'Tennis_Double_faults' = 21,
    'Tennis_First_serve_wins' = 34,

    'Basketball_Fouls' = 12,
    'Basketball_Two_points' = 28,
    'Basketball_Three_points' = 30,
    'Basketball_Time_outs' = 31,
    'Basketball_Free_throws' = 32,

    'IceHockey_Penalties' = 8,
    'Baseball_Hits' = 33,
    //
}
export interface Scoreboard {
    Status: string;
    Description: string;
    CurrentPeriod: number;
    Time: string;
    Results: Result[];
}
export interface Result {
    Value: string;
    Position: string;
}
export interface Incident {
    Period: string;
    Seconds: string;
    IncidentType: IncidentType; // enum
    ParticipantPosition: number;
    PlayerName: string;
    Results: Result[];
}
export interface Period {
    Type: number; // enum
    IsConfirmed: boolean;
    IsFinished: boolean;
    Results: Result[];
    Incidents?: Incident[];
}
export interface StatisticsValue {
    Value: string;
    Position: string;
}
export interface Statistic {
    Type: number;
    Value: StatisticsValue;
}
//The livescore element holds all scores and statistics:
export interface livescore {
    Scoreboard: Scoreboard;
    Periods: Period[];
    Statistics: Statistic[];
}
export interface ILiveScore {
    fixtureId: string;
    score: livescore;
}
