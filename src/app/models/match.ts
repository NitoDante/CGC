import { Team } from "./team";

export interface Match extends Array<Team>{
    _id?: string;
    homeTeam: Team;
    visitorTeam: Team;
    matchDate: Date;
}