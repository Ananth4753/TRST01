import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackbarcodeComponent } from './stackbarcode.component';

describe('StackbarcodeComponent', () => {
  let component: StackbarcodeComponent;
  let fixture: ComponentFixture<StackbarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackbarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackbarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
