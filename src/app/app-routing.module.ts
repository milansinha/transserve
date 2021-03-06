import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: './dashboard/dashboard.module#DashboardModule',
  //   // pathMatch: 'full',
  // //   canActivate: [PublicGuard]
  // },

  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'employee-log', loadChildren: () => import('./employeelog-form/employeelog-form.module').then(m => m.EmployeelogFormModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
