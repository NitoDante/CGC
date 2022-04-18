import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(public matchService:MatchService, private router: Router) { }

  ngOnInit(): void {
    this.getMatches();
  }
  getMatches(){
    this.matchService.getMatches().subscribe(
      res => {
        this.matchService.matches = res;
        console.log(this.matchService.matches);
      },
      err => console.log(err)
    )
  }

}
