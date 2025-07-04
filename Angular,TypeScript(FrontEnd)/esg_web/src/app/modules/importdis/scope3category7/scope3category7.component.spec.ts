/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Scope3category7Component } from './scope3category7.component';

describe('Scope3category7Component', () => {
  let component: Scope3category7Component;
  let fixture: ComponentFixture<Scope3category7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scope3category7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scope3category7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
