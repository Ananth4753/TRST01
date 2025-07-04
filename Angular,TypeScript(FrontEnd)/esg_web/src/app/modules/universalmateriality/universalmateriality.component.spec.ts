import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalmaterialityComponent } from './universalmateriality.component';

describe('UniversalmaterialityComponent', () => {
  let component: UniversalmaterialityComponent;
  let fixture: ComponentFixture<UniversalmaterialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalmaterialityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalmaterialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
