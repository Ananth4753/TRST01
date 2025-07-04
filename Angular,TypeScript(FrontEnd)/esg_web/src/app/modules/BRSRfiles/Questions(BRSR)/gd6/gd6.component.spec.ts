/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Gd6Component } from './gd6.component';

describe('Gd6Component', () => {
  let component: Gd6Component;
  let fixture: ComponentFixture<Gd6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gd6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gd6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
