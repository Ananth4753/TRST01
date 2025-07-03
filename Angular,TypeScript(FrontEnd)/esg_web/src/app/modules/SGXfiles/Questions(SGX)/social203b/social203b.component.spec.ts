/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Social203bComponent } from './social203b.component';

describe('Social203bComponent', () => {
  let component: Social203bComponent;
  let fixture: ComponentFixture<Social203bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Social203bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Social203bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
