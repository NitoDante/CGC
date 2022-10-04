import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.css']
})

export class CalendarWrapperComponent implements OnInit {

  constructor() { 
    this.game = 'LOL';
    this.fDate = new Date();  
    this.season = 'Liga Regular';
  }
  game: string;
  fDate: Date;
  season : string;

  ngOnInit(): void {
  }

  recieveGame(game : string){
    this.game = game;
  }

  recieveDate(fDate : Date){
    this.fDate = fDate;
  }
  recieveSeason(season : string){
    this.season = season;
  }
}
