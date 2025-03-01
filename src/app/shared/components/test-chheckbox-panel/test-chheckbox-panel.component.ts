import { Component, input } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MultiToggleOptions } from '../../interfaces/multi-toggle-options';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-chheckbox-panel',
  imports: [MatCheckboxModule, FormsModule, ReactiveFormsModule],
  templateUrl: './test-chheckbox-panel.component.html',
  styleUrl: './test-chheckbox-panel.component.css'
})
export class TestChheckboxPanelComponent {

  toggleOptions = input.required<MultiToggleOptions>();
  options: Array<string> = [];
  selectAllCheckbox = input<boolean>(false)
  selectAllCheckboxLabel = input<string>('Select All')
  parentCheckbox = new FormControl(false)

  ngOnInit() {
    this.options = Object.keys(this.toggleOptions());
    this.parentCheckbox.valueChanges.subscribe((value: boolean | null) => {
        if (value !== null) {
        this.setAllCheckboxes(value);
      }
      }
    )
  }

  setAllCheckboxes(checked: boolean) {
    this.options.forEach(key => {
      this.toggleOptions()[key].value = checked;
    });
  }
  handleChange(value: boolean) {
    if(!value) {
      this.parentCheckbox.setValue(false, { emitEvent: false })
    }
  }
}
