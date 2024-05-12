import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootballService } from '../services/football.service';
import { Match } from '../footballresponse';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent implements OnInit{
  
  matchData: Match[] = [];
  
  constructor(private _footballService :FootballService ){}

ngOnInit(): void {
  this.getMatchData();
}

  getMatchData(): void {
    this._footballService.getMatches()  // Assuming `getMatches()` returns an Observable<Match[]>
      .subscribe({
        next: (data) => this.matchData = data,
        error: (error) => console.error('Error fetching matches:', error)
      });
  }
  }
