import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
// import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-employeelog-form',
  templateUrl: './employeelog-form.component.html',
  styleUrls: ['./employeelog-form.component.scss']
})
export class EmployeelogFormComponent implements OnInit {

  logForm: FormGroup;
  projectId: any = [];
  employeeId: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.logForm = this.formBuilder.group({
      date: ['', [Validators.required]],
      timelog: ['', [Validators.required]],
      project: [1, [Validators.required]],
      employee: [1, [Validators.required]],
    });
    this.apiService.getProject().subscribe((res: any) => {
      console.log(res);
      for (let item of res) {
        this.projectId.push(item.id);
      }
      this.projectId.sort();
    });

    this.apiService.getEmployee().subscribe((res: any) => {
      console.log(res);
      for (let item of res) {
        this.employeeId.push(item.id);
      }
      this.employeeId.sort();
    });
  }

  submit() {
    if (this.logForm.valid) {
      console.log(this.logForm.value);
      this.apiService.postEmployeeLog(this.logForm.value).subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['']);
      });
    }
    else {
      console.log('Invalid');
    }
  }

}
