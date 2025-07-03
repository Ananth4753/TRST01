/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social204bComponent } from './social204b.component';

describe('Social204bComponent', () => {
  let component: Social204bComponent;
  let fixture: ComponentFixture<Social204bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social204bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social204bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
