import {Http} from "@angular/http";
import {TranslateStaticLoader} from "ng2-translate/index";
/**
 * Created by igorkasyanenko on 08.03.17.
 */
export function translateLoader(http: Http) { 
  return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}
