export interface Player{
    _id?: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    gameTag: string;
    createdAt?: string;
    updatedAt?: string;
    games: string[];
}