import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicMessage } from './dynamic-message';

describe('DynamicMessage', () => {
  let component: DynamicMessage;
  let fixture: ComponentFixture<DynamicMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
