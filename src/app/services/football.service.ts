import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Match } from '../footballresponse'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private matchesUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';  // Replace with your actual URL

  constructor(private http: HttpClient) {}

  getMatches(): Observable<Match[]> {
    return this.http.get<Match[]>(this.matchesUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching matches:', error);
          throw 'Error fetching matches, see console'; // Handle the error in a way that's appropriate for your app
        })
      );
  }
}
