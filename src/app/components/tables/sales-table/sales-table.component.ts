import { Component, OnInit } from '@angular/core';
import {DataResponse} from '../../../models/dataResponse';
import {EventEntity} from '../../../models/event-entity';
import {AdminService} from '../../../services/api/admin.service';
import {Observable} from 'rxjs/Observable';
import {SaleEntity} from '../../../models/sale-entity';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sales-table',
  templateUrl: './sales-table.component.html',
  styleUrls: ['./sales-table.component.css']
})
export class SalesTableComponent implements OnInit {

  sales: DataResponse<EventEntity> = new DataResponse<EventEntity>(0, []);

  apiMethod: Function;

  constructor(private  adminService: AdminService, private router: Router) {
  }

  ngOnInit() {
    this.apiMethod = (offset: number, limit: number): Observable<DataResponse<SaleEntity>> => {
      return this.adminService.getSales(offset, limit);
    };

  }

  goToTransactions(eventId) {
    this.router.navigate(['/sales', eventId]);
  }
  dataReceived(data: DataResponse<EventEntity>) {
    this.sales.items.length = 0;

    this.sales.items.push.apply(this.sales.items, data.items);

  }
}
