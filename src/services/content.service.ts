import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { servicesTools } from './servicesTools';

@Injectable({
  providedIn: 'root'
})
export class ContentService extends servicesTools {

  constructor( private http: HttpClient ) { super(); }

  version_lol(): Observable<any>{
    return this.http
    .get<any>(env.version_lol, this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  champ(): Observable<any>{
    return this.http
    .get<any>('http://ddragon.leagueoflegends.com/cdn/12.8.1/data/es_MX/champion.json', this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  matchList(): Observable<any>{
    return this.http
    .get<any>(env.match_list + '6--oCVRjS2S1-zqbj6rRwyrwHqTpFAJ9yYYxJK1SrrOHedcP8IRyCVkmMNG647YriztdzNsPZ7kTug/ids', this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }
}
