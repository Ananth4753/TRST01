/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Principal5bComponent } from './principal5b.component';

describe('Principal5bComponent', () => {
  let component: Principal5bComponent;
  let fixture: ComponentFixture<Principal5bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Principal5bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Principal5bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
