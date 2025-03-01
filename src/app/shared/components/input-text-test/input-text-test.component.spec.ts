import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextTestComponent } from './input-text-test.component';

describe('InputTextTestComponent', () => {
  let component: InputTextTestComponent;
  let fixture: ComponentFixture<InputTextTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
