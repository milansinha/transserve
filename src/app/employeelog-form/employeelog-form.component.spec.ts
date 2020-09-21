import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelogFormComponent } from './employeelog-form.component';

describe('EmployeelogFormComponent', () => {
  let component: EmployeelogFormComponent;
  let fixture: ComponentFixture<EmployeelogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeelogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
