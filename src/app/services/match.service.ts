import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  URL_API = 'http://localhost:3000/api/matches'
  //URL_API = 'https://cgcserver.herokuapp.com/api/matches';

  matches!: Match[];
  //groupedDate : Map<string, Match[]> = new Map<string,Match[]>();

  constructor(private http:HttpClient) { }

  getMatches(game:string, dateChanged:boolean, fDate:Date, season:string){
    console.log('ENTRA API MATCHES');
    console.log('fDate: '+fDate);
    let strDate = '';
    //if(dateChanged){
      strDate = fDate.getFullYear()+'-'+('0'+(fDate.getMonth()+1)).slice(-2)+'-'+('0'+fDate.getDate()).slice(-2);
      console.log('0+fDate.getMonth()).slice(-2)'+('0'+(fDate.getMonth()+1)).slice(-2));
    /*}else{
      strDate = new Date();
    }*/
    
    /*this.http.get<Match[]>(this.URL_API+'/?game='+game+'&dChanged='+dateChanged+'&fDate='+strDate)
    .subscribe(
      res => {
        this.groupedDate.clear();
        res.forEach(element => {
          console.log('element* : '+JSON.stringify(element))
          if(!this.groupedDate.has(element.matchDate.toLocaleString().substring(0,10))){
            console.log('ENTRA* '+element.matchDate.toLocaleString().substring(0,10));
            this.groupedDate.set(element.matchDate.toLocaleString().substring(0,10),res);
            console.log('ENTRA2* '+JSON.stringify(this.groupedDate.keys()));
          }
          this.matches.push(element);
        })
        console.log('ENTRA3* '+JSON.stringify(this.groupedDate.keys()));
        console.log('groupedDate api '+JSON.stringify(this.groupedDate));
        
      },
      err => console.log(err)    
    )*/
    console.log('SEASON 2: '+season)
    return this.http.get<Match[]>(this.URL_API+'/?game='+game+'&dChanged='+dateChanged+'&fDate='+strDate+'&season='+season);
  }  
  getMatch(match:Match){
    return this.http.get(`${this.URL_API}/${match._id}`);
  }

  getSeasons(game:string){
    return this.http.get<string[]>(this.URL_API+'/seasons/?game='+game);
  }

}
