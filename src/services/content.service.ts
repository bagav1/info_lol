import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    .get<any>(env.API_URL + '/version_lol', this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  queue(): Observable<any>{
    return this.http
    .get<any>(env.API_URL + '/queue', this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  summoner_data(name:string): Observable<any>{
    return this.http
    .get<any>(env.API_URL + '/summoner_data/' + name, this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  match_list(puuid:string): Observable<any>{
    return this.http
    .get<any>(env.API_URL + '/match_list/' + puuid, this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  match_id(id:string): Observable<any>{
    return this.http
    .get<any>(env.API_URL + '/match_id/' + id, this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  rotation_champ(): Observable<any>{
    return this.http
    .get<any>(env.API_URL + '/rotation_champ', this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  all_champs(): Observable<any>{
    return this.http
    .get<any>(env.API_URL + '/all_champs', this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  champ(name:string): Observable<any>{
    return this.http
    .get<any>(env.API_URL + '/champ/' + name, this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  items(): Observable<any>{
    return this.http
    .get<any>(env.API_URL + '/items', this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  summoner_spell(): Observable<any>{
    return this.http
    .get<any>(env.API_URL + '/summoner_spell', this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  profile_icon(): Observable<any>{
    return this.http
    .get<any>(env.API_URL + '/profile_icon', this.getHttpOptions())
    .pipe(
      map((res:any) => {
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }
}
