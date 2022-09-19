import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  URL_API = 'http://localhost:3000/api/players'
  //URL_API = 'https://cgcserver.herokuapp.com/api/players';

  players!: Player[];

  constructor(private http:HttpClient) { }

  getPlayers(){
    return this.http.get<Player[]>(this.URL_API);
  }

  createPlayer(player : Player){
    return this.http.post(this.URL_API, player);
  }

  deletePlayer(_id : string | undefined){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }

  editPlayer(player:Player){
    return this.http.put(`${this.URL_API}/${player._id}`,player)
  }

}
