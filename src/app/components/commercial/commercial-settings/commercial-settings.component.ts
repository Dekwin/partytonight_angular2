import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../services/api/admin.service";

@Component({
  selector: 'app-commercial-settings',
  templateUrl: './commercial-settings.component.html',
  styleUrls: ['./commercial-settings.component.css']
})
export class CommercialSettingsComponent implements OnInit {

  feePercent:number = 0;
  constructor(private adminService:AdminService) { }

  ngOnInit() {
    this.adminService.commercialGetFee().subscribe((r:any) =>{
      this.feePercent = r;
    })
  }

  save(){
    this.adminService.commercialSetFee(this.feePercent).subscribe(r =>{

    })
  }

}
