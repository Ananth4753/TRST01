/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Principal2aComponent } from './principal2a.component';

describe('Principal2aComponent', () => {
  let component: Principal2aComponent;
  let fixture: ComponentFixture<Principal2aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Principal2aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Principal2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
