import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  URL_API = 'http://localhost:3000/api/teams'
  //URL_API = 'https://cgcserver.herokuapp.com/api/teams';

  teams!: Team[];

  constructor(private http:HttpClient) { }

  getTeams(){
    return this.http.get<Team[]>(this.URL_API);
  }

  editTeam(team:Team){
    return this.http.get(`${this.URL_API}/${team._id}`);
  }
}
