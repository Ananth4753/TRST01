/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Principal9aComponent } from './principal9a.component';

describe('Principal9aComponent', () => {
  let component: Principal9aComponent;
  let fixture: ComponentFixture<Principal9aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Principal9aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Principal9aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
