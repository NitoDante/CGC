import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Games } from '../../models/games';

@Component({
  selector: 'app-game-filter',
  templateUrl: './game-filter.component.html',
  styleUrls: ['./game-filter.component.css']
})
export class GameFilterComponent implements OnInit {

  constructor() { }

  gamesLst: Games[] = [];


  ngOnInit(): void {
    const lol = <Games>{name:"LOL",gameLogo:'../../../assets/images/LoL_icon.svg.png'};
    const valorant = {name:"Valorant",gameLogo:'../../../assets/images/Valorant_icon.png'};
    this.gamesLst.push(lol);
    this.gamesLst.push(valorant);
  }
  
  @Output() emitter:EventEmitter<string> = new EventEmitter<string>();
  filterTable(game:string){
    this.emitter.emit(game);
  }

}
