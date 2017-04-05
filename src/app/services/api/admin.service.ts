import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {LoggerService} from "../logger/logger.service";
import {Observable} from "rxjs/Rx";
import {Http, URLSearchParams, Headers, Response, RequestOptions} from "@angular/http";
import {TicketEntity} from "../../models/ticket-entity";
import {EventEntity} from "../../models/event-entity";
import {DataResponse} from "../../models/dataResponse";
import {UserEntity} from "../../models/user";

//mocks
@Injectable()
export class AdminService {
  path:string = environment.baseApiPath;

  constructor(private http:Http, private logger:LoggerService) {
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


  getGoers(offset: number, limit: number):Observable<DataResponse<UserEntity>> {

    var items:UserEntity[] = [];
    for(var i = 0; i< 6; i++){
      items.push(new UserEntity());
    }

    var result = new DataResponse<UserEntity>(items.length,items.slice(offset,offset+limit));
    return Observable.of(result);
  }


  getPromoters(offset: number, limit: number):Observable<DataResponse<UserEntity>> {

    var items:UserEntity[] = [];
    for(var i = 0; i< 38; i++){
      items.push(new UserEntity());
    }

    var result = new DataResponse<UserEntity>(items.length,items.slice(offset,offset+limit));
    return Observable.of(result);
  }



  private token(params:URLSearchParams = null) {
    // create authorization header with token token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {


      let headers = new Headers({'x-auth-token': currentUser.token});
      if (params) {
        return new RequestOptions({headers: headers, search: params});
      } else {
        return new RequestOptions({headers: headers});
      }
    }
  }


  private handleError = (res:Response):Observable<any> => {
    this.logger.warn(res.toString());
    return Observable.of({
      data: null,
      error: true,
      errorMessage: 'Something went wrong'
    });
  }

}
