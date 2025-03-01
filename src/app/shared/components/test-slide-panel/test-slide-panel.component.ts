import { Component, input } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MultiToggleOptions } from '../../interfaces/multi-toggle-options';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-slide-panel',
  imports: [MatSlideToggleModule, ReactiveFormsModule, FormsModule],
  templateUrl: './test-slide-panel.component.html',
  styleUrl: './test-slide-panel.component.css'
})
export class TestSlidePanelComponent {
  toggleOptions = input.required<MultiToggleOptions>();
  options: Array<string> = [];

  ngOnInit() {
    this.options = Object.keys(this.toggleOptions()); 
  }

}
