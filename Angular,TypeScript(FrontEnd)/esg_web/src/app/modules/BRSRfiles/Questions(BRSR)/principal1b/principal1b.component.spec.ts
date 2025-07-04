/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Principal1bComponent } from './principal1b.component';

describe('Principal1bComponent', () => {
  let component: Principal1bComponent;
  let fixture: ComponentFixture<Principal1bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Principal1bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Principal1bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
