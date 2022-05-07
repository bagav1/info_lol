import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { servicesTools } from './servicesTools';

@Injectable({
  providedIn: 'root'
})
export class ContentService extends servicesTools {

  constructor(private http: HttpClient) { super(); }

  version_lol(): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/version_lol', this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  entire_league(queue: string, tier: string, division: string): Observable<any> {
    return this.http
      .get<any>(env.API_URL + `/entire_league?q=${queue}&t=${tier}&d=${division}`, this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  summoner_league(name: string): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/summoner_league?id=' + name, this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  summoner_data(name: string, count: number = 1): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/summoner_data/' + name + '/' + count, this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  summoner_data_id(id: string): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/summoner_data_id/' + id, this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  match_list(puuid: string, count: number = 1, type: string = '', queue: number = 0): Observable<any> {
    if (queue === 0 && type === '') {
      var link = env.API_URL + '/match_list/' + puuid + '/' + count;
      console.log('match_list:-> Consulta sin parametros adicionales');
    }else if(queue === 0 && type !== ''){
      var link = env.API_URL + '/match_list/' + puuid + '/' + count + '?t=' + type;
      console.log('match_list:-> Consulta ccon queue, sin type');
    }else if(queue !== 0 && type === ''){
      var link = env.API_URL + '/match_list/' + puuid + '/' + count + '?q=' + queue;
      console.log('match_list:-> Consulta sin queue, con type');
    }else{
      var link = env.API_URL + '/match_list/' + puuid + '/' + count + '?q=' + queue + '&t=' + type;
      console.log('match_list:-> Consulta con parametros completos');
    };
    return this.http
      .get<any>(link, this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  match(id: string): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/match/' + id, this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  match_timeline(id: string): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/match_timeline/' + id, this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  rotation_champ(): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/rotation_champ', this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  all_champs(): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/all_champs', this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  champ(name: string): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/champ/' + name, this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  items(): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/items', this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  summoner_spell(): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/summoner_spell', this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  profile_icon(): Observable<any> {
    return this.http
      .get<any>(env.API_URL + '/profile_icon', this.getHttpOptions())
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }
}
