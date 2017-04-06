import { Component, OnInit } from '@angular/core';
import {DataResponse} from "../../../models/dataResponse";
import {UserEntity} from "../../../models/user";
import {AdminService} from "../../../services/api/admin.service";
import {Observable} from "rxjs/Rx";
import {Params, ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  users:DataResponse<UserEntity> = new DataResponse<UserEntity>(0, []);

  userType:string = "goers";

  apiMethod:Function;

  constructor(private route:ActivatedRoute,
              private router:Router,private adminService:AdminService) {
  }



  ngOnInit() {
    this.setUsersWithType();
  }



  setUsersWithType(){
    this.route.params.subscribe((params:Params) => {

      this.userType = params["type"];
      switch (this.userType){
        case "goers":
          this.apiMethod = (offset:number, limit:number):Observable<DataResponse<UserEntity>> => {
            return this.adminService.getGoers(offset,limit);
          }
              break;
        case "promoters":
          this.apiMethod = (offset:number, limit:number):Observable<DataResponse<UserEntity>> => {
            return this.adminService.getPromoters(offset,limit);
          }
              break;
      }


    })
    }

  setEnable(user: UserEntity, enabled: boolean){
    user.enable = enabled;
  }
  deleteUser(user:UserEntity){
    this.users.items.splice(this.users.items.indexOf(user), 1);
  }

  dataReceived(data) {
    this.users.items.length = 0;
    this.users.items.push.apply(this.users.items, data.items);

  }


}
