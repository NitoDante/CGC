import { Component, OnInit } from '@angular/core';
import {TeamService} from '../../services/team.service';
import { Team } from '../../models/team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  lolImageSrc = '../../../assets/images/LoL_icon.svg.png';
  valoImageSrc = '../../../assets/images/Valorant_icon.png';

  constructor(public teamService:TeamService, private router: Router) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(){
    this.teamService.getTeams().subscribe(
      res => {
        this.teamService.teams = res;
      },
      err => console.log(err)
    )
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
  redirect(team:Team){
    //this.Router.navigateByUrl('/team'+team);
    //this.router.navigate(['/teamDetail'], {state:team});
    console.log(team);
  }

}
