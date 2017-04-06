import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from "../services/api/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private authService: AuthenticationService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let currentUser = this.authService.getCurrentUser();
    if(currentUser){

      return true;
    }else {
      this.router.navigate(['/signin']);
      return false;
    }
    //return currentUser ? true : false;
  }
}
