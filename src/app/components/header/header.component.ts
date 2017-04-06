import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/api/authentication.service";
import {UserEntity} from "../../models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: UserEntity = this.authService.getCurrentUser();

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout();
  }
}
