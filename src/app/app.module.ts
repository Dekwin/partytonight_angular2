import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { EventsTableComponent } from './components/tables/events-table/events-table.component';
import { UsersTableComponent } from './components/tables/users-table/users-table.component';
import {BasetableComponent} from "./components/tables/basetable/basetable.component";
import {PaginatorComponent} from "./components/utils/paginator/paginator.component";
import {TranslateModule, TranslateLoader} from "ng2-translate/index";
import {translateLoader} from "./export";
import {AppRoutingModule} from "./routes/app-routing/app-routing.module";
import {IndexComponent} from "./components/index/index.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {AdminService} from "./services/api/admin.service";
import {LoggerService} from "./services/logger/logger.service";
import { CommercialSettingsComponent } from './components/commercial/commercial-settings/commercial-settings.component';
import { ResetPasswordComponent } from './components/authorization/reset-password/reset-password.component';
import { SigninComponent } from './components/authorization/signin/signin.component';
import {AuthenticationService} from "./services/api/authentication.service";
import { ProfileComponent } from './components/profile/profile.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { HeaderMenuComponent } from './components/header/menu/header-menu/header-menu.component';
import { SalesTableComponent } from './components/tables/sales-table/sales-table.component';
import { EventTransactionsTableComponent } from './components/tables/event-transactions-table/event-transactions-table.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,

    EventsTableComponent,
    UsersTableComponent,
    BasetableComponent,
    PaginatorComponent,
    CommercialSettingsComponent,
    ResetPasswordComponent,
    SigninComponent,
    ProfileComponent,
    HelpPageComponent,
    HeaderMenuComponent,
    SalesTableComponent,
    EventTransactionsTableComponent
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
  providers: [AdminService,LoggerService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
