import {Component, OnInit} from '@angular/core';
import {EventEntity} from '../../../models/event-entity';
import {DataResponse} from '../../../models/dataResponse';
import {AdminService} from '../../../services/api/admin.service';
import {UserEntity} from '../../../models/user';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements OnInit {

  events: DataResponse<EventEntity> = new DataResponse<EventEntity>(0, []);

  apiMethod: Function;

  constructor(private  adminService: AdminService) {
  }

  ngOnInit() {
    this.apiMethod = (offset: number, limit: number): Observable<DataResponse<EventEntity>> => {
      return this.adminService.getEvents(offset, limit);
    };

  }

  // deleteEvent(event:EventEntity){
  //   this.events.items.splice(this.events.items.indexOf(event), 1);
  // }

  dataReceived(data: DataResponse<EventEntity>) {
    this.events.items.length = 0;

    this.events.items.push.apply(this.events.items, data.items);

  }


}
