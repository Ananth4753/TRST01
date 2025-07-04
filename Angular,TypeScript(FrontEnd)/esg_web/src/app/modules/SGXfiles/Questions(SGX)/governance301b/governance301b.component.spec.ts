/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Governance301bComponent } from './governance301b.component';

describe('Governance301bComponent', () => {
  let component: Governance301bComponent;
  let fixture: ComponentFixture<Governance301bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Governance301bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Governance301bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
