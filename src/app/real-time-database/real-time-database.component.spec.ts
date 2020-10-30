import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeDatabaseComponent } from './real-time-database.component';

describe('RealTimeDatabaseComponent', () => {
  let component: RealTimeDatabaseComponent;
  let fixture: ComponentFixture<RealTimeDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
