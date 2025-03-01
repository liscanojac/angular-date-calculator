import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import { MultiToggleOptions } from '../../interfaces/multi-toggle-options';

@Component({
  selector: 'app-test-multi-toggle',
  imports: [MatButtonToggleModule, FormsModule],
  templateUrl: './test-multi-toggle.component.html',
  styleUrl: './test-multi-toggle.component.css'
})
export class TestMultiToggleComponent {
  toggleOptions = input.required<MultiToggleOptions>();
  options: Array<string> = [];

  ngOnInit() {
    this.options = Object.keys(this.toggleOptions()); 
  }
}
