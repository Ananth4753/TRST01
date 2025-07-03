import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsgbooklibraryComponent } from './esgbooklibrary.component';

describe('EsgbooklibraryComponent', () => {
  let component: EsgbooklibraryComponent;
  let fixture: ComponentFixture<EsgbooklibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsgbooklibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsgbooklibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
