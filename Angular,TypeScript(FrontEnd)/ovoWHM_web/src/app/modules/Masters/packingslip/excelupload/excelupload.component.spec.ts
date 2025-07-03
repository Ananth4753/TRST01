import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EexceluploadComponent } from './excelupload.component';

describe('EexceluploadComponent', () => {
  let component: EexceluploadComponent;
  let fixture: ComponentFixture<EexceluploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EexceluploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EexceluploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
