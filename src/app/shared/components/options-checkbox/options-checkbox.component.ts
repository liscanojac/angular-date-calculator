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
  parentCheckbox = new FormControl(true)

  ngOnInit() {
    this.options = Object.keys(this.checkboxOptions())
    this.parentCheckbox.setValue(this.allCheckboxesSelected(), { emitEvent: false })
    this.parentCheckbox.valueChanges.subscribe((value: boolean | null) => {
      if (value !== null) this.setAllCheckBoxes(value)
    })
  }

  setAllCheckBoxes(checked: boolean) {
    this.options.forEach(key => {
      this.checkboxOptions()[key].value = checked
    })
  }

  selectAllCheckboxLabel() {
    return this.parentCheckbox.value ? 'UnselectAll' : 'SelectAll';
  }

  allCheckboxesSelected(): boolean {
    return this.options.every(key => this.checkboxOptions()[key].value)
  }

  handleCheckbox(value: boolean) {
    const allSelected = value ? this.allCheckboxesSelected() : value;
    this.parentCheckbox.setValue(allSelected, { emitEvent: false });
  }
}
