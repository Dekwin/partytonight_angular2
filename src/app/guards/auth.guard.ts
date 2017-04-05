import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from "../services/api/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let currentUser = this.authService.getCurrentUser();
    return currentUser ? true : false;
  }
}
