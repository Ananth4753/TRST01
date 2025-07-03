import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackviewbarcodeComponent } from './stackviewbarcode.component';

describe('StackviewbarcodeComponent', () => {
  let component: StackviewbarcodeComponent;
  let fixture: ComponentFixture<StackviewbarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackviewbarcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackviewbarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
