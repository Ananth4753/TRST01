/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social202aComponent } from './social202a.component';

describe('Social202aComponent', () => {
  let component: Social202aComponent;
  let fixture: ComponentFixture<Social202aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social202aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social202aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
