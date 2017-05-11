import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions, URLSearchParams} from '@angular/http';
import { LoggerService } from '../logger/logger.service';
import { environment } from '../../../environments/environment';
import {Observable} from "rxjs/Rx";
import {UserEntity} from "../../models/user";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {

  private options = new RequestOptions({headers: new Headers(),  withCredentials: true });

  constructor(private router: Router,private http: Http,private logger: LoggerService) { }

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

      let credentials = username + ":" + password;
      let authorizationHeader = "Basic " + btoa(credentials);//toBase64();
      let headers = new Headers({"Authorization": authorizationHeader});
    headers.append("Content-Type", "application/x-www-form-urlencoded");

      let options = new RequestOptions({headers: headers });

    return this.http.get(environment.baseApiPath + '/signin', options)
        .map((response: Response) => {

          let entity = response.json();

          if (entity && entity.token) {
            var user = new UserEntity();
            user.email = username;
            user.token = entity.token;

           if(entity.role != "ROLE_ADMIN"){
             throw new Error("You are not admin")
           }


            localStorage.setItem('currentUser', JSON.stringify(user));



          }
        }).catch(this.handleError);
  }

  getCurrentUser():UserEntity {
    let userJson = JSON.parse(localStorage.getItem('currentUser'));
    if(!userJson) return null;
    return userJson;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/signin']);
  }


  resetPassword(email: string):Observable<void> {
    return this.http.post(environment.baseApiPath + '/accounts/reset',{email:email}).map(r => {
      return r;
    }).catch(this.handleError);
  }




  private handleError = (res: Response): Observable<any> => {
    this.logger.warn(res.toString());


    return Observable.of({
      data: null,
      error: true,
      errorMessage: 'Something went wrong'
    });
  }

}
