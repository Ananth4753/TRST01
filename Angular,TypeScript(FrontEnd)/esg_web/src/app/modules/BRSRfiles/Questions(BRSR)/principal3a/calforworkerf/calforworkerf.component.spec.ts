/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalforworkerfComponent } from './calforworkerf.component';

describe('CalforworkerfComponent', () => {
  let component: CalforworkerfComponent;
  let fixture: ComponentFixture<CalforworkerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalforworkerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalforworkerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
