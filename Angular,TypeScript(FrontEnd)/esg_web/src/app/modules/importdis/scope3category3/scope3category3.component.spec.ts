/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Scope3category3Component } from './scope3category3.component';

describe('Scope3category3Component', () => {
  let component: Scope3category3Component;
  let fixture: ComponentFixture<Scope3category3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scope3category3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scope3category3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
