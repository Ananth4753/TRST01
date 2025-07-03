import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodedetailsComponent } from './barcodedetails.component';

describe('BarcodedetailsComponent', () => {
  let component: BarcodedetailsComponent;
  let fixture: ComponentFixture<BarcodedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
