import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NewsComponent } from './components/news/news.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { VideosComponent } from './components/videos/videos.component';
import { ContactComponent } from './components/contact/contact.component';
import { RulesComponent } from './components/rules/rules.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { CalendarWrapperComponent } from './components/calendar-wrapper/calendar-wrapper.component';
import { GameFilterComponent } from './components/game-filter/game-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateFilterComponent } from './components/date-filter/date-filter.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { SeasonFilterComponent } from './components/season-filter/season-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    CalendarComponent,
    NewsComponent,
    RankingComponent,
    VideosComponent,
    ContactComponent,
    RulesComponent,
    PlayersComponent,
    TeamsComponent,
    TeamDetailComponent,
    CalendarWrapperComponent,
    GameFilterComponent,
    DateFilterComponent,
    MatchDetailComponent,
    SeasonFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
