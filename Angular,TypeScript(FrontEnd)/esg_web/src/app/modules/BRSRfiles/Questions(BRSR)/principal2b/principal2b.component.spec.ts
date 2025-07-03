/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Principal2bComponent } from './principal2b.component';

describe('Principal2bComponent', () => {
  let component: Principal2bComponent;
  let fixture: ComponentFixture<Principal2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Principal2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Principal2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
