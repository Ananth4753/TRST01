/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Envi103aComponent } from './envi103a.component';

describe('Envi103aComponent', () => {
  let component: Envi103aComponent;
  let fixture: ComponentFixture<Envi103aComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Envi103aComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Envi103aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
