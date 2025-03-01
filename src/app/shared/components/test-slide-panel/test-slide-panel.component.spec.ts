import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSlidePanelComponent } from './test-slide-panel.component';

describe('TestSlidePanelComponent', () => {
  let component: TestSlidePanelComponent;
  let fixture: ComponentFixture<TestSlidePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSlidePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSlidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
