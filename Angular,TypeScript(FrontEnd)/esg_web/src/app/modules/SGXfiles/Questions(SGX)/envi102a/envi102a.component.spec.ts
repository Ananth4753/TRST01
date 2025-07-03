/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Envi102aComponent } from './envi102a.component';

describe('Envi102aComponent', () => {
  let component: Envi102aComponent;
  let fixture: ComponentFixture<Envi102aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Envi102aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Envi102aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
