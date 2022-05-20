import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { Match } from '../../models/match';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(public matchService:MatchService, private router: Router, private cdRef : ChangeDetectorRef) {this._game = 'LOL'}
  private _game: string;

  @Input() 
  set game(value: string){
    this._game = value;
    this.getMatches();
  }

  groupedDate = '2022-01-01';

  ngOnInit(): void {
    this.getMatches();
  }
  /*ngOnChanges(changes : SimpleChanges){
    if(changes.game){
      this.getMatches();
    }
  }*/
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  getMatches(){
    this.matchService.matches;
    this.matchService.groupedDate.clear();
    this.groupedDate = '2022-01-01';
    this.matchService.getMatches(this._game).subscribe(
      res => {
        this.matchService.matches = res;
        console.log(this.matchService.matches);
      },
      err => console.log(err)
    )
  }
  checkDateStr(value:string){
    if(this.groupedDate.substr(0,10) != value.substr(0,10)){
      this.groupedDate = value;
      return true;
    }else{
      return false;
    }
  }
  checkDate(value:Date){
    return this.groupedDate.substr(0,10) == value.toLocaleString().substr(0,10);
  }

}
