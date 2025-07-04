/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social201bComponent } from './social201b.component';

describe('Social201bComponent', () => {
  let component: Social201bComponent;
  let fixture: ComponentFixture<Social201bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social201bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social201bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
