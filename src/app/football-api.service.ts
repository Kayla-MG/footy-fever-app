import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { Match } from './footballresponse';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {
  private apiUrl = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';

  constructor(private _http:HttpClient) { }

  getMatches(): Observable<Match[]> {
    
    return this._http.get<Match[]>(this.apiUrl);
  }
 
}

