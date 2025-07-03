/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Envi103bComponent } from './envi103b.component';

describe('Envi103bComponent', () => {
  let component: Envi103bComponent;
  let fixture: ComponentFixture<Envi103bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Envi103bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Envi103bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
