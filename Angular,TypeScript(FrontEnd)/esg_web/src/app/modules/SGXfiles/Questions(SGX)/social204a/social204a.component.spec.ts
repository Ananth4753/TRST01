/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social204aComponent } from './social204a.component';

describe('Social204aComponent', () => {
  let component: Social204aComponent;
  let fixture: ComponentFixture<Social204aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social204aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social204aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
