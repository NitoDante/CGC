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

  getMatches(game:string){
    this.http.get<Match[]>(this.URL_API+'/?game='+game).subscribe(
      res => {
        this.groupedDate.clear();
        res.forEach(element => {
          console.log('element* : '+JSON.stringify(element))
          if(!this.groupedDate.has(element.matchDate.toLocaleString().substring(0,10))){
            console.log('ENTRA*');
            this.groupedDate.set(element.matchDate.toLocaleString().substring(0,10),res);
          }
        })
        console.log(this.groupedDate);
      },
      err => console.log(err)
    )
    return this.http.get<Match[]>(this.URL_API);
  }
  getMatch(match:Match){
    return this.http.get(`${this.URL_API}/${match._id}`);
  }

}
