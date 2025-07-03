import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrsrSignoffreportComponent } from './brsr-signoffreport.component';

describe('BrsrSignoffreportComponent', () => {
  let component: BrsrSignoffreportComponent;
  let fixture: ComponentFixture<BrsrSignoffreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrsrSignoffreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrsrSignoffreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
