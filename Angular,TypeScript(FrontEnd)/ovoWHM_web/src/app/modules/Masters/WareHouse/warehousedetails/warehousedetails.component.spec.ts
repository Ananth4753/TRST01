import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousedetailsComponent } from './warehousedetails.component';

describe('WarehousedetailsComponent', () => {
  let component: WarehousedetailsComponent;
  let fixture: ComponentFixture<WarehousedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehousedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
