/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social205bComponent } from './social205b.component';

describe('Social205bComponent', () => {
  let component: Social205bComponent;
  let fixture: ComponentFixture<Social205bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social205bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social205bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
