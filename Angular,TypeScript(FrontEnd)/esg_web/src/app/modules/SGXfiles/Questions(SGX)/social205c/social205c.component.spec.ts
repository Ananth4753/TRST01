/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social205cComponent } from './social205c.component';

describe('Social205cComponent', () => {
  let component: Social205cComponent;
  let fixture: ComponentFixture<Social205cComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social205cComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social205cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
