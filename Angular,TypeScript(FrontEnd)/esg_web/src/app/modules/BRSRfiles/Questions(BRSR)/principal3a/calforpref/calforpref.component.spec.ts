/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalforprefComponent } from './calforpref.component';

describe('CalforprefComponent', () => {
  let component: CalforprefComponent;
  let fixture: ComponentFixture<CalforprefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalforprefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalforprefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
