/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Principal4aComponent } from './principal4a.component';

describe('Principal4aComponent', () => {
  let component: Principal4aComponent;
  let fixture: ComponentFixture<Principal4aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Principal4aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Principal4aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
