import {NgModule} from '@angular/core';
import {RouterModule, Routes}    from '@angular/router';
import {PageNotFoundComponent} from '../../components/page-not-found/page-not-found.component';
import {IndexComponent} from '../../components/index/index.component';
import {AuthGuard} from '../../guards/auth.guard';
import {UsersTableComponent} from '../../components/tables/users-table/users-table.component';
import {EventsTableComponent} from '../../components/tables/events-table/events-table.component';
import {ResetPasswordComponent} from '../../components/authorization/reset-password/reset-password.component';
import {CommercialSettingsComponent} from '../../components/commercial/commercial-settings/commercial-settings.component';
import {SigninComponent} from '../../components/authorization/signin/signin.component';
import {ProfileComponent} from '../../components/profile/profile.component';
import {HelpPageComponent} from '../../components/help-page/help-page.component';
import {SalesTableComponent} from '../../components/tables/sales-table/sales-table.component';
import {EventTransactionsTableComponent} from '../../components/tables/event-transactions-table/event-transactions-table.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'adminpanel'},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'signin', component: SigninComponent},
  {
    path: 'adminpanel', component: IndexComponent, canActivate: [AuthGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'events'},
      {path: 'events', component: EventsTableComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'commercial', component: CommercialSettingsComponent},
      {path: 'sales',  pathMatch: 'full', component: SalesTableComponent},
      {path: 'sales/:eventId', component: EventTransactionsTableComponent},
      {path: 'help', component: HelpPageComponent},
      {path: 'users/:type', component: UsersTableComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  },


  // { path: 'credits', component: MycreditstableComponent, canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'index',
  //       component: IndexComponent
  //     }
  //   ]
  // },
  // { path: 'tickets', component: NewTicketComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [

    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {
}
