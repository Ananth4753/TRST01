/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social205aComponent } from './social205a.component';

describe('Social205aComponent', () => {
  let component: Social205aComponent;
  let fixture: ComponentFixture<Social205aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social205aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social205aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
