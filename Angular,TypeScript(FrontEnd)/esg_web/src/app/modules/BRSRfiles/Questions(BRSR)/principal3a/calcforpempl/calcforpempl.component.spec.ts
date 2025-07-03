/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalcforpemplComponent } from './calcforpempl.component';

describe('CalcforpemplComponent', () => {
  let component: CalcforpemplComponent;
  let fixture: ComponentFixture<CalcforpemplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcforpemplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcforpemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
