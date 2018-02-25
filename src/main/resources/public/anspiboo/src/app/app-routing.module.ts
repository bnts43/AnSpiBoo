import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { OpfsComponent } from "./opfs/opfs.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import {OpfDetailComponent} from "./opf-detail/opf-detail.component";
import {OpfparameterComponent} from "./opfparameter/opfparameter.component";

const routes: Routes = [
  { path: 'my-opfs', component: OpfsComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'opf/:id', component: OpfDetailComponent},
  { path: 'opf/parameter/:id', component: OpfparameterComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
