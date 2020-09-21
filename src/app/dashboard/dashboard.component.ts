import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  projectId: any = [];
  employeeId: any = [];
  project: any;
  employee: any;
  allProject: any = [];
  allEmployee: any = [];
  timelog: number = 0;
  estimateTimeLog: number = 0;
  filteredProj: any = 'all';
  filteredEmploye: any = 'all';
  employeeTimeLog: number = 0
  AllEmployeeLog: any = [];
  storeAllEmployeeData: any = [];

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.getProject().subscribe((res: any) => {
      console.log(res);
      this.allProject = res;
      for (let item of res) {
        this.projectId.push(item.id);
        this.timelog += parseInt(item.time);
        this.estimateTimeLog += parseInt(item.totalEstimate);
        console.log(this.timelog);
      }
      this.projectId.sort();
      console.log(this.timelog);
    });

    this.apiService.getEmployee().subscribe((res: any) => {
      console.log(res);
      this.allEmployee = res;
      for (let item of res) {
        this.employeeId.push(item.id);
      }
      this.employeeId.sort();
    });

    this.apiService.getEmployeeLog().subscribe((res: any) => {
      console.log(res);
      this.AllEmployeeLog = res;
      this.storeAllEmployeeData = res;
      for (let item of this.AllEmployeeLog) {
        this.employeeTimeLog += parseInt(item.timelog);
      }
    })
  }

  projectFilter(data) {
    console.log(data);
    this.filteredProj = data;
    this.timelog = 0;
    this.estimateTimeLog = 0;

    for (let item of this.allProject) {
      if (data !== 'all') {
        if (parseInt(item.id) === parseInt(data)) {
          this.timelog = parseInt(item.time);
          this.estimateTimeLog = parseInt(item.totalEstimate);
        }
      }
      else {
        this.timelog += parseInt(item.time);
        this.estimateTimeLog += parseInt(item.totalEstimate);
      }
    }
    this.tableFilter();
  }

  employeeFilter(data) {
    console.log(data);
    this.filteredEmploye = data;
    this.employeeTimeLog = 0;
    for (let item of this.storeAllEmployeeData) {
      if (data !== 'all') {
        if (parseInt(item.employee) === parseInt(data)) {
          this.employeeTimeLog = parseInt(item.timelog);
        }
      }
      else {
        this.employeeTimeLog += parseInt(item.timelog);
      }
    }
    this.tableFilter();
  }

  tableFilter() {
    this.AllEmployeeLog = this.storeAllEmployeeData;
    if (this.filteredProj === 'all' && this.filteredEmploye !== 'all') {
      this.AllEmployeeLog = this.AllEmployeeLog.filter(obj => obj.employee == this.filteredEmploye);
    }
    else if (this.filteredProj !== 'all' && this.filteredEmploye === 'all') {
      this.AllEmployeeLog = this.AllEmployeeLog.filter(obj => obj.project == this.filteredProj);
    }
    else if (this.filteredProj !== 'all' && this.filteredEmploye !== 'all') {
      this.AllEmployeeLog = this.AllEmployeeLog.filter(obj => obj.employee == this.filteredEmploye && obj.project == this.filteredProj);
    }
    console.log(this.AllEmployeeLog);
  }



}
