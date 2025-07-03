/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Scope3category5Component } from './scope3category5.component';

describe('Scope3category5Component', () => {
  let component: Scope3category5Component;
  let fixture: ComponentFixture<Scope3category5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scope3category5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scope3category5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
