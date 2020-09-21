import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';



export const routes: Routes = [
  { path: '', component: DashboardComponent },
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // MatSidenavModule
  ]
})
export class DashboardModule { }
