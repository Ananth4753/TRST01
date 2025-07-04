/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social202bComponent } from './social202b.component';

describe('Social202bComponent', () => {
  let component: Social202bComponent;
  let fixture: ComponentFixture<Social202bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social202bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social202bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
