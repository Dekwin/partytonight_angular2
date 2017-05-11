import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/api/authentication.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  email:string

  constructor(private authService:AuthenticationService) {

  }

  reset(){

    this.authService.resetPassword(this.email).subscribe(r => {
      this.authService.logout()
    })

  }

  ngOnInit() {

  }

}
