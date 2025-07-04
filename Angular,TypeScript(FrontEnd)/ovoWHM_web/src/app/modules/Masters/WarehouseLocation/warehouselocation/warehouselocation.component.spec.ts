import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouselocationComponent } from './warehouselocation.component';

describe('WarehouselocationComponent', () => {
  let component: WarehouselocationComponent;
  let fixture: ComponentFixture<WarehouselocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouselocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouselocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
