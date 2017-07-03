import { Component, OnInit } from '@angular/core';
import {DataResponse} from '../../../models/dataResponse';
import {EventTransactionEntity} from '../../../models/event-transaction-entity';
import {AdminService} from '../../../services/api/admin.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-transactions-table',
  templateUrl: './event-transactions-table.component.html',
  styleUrls: ['./event-transactions-table.component.css']
})
export class EventTransactionsTableComponent implements OnInit {

  transactions: DataResponse<EventTransactionEntity> = new DataResponse<EventTransactionEntity>(0, []);



  private sub: any;

  constructor(private  adminService: AdminService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.apiMethod = (offset: number, limit: number): Observable<DataResponse<EventTransactionEntity>> => {
    //   return this.adminService.getTransactionsForEvent(offset, limit);
    // };

    this.sub = this.route.params.subscribe(params => {
      const eventId = +params['eventId'];

      this.adminService.getTransactionsForEvent(eventId, 0, 0).subscribe(res => {
          this.transactions.items.length = 0;

          this.transactions.items.push.apply(this.transactions.items, res.items);
        });

     // this.id = +params['eventId']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
  }


}
