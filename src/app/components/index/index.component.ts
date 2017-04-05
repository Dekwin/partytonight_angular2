import { Component, OnInit } from '@angular/core';
import {UsersTableComponent} from "../tables/users-table/users-table.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  entryComponents : [UsersTableComponent]
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
