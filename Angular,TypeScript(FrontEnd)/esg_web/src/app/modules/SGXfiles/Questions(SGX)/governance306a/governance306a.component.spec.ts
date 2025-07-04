/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Governance306aComponent } from './governance306a.component';

describe('Governance306aComponent', () => {
  let component: Governance306aComponent;
  let fixture: ComponentFixture<Governance306aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Governance306aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Governance306aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
