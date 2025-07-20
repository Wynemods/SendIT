import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredDashboard } from './centered-dashboard';

describe('CenteredDashboard', () => {
  let component: CenteredDashboard;
  let fixture: ComponentFixture<CenteredDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenteredDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenteredDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
