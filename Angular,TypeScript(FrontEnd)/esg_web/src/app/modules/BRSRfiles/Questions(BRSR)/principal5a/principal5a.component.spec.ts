/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Principal5aComponent } from './principal5a.component';

describe('Principal5aComponent', () => {
  let component: Principal5aComponent;
  let fixture: ComponentFixture<Principal5aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Principal5aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Principal5aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
