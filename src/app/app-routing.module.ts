import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { RankingComponent } from './ranking/ranking.component';
import { RulesComponent } from './rules/rules.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'videos', component: VideosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
