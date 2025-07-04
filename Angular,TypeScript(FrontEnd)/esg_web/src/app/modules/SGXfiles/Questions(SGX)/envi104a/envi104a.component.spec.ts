/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Envi104aComponent } from './envi104a.component';

describe('Envi104aComponent', () => {
  let component: Envi104aComponent;
  let fixture: ComponentFixture<Envi104aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Envi104aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Envi104aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
