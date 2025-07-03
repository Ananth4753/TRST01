/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social203aComponent } from './social203a.component';

describe('Social203aComponent', () => {
  let component: Social203aComponent;
  let fixture: ComponentFixture<Social203aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social203aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social203aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
