/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GhemissionsComponent } from './ghemissions.component';

describe('GhemissionsComponent', () => {
  let component: GhemissionsComponent;
  let fixture: ComponentFixture<GhemissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhemissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhemissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
