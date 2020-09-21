import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getProject() {
    return this.http.get(environment.baseUrl + 'project');
  }

  getEmployee() {
    return this.http.get(environment.baseUrl + 'employee');
  }

  postEmployeeLog(data: any) {
    return this.http.post(environment.baseUrl + 'employeeLog', data);
  }

  getEmployeeLog() {
    return this.http.get(environment.baseUrl + 'getEmployeelog');
  }
}
