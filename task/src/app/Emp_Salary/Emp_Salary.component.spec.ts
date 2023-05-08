/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Emp_SalaryComponent } from './Emp_Salary.component';

describe('Emp_SalaryComponent', () => {
  let component: Emp_SalaryComponent;
  let fixture: ComponentFixture<Emp_SalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Emp_SalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Emp_SalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
