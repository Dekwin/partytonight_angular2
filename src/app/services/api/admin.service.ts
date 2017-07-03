import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {LoggerService} from '../logger/logger.service';
import {Observable} from 'rxjs/Rx';
import {Http, URLSearchParams, Headers, Response, RequestOptions} from '@angular/http';
import {TicketEntity} from '../../models/ticket-entity';
import {EventEntity} from '../../models/event-entity';
import {DataResponse} from '../../models/dataResponse';
import {UserEntity} from '../../models/user';
import {SaleEntity} from '../../models/sale-entity';
import {EventTransactionEntity} from '../../models/event-transaction-entity';

 // mocks
@Injectable()
export class AdminService {
  path: string = environment.baseApiPath;
  ROLE_ADMIN = 'ROLE_ADMIN';
  ROLE_PARTY_MAKER = 'ROLE_PARTY_MAKER';
  ROLE_STREET_DANCER = 'ROLE_STREET_DANCER';


  constructor(private http: Http, private logger: LoggerService) {
  }



  //
  // getEvents(offset: number, limit: number):Observable<DataResponse<EventEntity>> {
  //
  //   // return this.http.post(this.path + '/event/all', {}, this.token()).map(r => {
  //   //   var json = r.json();
  //   //   return json;
  //   // }).catch(this.handleError);
  //
  // }


  getEvents(offset: number, limit: number): Observable<DataResponse<EventEntity>> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('offset', offset.toString());
    params.set('limit', limit.toString());
      return this.http.get(this.path + '/admin/events', this.token(params)).map(r => {
        const json = r.json();
        return json;
      }).catch(this.handleError);
  }



  getGoers(offset: number, limit: number): Observable<DataResponse<UserEntity>> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('offset', offset.toString());
    params.set('limit', limit.toString());
    params.set('role', this.ROLE_STREET_DANCER);

    return this.http.get(this.path + '/admin/users', this.token(params)).map(r => {
      const json = r.json();
      console.log(json);
      return json;
    }).catch(this.handleError);
  }


  getPromoters(offset: number, limit: number): Observable<DataResponse<UserEntity>> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('offset', offset.toString());
    params.set('limit', limit.toString());
    params.set('role', this.ROLE_PARTY_MAKER);

    return this.http.get(this.path + '/admin/users', this.token(params)).map(r => {
      const json = r.json();
      return json;
    }).catch(this.handleError);
  }


  deleteUser(id: number): Observable<void> {
    return this.http.post(this.path + '/admin/users/delete', {id: id}, this.token()).map(r => {
      return r;
    }).catch(this.handleError);
  }




  verifyUser(id: number): Observable<void> {
    return this.http.post(this.path + '/admin/users/verify', {id: id}, this.token()).map(r => {
      return r;
    }).catch(this.handleError);
  }


  lockUser(id: number): Observable<void> {
    return this.http.post(this.path + '/admin/users/lock', {id: id}, this.token()).map(r => {
      return r;
    }).catch(this.handleError);
  }

  unlockUser(id: number): Observable<void> {
    return this.http.post(this.path + '/admin/users/unlock', {id: id}, this.token()).map(r => {
      return r;
    }).catch(this.handleError);
  }

  changeAdminCredentials(newEmail: string, newPassword: string): Observable<void> {
    return this.http.post(this.path + '/admin/credentials', {newEmail: newEmail, newPassword: newPassword}, this.token()).map(r => {
      return r;
    }).catch(this.handleError);
  }




  // paypal
  commercialSetFee(feePercent: number): Observable<void> {
    return this.http.post(this.path + '/admin/commercial/fee', {amount: feePercent}, this.token()).map(r => {
      return r;
    }).catch(this.handleError);
  }

  commercialGetFee(): Observable<DataResponse<EventEntity>> {
    return this.http.get(this.path + '/admin/commercial/fee', this.token()).map(r => {
      const json = r.json();
      return json;
    }).catch(this.handleError);
  }



  // sales

  getSales(offset: number, limit: number): Observable<DataResponse<SaleEntity>> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('offset', offset.toString());
    params.set('limit', limit.toString());

    return this.http.get(this.path + '/admin/sales', this.token(params)).map(r => {
      const json = r.json();
      return json;
    }).catch(this.handleError);
  }

  getTransactionsForEvent(eventId: number, offset: number, limit: number): Observable<DataResponse<EventTransactionEntity>> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('offset', offset.toString());
    params.set('limit', limit.toString());

    return this.http.get(this.path + '/admin/sales/' + eventId, this.token(params)).map(r => {
      const json = r.json();
      return json;
    }).catch(this.handleError);
  }



  //



  private token(params: URLSearchParams = null) {
    // create authorization header with token token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser._token) {



      const headers = new Headers({'x-auth-token': currentUser._token});
      if (params) {
        return new RequestOptions({headers: headers, search: params});
      } else {
        return new RequestOptions({headers: headers});
      }
    }
  }




  private handleError = (res: Response): Observable<any> => {
    this.logger.warn(res.toString());
    return Observable.of({
      data: null,
      error: true,
      errorMessage: 'Something went wrong'
    });
  }

}
