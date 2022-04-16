import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  lolImageSrc = '../../../assets/images/LoL_icon.svg.png';
  valoImageSrc = '../../../assets/images/Valorant_icon.png';
  team?:Team

  constructor(private location:Location) { 
  }

  ngOnInit(): void {
    this.team = <Team>this.location.getState();
    console.log(this.team);
  }
  renderImages(game:String){
    if(game == 'Valorant'){
      return this.valoImageSrc;
    }else if(game == 'LOL'){
      return this.lolImageSrc;
    }else{
      return '';
    }
  }

}
