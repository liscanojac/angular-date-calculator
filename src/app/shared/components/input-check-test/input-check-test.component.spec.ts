import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCheckTestComponent } from './input-check-test.component';

describe('InputCheckTestComponent', () => {
  let component: InputCheckTestComponent;
  let fixture: ComponentFixture<InputCheckTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCheckTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCheckTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
