/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Gd5Component } from './gd5.component';

describe('Gd5Component', () => {
  let component: Gd5Component;
  let fixture: ComponentFixture<Gd5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gd5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gd5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
