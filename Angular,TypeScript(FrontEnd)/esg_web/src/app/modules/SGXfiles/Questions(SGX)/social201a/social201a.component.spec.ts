/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social201aComponent } from './social201a.component';

describe('Social201aComponent', () => {
  let component: Social201aComponent;
  let fixture: ComponentFixture<Social201aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social201aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social201aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
