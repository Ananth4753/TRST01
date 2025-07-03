/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Governance305aComponent } from './governance305a.component';

describe('Governance305aComponent', () => {
  let component: Governance305aComponent;
  let fixture: ComponentFixture<Governance305aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Governance305aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Governance305aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
