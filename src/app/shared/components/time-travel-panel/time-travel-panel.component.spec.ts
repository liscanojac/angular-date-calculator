import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTravelPanelComponent } from './time-travel-panel.component';

describe('TimeTravelPanelComponent', () => {
  let component: TimeTravelPanelComponent;
  let fixture: ComponentFixture<TimeTravelPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeTravelPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeTravelPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
