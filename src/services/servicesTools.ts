import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment as env } from 'src/environments/environment';

export class servicesTools{

  public getHttpOptions():httpOptions{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Riot-Token': env.riot_token
      })
    };
    return httpOptions;
  }

  public handlerError(error:HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    errorMessage = `{ "status": false, "data": { "status": ${error.status}, "message": "${error.message}", "status_text":"${error.statusText}" } }`;
    return throwError(errorMessage);
  }

}

export class httpOptions{
  headers:HttpHeaders | undefined;
}
