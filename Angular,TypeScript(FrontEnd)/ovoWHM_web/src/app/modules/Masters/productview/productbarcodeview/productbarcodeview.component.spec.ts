import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbarcodeviewComponent } from './productbarcodeview.component';

describe('ProductbarcodeviewComponent', () => {
  let component: ProductbarcodeviewComponent;
  let fixture: ComponentFixture<ProductbarcodeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbarcodeviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbarcodeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
