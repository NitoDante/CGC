import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.css']
})
export class CalendarWrapperComponent implements OnInit {

  constructor() { 
    this.game = 'LOL';
  }
  game: string;
  ngOnInit(): void {
  }

  recieveGame(game : string){
    this.game = game;
  }
}
