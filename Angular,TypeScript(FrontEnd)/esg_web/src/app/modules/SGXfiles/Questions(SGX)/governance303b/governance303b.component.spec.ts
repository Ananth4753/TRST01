/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Governance303bComponent } from './governance303b.component';

describe('Governance303bComponent', () => {
  let component: Governance303bComponent;
  let fixture: ComponentFixture<Governance303bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Governance303bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Governance303bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
