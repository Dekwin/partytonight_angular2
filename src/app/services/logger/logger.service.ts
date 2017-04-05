/**
 * Created by igorkasyanenko on 08.03.17.
 */
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoggerService {

  log(data) {
    if (environment.production) { return; }

    console.log(data);
  }

  warn(data) {
    if (environment.production) { return; }

    console.warn(data);
  }

  error(data) {
    if (environment.production) { return; }

    console.error(data);
  }
}
