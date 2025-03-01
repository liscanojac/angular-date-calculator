import { Component, input } from '@angular/core';
import { CheckboxOptions } from '../../interfaces/checkbox-options';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-options-checkbox',
  imports: [MatCheckboxModule, FormsModule, ReactiveFormsModule],
  templateUrl: './options-checkbox.component.html',
  styleUrl: './options-checkbox.component.css'
})
export class OptionsCheckboxComponent {
  checkboxOptions = input.required<CheckboxOptions>()
  options: Array<string> = []
  selectAllCheckbox = input<boolean>(false)
  selectAllCheckboxLabel = input<string>('Select All')
  parentCheckbox = new FormControl(true)

  ngOnInit() {
    this.options = Object.keys(this.checkboxOptions())
    this.parentCheckbox.valueChanges.subscribe((value: boolean | null) => {
      if (value !== null) this.setAllCheckBoxes(value)
    })
  }

  setAllCheckBoxes(checked: boolean) {
    this.options.forEach(key => {
      this.checkboxOptions()[key].value = checked
    })
  }

  handleCheckbox(value: boolean) {
    if (!value) this.parentCheckbox.setValue(false, { emitEvent: false })
  }
}
