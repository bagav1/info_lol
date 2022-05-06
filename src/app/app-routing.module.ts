import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionComponent } from './champion/champion.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LeagueComponent } from './league/league.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'champion', redirectTo: ''},
  {path: 'champion/:id', component: ChampionComponent},
  {path: 'league', component: LeagueComponent},
  {path: 'help', component: HelpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
