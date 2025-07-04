/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Scope3hotelComponent } from './scope3hotel.component';

describe('Scope3hotelComponent', () => {
  let component: Scope3hotelComponent;
  let fixture: ComponentFixture<Scope3hotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scope3hotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scope3hotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
