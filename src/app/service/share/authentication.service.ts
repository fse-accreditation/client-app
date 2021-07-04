import { Injectable } from '@angular/core';
import {AuthToken} from '../../entity/authToken';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  ConfigService} from './config.service'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  tokenUrl:string;
  authContext: any;

  constructor(private httpClient : HttpClient ,private configService : ConfigService) {
    this.tokenUrl='';
   }

  isUserAuthenticate(email : string , password : string): Observable<AuthToken>{
    const url =this.configService.getServerUrl(this.tokenUrl);
    return this.httpClient.post<AuthToken>(url, this.authContext)
    .pipe(
      catchError(this.handleError('addSmartphone', new AuthToken()))
    );
  }      



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
  
      return throwError(JSON.stringify(error));
    };
  }
  
  private log(message: string) {
    console.log(message);
  }
}


