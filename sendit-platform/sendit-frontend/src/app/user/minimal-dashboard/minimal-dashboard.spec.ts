import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalDashboard } from './minimal-dashboard';

describe('MinimalDashboard', () => {
  let component: MinimalDashboard;
  let fixture: ComponentFixture<MinimalDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimalDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimalDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
