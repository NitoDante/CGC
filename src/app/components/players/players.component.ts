import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../services/player.service';
import {NgForm} from '@angular/forms';
import { Player } from '../../models/player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayerService],
})
export class PlayersComponent implements OnInit {  

  selectedPlayer: Player ={
    firstName:'',
    lastName:'',
    age:18,
    email: '',
    gameTag:'',
    games:[]
  };
  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayers();
  }

  resetForm(form:NgForm){
    form.reset();
  }

  getPlayers() {
    this.playerService.getPlayers().subscribe(
      res => {
        this.playerService.players = res;
      },
      err => console.log(err)
    )
  }

  addPlayer(form?: NgForm){
    if(form && form.value._id){
      this.playerService.editPlayer(form.value).subscribe(
        res => {
          this.getPlayers()
        },
        err => console.log(err)
      )
    }else if(form){
      this.playerService.createPlayer(form.value).subscribe(
        res => {
          this.getPlayers();
          form.reset();
        },
        err => console.log(err)
      )
    }
  }

  deletePlayer(_id?: string, form?: NgForm){    
    if(confirm('Are you sure?') && form){
      this.playerService.deletePlayer(_id).subscribe(
        (res)=>{
          this.getPlayers();
          this.resetForm(form);
        },
        (err)=>console.log(err)
      )
    }
  }

  editPlayer(player: Player){
    this.selectedPlayer = player;
  }
}
