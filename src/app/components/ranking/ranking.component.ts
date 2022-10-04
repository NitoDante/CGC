import { Component, OnInit } from '@angular/core';
import {TeamService} from '../../services/team.service';
import { Team } from '../../models/team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

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

  redirect(team:Team){
    //this.Router.navigateByUrl('/team'+team);
    //this.router.navigate(['/teamDetail'], {state:team});
    console.log(team);
  }
}
