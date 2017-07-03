import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/api/authentication.service';
import {UserEntity} from '../../models/user';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: UserEntity = this.authService.getCurrentUser();
  private logo: string = environment.fullImagePath;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    console.log(this.currentUser);
  }

  logout() {
    this.authService.logout();
  }
}
