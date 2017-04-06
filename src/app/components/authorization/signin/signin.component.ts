import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/api/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private emailInput:string;
  private passwordInput:string;

  private signedIn = this.authService.getCurrentUser();

  constructor(private router: Router,private authService:AuthenticationService) {

  }

  ngOnInit() {
    this.signedIn = this.authService.getCurrentUser();
  }

  signInClicked(){
    this.authService.login(this.emailInput,this.passwordInput).subscribe(val => {
      this.signedIn = this.authService.getCurrentUser();
      if(this.signedIn) {
        this.router.navigate(['/adminpanel']);
      }else{
        //TODO change alert
        alert("Wrong email or password!");
      }
    })
  }

  signOutClicked(){
    this.authService.logout();
    this.signedIn = this.authService.getCurrentUser();
  }

}
