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

  constructor(public matchService:MatchService, private router: Router, private cdRef : ChangeDetectorRef) {this.groupedDateTemp = '2022-01-01';this.isInitGame=true;this.isInitDate=true;this.isInitSeason=true}
  private _game?: string;
  private _fDate?: Date;
  private _season?: string;
  private changedDate = false;
  groupedDate : Map<string, Match[]> = new Map<string,Match[]>();
  private groupedDateTemp: string;
  private isInitGame : Boolean;
  private isInitDate : Boolean;
  private isInitSeason : Boolean;

  @Input() 
  set game(value: string){
    this._game = value;
    if(!this.isInitGame){
      this.getMatches();
    }else{
      this.isInitGame = false;
    }
  }
  @Input()
  set fDate(value: Date){
    this._fDate = value;  
    this.changedDate = true;
    if(!this.isInitDate){
      this.getMatches();
    }else{
      this.isInitDate = false;
    }
  }
  @Input()
  set season(value: string){
    this._season = value;  
    if(!this.isInitSeason){
      this.getMatches();
    }else{
      this.isInitSeason = false;
    }
  }

  
  ngOnInit(): void {
    this._fDate = new Date();
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
    this.groupedDate.clear();
    this.groupedDateTemp = '2022-01-01';
    //this.groupedDate = this._fDate.getFullYear()+'-'+('0'+this._fDate.getMonth()).slice(-2)+'-'+('0'+this._fDate.getDate()).slice(-2);
    //console.log('GROUPEDDATE: '+this.groupedDate);
    console.log('SEASON: ** '+this._season);
    this.matchService.getMatches(this._game !== undefined? this._game : 'LOL', this.changedDate, this._fDate !== undefined? this._fDate:new Date(), this._season !== undefined? this._season : 'Liga Regular').subscribe(
      res => {
        this.groupedDate.clear();
        res.forEach(element => {
          let matchTempArr: Array<Match> = [];
          if(!this.groupedDate.has(element.matchDate.toLocaleString().substring(0,10))){
            matchTempArr.push(element);
            this.groupedDate.set(element.matchDate.toLocaleString().substring(0,10),matchTempArr);
            
          }else{
            matchTempArr = this.groupedDate.get(element.matchDate.toLocaleString().substring(0,10))!;
            this.groupedDate.set(element.matchDate.toLocaleString().substring(0,10),matchTempArr);
          }
        })

        this.matchService.matches = res;
        console.log(this.matchService.matches);
      },
      err => console.log(err)
    )
  }
  checkDateStr(value:string){
    if(this.groupedDateTemp.substr(0,10) != value.substr(0,10) || this.groupedDate.size == 1){
      this.groupedDateTemp = value;
      return true;
    }else{
      return false;
    }
  }

}
