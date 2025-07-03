/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Envi102bComponent } from './envi102b.component';

describe('Envi102bComponent', () => {
  let component: Envi102bComponent;
  let fixture: ComponentFixture<Envi102bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Envi102bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Envi102bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
