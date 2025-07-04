import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrsrSigningoffComponent } from './brsr-signingoff.component';

describe('BrsrSigningoffComponent', () => {
  let component: BrsrSigningoffComponent;
  let fixture: ComponentFixture<BrsrSigningoffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrsrSigningoffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrsrSigningoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
