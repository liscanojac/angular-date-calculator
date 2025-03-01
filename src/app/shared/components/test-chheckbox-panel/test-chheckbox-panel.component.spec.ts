import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestChheckboxPanelComponent } from './test-chheckbox-panel.component';

describe('TestChheckboxPanelComponent', () => {
  let component: TestChheckboxPanelComponent;
  let fixture: ComponentFixture<TestChheckboxPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestChheckboxPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestChheckboxPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
