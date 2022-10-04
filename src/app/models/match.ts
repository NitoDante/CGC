import { Team } from "./team";

export interface Match extends Array<Team>{
    _id?: string;
    homeTeam: Team;
    visitorTeam: Team;
    game: string;
    matchDate: Date;
    homeScore:Number;
    visitorScore:Number;
    season: string;
}