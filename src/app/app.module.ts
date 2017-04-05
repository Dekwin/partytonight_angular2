import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PartyGoersTableComponent } from './components/tables/party-goers-table/party-goers-table.component';
import { PromotersTableComponent } from './components/tables/promoters-table/promoters-table.component';
import { EventsTableComponent } from './components/tables/events-table/events-table.component';
import { UsersTableComponent } from './components/tables/users-table/users-table.component';
import {BasetableComponent} from "./components/tables/basetable/basetable.component";
import {PaginatorComponent} from "./components/utils/paginator/paginator.component";
import {TranslateModule, TranslateLoader} from "ng2-translate/index";
import {translateLoader} from "./export";
import {AppRoutingModule} from "./routes/app-routing/app-routing.module";
import {IndexComponent} from "./components/index/index.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    PartyGoersTableComponent,
    PromotersTableComponent,
    EventsTableComponent,
    UsersTableComponent,
    BasetableComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot(
      {
        provide: TranslateLoader,
        useFactory: translateLoader,
        deps: [Http]
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
