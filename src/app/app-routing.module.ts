import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarWrapperComponent } from './components/calendar-wrapper/calendar-wrapper.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { RulesComponent } from './components/rules/rules.component';
import { VideosComponent } from './components/videos/videos.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarWrapperComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'teamDetail', component: TeamDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
