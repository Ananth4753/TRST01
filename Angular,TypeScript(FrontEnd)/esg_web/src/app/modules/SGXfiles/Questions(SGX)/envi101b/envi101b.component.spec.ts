/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Envi101bComponent } from './envi101b.component';

describe('Envi101bComponent', () => {
  let component: Envi101bComponent;
  let fixture: ComponentFixture<Envi101bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Envi101bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Envi101bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
