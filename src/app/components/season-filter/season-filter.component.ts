import { ChangeDetectorRef, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-season-filter',
  templateUrl: './season-filter.component.html',
  styleUrls: ['./season-filter.component.css']
})
export class SeasonFilterComponent implements OnInit {
  URL_API = 'http://localhost:3000/api/matches';

  seasons: string[] = [];
  selectedSeason : string = 'Liga Regular';
  private isInitGame : Boolean;

  constructor(public matchService:MatchService, private cdRef : ChangeDetectorRef) { this.isInitGame=true, this.game="LOL" }

  ngOnInit(): void {
    //this.getSeasons(this.game);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  @Input() 
  set game(value: string){
    if(!this.isInitGame){
      this.getSeasons(value);
    }else{
      this.isInitGame = false;
    }
  }

  getSeasons(game:string){
    this.matchService.getSeasons(game).subscribe({
      next:res => this.seasons = res, 
      error: (e) => console.error(e)
    })
  }

  @Output() emitter:EventEmitter<string> = new EventEmitter<string>();
  changeSeason(){
    this.emitter.emit(this.selectedSeason);
  }
}
