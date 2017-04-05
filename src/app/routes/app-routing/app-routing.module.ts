import { NgModule } from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import {PageNotFoundComponent} from "../../components/page-not-found/page-not-found.component";
import {IndexComponent} from "../../components/index/index.component";
import {AuthGuard} from "../../guards/auth.guard";


const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  // { path: 'credits', component: MycreditstableComponent, canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'index',
  //       component: IndexComponent
  //     }
  //   ]
  // },
  // { path: 'tickets', component: NewTicketComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [

    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers:[
  AuthGuard
]
})
export class AppRoutingModule {}
