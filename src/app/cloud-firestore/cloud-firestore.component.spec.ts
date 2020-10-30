import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudFirestoreComponent } from './cloud-firestore.component';

describe('CloudFirestoreComponent', () => {
  let component: CloudFirestoreComponent;
  let fixture: ComponentFixture<CloudFirestoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudFirestoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudFirestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
