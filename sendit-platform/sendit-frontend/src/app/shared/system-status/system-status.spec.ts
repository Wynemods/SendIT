import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemStatus } from './system-status';

describe('SystemStatus', () => {
  let component: SystemStatus;
  let fixture: ComponentFixture<SystemStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemStatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
