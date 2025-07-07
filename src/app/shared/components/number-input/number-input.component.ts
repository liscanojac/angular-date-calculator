import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-number-input',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.css'
})
export class NumberInputComponent {

  inputValue = input.required<FormControl<number | null>>();
  max =  input<number>();
  min = input<number>();
  onlyPositives = input<boolean>(false);
  decimalsAllowed = input<boolean>(true);

  onlyNumbersOnInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;

    value = value.replace(/[^0-9-]/g, '');
    if (this.inputValue().invalid) {
      value = String(this.validateMinAndMax(Number(value)));
    }
    inputElement.value = value;
      

    this.inputValue().setValue(Number(value) || null, { emitEvent: false, onlySelf: true });
    this.inputValue().markAsTouched();
  }

  validateMinAndMax(value: number): number {
    if (this.inputValue().hasError('max')) {
      return this.max() ??  this.inputValue().getError('max').max;
    }
    if (this.inputValue().hasError('min')) {
      return this.min() ?? this.inputValue().getError('min').min;
    }
    return value;
  }

  onBlur() {
    this.inputValue().markAsTouched();
    if (this.inputValue().value === null && (this.inputValue().dirty || this.inputValue().touched)) {
      
      this.inputValue().setValue(this.min() ?? 0, { emitEvent: false, onlySelf: true });
      this.inputValue().markAsDirty();
    }
  }
}
