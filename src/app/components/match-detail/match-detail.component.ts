import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { Location } from '@angular/common';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  match?:Match
  constructor(private location:Location) { }

  ngOnInit(): void {
    this.match = <Match>this.location.getState();
  }

}
