import { Component } from '@angular/core';
import {TranslateService} from "ng2-translate/index";
import {SidebarComponent} from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents : [SidebarComponent]
})
export class AppComponent {
  constructor(translate: TranslateService){
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    let lng:string = localStorage.getItem('currentLocale');

    translate.use(lng ? lng : translate.getBrowserLang());
  }
}
