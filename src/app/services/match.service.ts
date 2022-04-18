import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  URL_API = 'http://localhost:3000/api/matches'

  matches!: Match[];

  constructor(private http:HttpClient) { }

  getMatches(){
    console.log('matches: '+JSON.stringify(this.http.get<Match[]>(this.URL_API)));
    return this.http.get<Match[]>(this.URL_API);
  }
  getMatch(match:Match){
    return this.http.get(`${this.URL_API}/${match._id}`);
  }

}
