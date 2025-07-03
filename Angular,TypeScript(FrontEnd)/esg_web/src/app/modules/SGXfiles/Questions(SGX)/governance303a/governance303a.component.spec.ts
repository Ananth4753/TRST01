/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Governance303aComponent } from './governance303a.component';

describe('Governance303aComponent', () => {
  let component: Governance303aComponent;
  let fixture: ComponentFixture<Governance303aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Governance303aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Governance303aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
