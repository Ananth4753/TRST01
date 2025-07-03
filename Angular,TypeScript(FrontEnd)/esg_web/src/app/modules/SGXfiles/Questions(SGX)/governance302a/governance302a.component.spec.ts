/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Governance302aComponent } from './governance302a.component';

describe('Governance302aComponent', () => {
  let component: Governance302aComponent;
  let fixture: ComponentFixture<Governance302aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Governance302aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Governance302aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
