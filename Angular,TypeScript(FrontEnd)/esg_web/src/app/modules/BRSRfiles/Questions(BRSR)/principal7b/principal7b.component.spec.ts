/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Principal7bComponent } from './principal7b.component';

describe('Principal7bComponent', () => {
  let component: Principal7bComponent;
  let fixture: ComponentFixture<Principal7bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Principal7bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Principal7bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
