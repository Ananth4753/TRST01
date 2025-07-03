/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalforworkermComponent } from './calforworkerm.component';

describe('CalforworkermComponent', () => {
  let component: CalforworkermComponent;
  let fixture: ComponentFixture<CalforworkermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalforworkermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalforworkermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
