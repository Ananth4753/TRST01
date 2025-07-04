/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Scope3avgComponent } from './scope3avg.component';

describe('Scope3avgComponent', () => {
  let component: Scope3avgComponent;
  let fixture: ComponentFixture<Scope3avgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scope3avgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scope3avgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
