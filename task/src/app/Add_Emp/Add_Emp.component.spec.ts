/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Add_EmpComponent } from './Add_Emp.component';

describe('Add_EmpComponent', () => {
  let component: Add_EmpComponent;
  let fixture: ComponentFixture<Add_EmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add_EmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add_EmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
