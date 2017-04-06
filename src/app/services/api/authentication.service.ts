import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import { LoggerService } from '../logger/logger.service';
import { environment } from '../../../environments/environment';
import {Observable} from "rxjs/Rx";
import {UserEntity} from "../../models/user";

@Injectable()
export class AuthenticationService {

  private options = new RequestOptions({headers: new Headers()});

  constructor(private http: Http,private logger: LoggerService) { }

  // login(username: string, password: string) {
  //
  //   let credentials = username + ":" + password;
  //   let authorizationHeader = "Basic " + btoa(credentials);//toBase64();
  //   let headers = new Headers({"Authorization": authorizationHeader});
  //   let options = new RequestOptions({headers: headers});
  //
  //   return this.http.post(environment.baseApiPath + '/token', {}, options)
  //     .map((response: Response) => {
  //
  //       // login successful if there's a token token in the response
  //       let user = response.json();
  //
  //       console.log(user);
  //
  //       if (user && user.token) {
  //         // store user details and token token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //
  //       }
  //     }).catch(this.handleError);
  // }

  // getCurrentUser():UserEntity {
  //   let userJson = JSON.parse(localStorage.getItem('currentUser'));
  //   if(!userJson) return null;
  //
  //   return new UserEntity(userJson.user.id,userJson.user.nickname,userJson.user.email,userJson.user.Permissions,userJson.token);
  // }

  //mock
  login(username: string, password: string): Observable<UserEntity>{

    var user = new UserEntity();

    localStorage.setItem('currentUser', JSON.stringify(user));

 
    return Observable.of(user)
  }

  //mock
  getCurrentUser():UserEntity {
    let userJson = JSON.parse(localStorage.getItem('currentUser'));
    if(!userJson) return null;

    return new UserEntity();
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }



  private handleError = (res: Response): Observable<any> => {
    this.logger.warn(res.toString());

    console.log("user en error");

    return Observable.of({
      data: null,
      error: true,
      errorMessage: 'Something went wrong'
    });
  }

}
