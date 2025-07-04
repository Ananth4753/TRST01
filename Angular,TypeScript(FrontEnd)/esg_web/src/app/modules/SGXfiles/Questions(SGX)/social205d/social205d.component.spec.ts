/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social205dComponent } from './social205d.component';

describe('Social205dComponent', () => {
  let component: Social205dComponent;
  let fixture: ComponentFixture<Social205dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social205dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social205dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
