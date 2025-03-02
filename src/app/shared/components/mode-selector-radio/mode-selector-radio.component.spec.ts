import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeSelectorRadioComponent } from './mode-selector-radio.component';

describe('ModeSelectorRadioComponent', () => {
  let component: ModeSelectorRadioComponent;
  let fixture: ComponentFixture<ModeSelectorRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeSelectorRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeSelectorRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
