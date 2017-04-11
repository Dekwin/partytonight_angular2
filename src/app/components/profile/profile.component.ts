import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/api/admin.service";
import {AuthenticationService} from "../../services/api/authentication.service";
import {UserEntity} from "../../models/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser:any = this.authService.getCurrentUser();
  newEmail:string;

  currentEmail:string;

  constructor(private adminService:AdminService, private authService:AuthenticationService) {

  }

  ngOnInit() {
    this.currentEmail = this.currentUser._email;

  }

  setNewEmail(){
    this.adminService.changeAdminCredentials(this.newEmail,null).subscribe((r:any) => {
      if(!r.error) {
        this.currentEmail = this.newEmail;
        this.authService.logout()
      }else{
        alert("Error")
      }
    })
  }

  setNewPassword(){
    this.adminService.changeAdminCredentials(null,"true").subscribe((r:any) => {
      if(!r.error) {

      }else{
        alert("Error")
      }
    })
  }

}
