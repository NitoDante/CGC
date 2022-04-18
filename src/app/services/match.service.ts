import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  //URL_API = 'http://localhost:3000/api/matches'
  URL_API = 'https://cgcserver.herokuapp.com/api/matches';

  matches!: Match[];
  groupedDate : Map<string, Match[]> = new Map<string,Match[]>();

  constructor(private http:HttpClient) { }

  getMatches(){
    console.log('matches: '+JSON.stringify(this.http.get<Match[]>(this.URL_API)));
    this.http.get<Match[]>(this.URL_API).subscribe(
      res => {
        res.forEach(element => {
          if(!this.groupedDate.has(element.matchDate.toLocaleString().substring(0,10))){
            this.groupedDate.set(element.matchDate.toLocaleString().substring(0,10),res);
          }
        })
        debugger;
      },
      err => console.log(err)
    )
    return this.http.get<Match[]>(this.URL_API);
  }
  getMatch(match:Match){
    return this.http.get(`${this.URL_API}/${match._id}`);
  }

}
