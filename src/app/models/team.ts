import { Player } from "./player";

export interface Team extends Array<Player>{
    _id?: string;
    name: string;
    games: string[];
    winsLOL: number;
    losesLOL: number;
    winsValo: number;    
    losesValo: number;
    logo: string;
    updatedAt?: string;
    description: string;
    players: Array<Player>;
}