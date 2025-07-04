/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Principal8bComponent } from './principal8b.component';

describe('Principal8bComponent', () => {
  let component: Principal8bComponent;
  let fixture: ComponentFixture<Principal8bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Principal8bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Principal8bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
