import { Routes } from '@angular/router';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

export const routes: Routes = [
    {path:'',component:MatchesComponent},
    {path: 'players', component:PlayersComponent},
    {path: 'teams', component:TeamsComponent}
];
