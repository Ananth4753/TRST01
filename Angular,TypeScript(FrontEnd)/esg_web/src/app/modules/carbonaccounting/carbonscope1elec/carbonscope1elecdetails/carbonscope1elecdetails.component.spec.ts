/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Carbonscope1elecdetailsComponent } from './carbonscope1elecdetails.component';

describe('Carbonscope1elecdetailsComponent', () => {
  let component: Carbonscope1elecdetailsComponent;
  let fixture: ComponentFixture<Carbonscope1elecdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carbonscope1elecdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carbonscope1elecdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
