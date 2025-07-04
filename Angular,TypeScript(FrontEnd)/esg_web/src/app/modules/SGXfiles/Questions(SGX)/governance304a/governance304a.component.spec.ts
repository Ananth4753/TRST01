/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Governance304aComponent } from './governance304a.component';

describe('Governance304aComponent', () => {
  let component: Governance304aComponent;
  let fixture: ComponentFixture<Governance304aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Governance304aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Governance304aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
