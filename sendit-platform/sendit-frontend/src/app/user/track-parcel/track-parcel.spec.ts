import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackParcel } from './track-parcel';

describe('TrackParcel', () => {
  let component: TrackParcel;
  let fixture: ComponentFixture<TrackParcel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackParcel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackParcel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
