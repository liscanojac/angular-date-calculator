import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMultiToggleComponent } from './test-multi-toggle.component';

describe('TestMultiToggleComponent', () => {
  let component: TestMultiToggleComponent;
  let fixture: ComponentFixture<TestMultiToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestMultiToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMultiToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
