import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelogFormComponent } from './employeelog-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: EmployeelogFormComponent },
];

@NgModule({
  declarations: [EmployeelogFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeelogFormModule { }
