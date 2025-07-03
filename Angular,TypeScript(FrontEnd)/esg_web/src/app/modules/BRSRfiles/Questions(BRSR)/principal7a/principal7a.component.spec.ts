/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Principal7aComponent } from './principal7a.component';

describe('Principal7aComponent', () => {
  let component: Principal7aComponent;
  let fixture: ComponentFixture<Principal7aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Principal7aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Principal7aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
