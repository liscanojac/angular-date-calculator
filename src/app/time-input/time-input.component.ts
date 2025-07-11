import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-time-input',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './time-input.component.html',
  styleUrl: './time-input.component.css'
})
export class TimeInputComponent {

  inputNumber = input.required<FormControl<number | null>>();
  // if you set an input to be optionally undefined if its not passed a value, then it will take the default you set
  min = input<number>(0);
  max = input<number>(1000);
  inputLabel = input<string>('');

  validateInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;

    value = value.replace(/[^0-9]/g, '');
    if (this.inputNumber().invalid) {
      value = this.validateMinAndMax(value);
    }

    let newValue: number | null = null;
    newValue = (value === '' || value === null) ? 0 : Number(value);
    // is not neccesary
    // inputElement.value = value;
    // Use emitEvent: false to prevent infinite loops if the parent is also listening
    // onlySelf: true ensures only this control is updated, not its parent FormGroup's validity
    // this.inputNumber().setValue(newValue, { emitEvent: false, onlySelf: true });
    this.inputNumber().setValue(newValue, { emitEvent: false });
    this.inputNumber().markAsTouched();
  }

  onBlur() {
    this.inputNumber().markAsTouched();
    if ((this.inputNumber().value === null || this.inputNumber().value === undefined) &&
        (this.inputNumber().dirty || this.inputNumber().touched)) {
        this.clearInput();
    }
  }

  validateMinAndMax(value: string): string {
    if (this.inputNumber().hasError('max')) {
      return  this.inputNumber().getError('max').max;
    }
    if (this.inputNumber().hasError('min')) {
      return this.inputNumber().getError('min').min;
    }
    return value;
  }

  add() {
    const currentValue = this.inputNumber().value || 0;
    const newValue = Math.min(currentValue + 1, this.max())
    this.inputNumber().setValue(newValue, { emitEvent: false });
  }

  remove() {
    const currentValue = this.inputNumber().value || 0;
    const newValue = Math.max(currentValue - 1, this.min());
    this.inputNumber().setValue(newValue, { emitEvent: false });
  }

  clearInput() {
    this.inputNumber().setValue(0, { emitEvent: false });
  }

  inputIsGreaterThanZero(): boolean {
    const currentValue = this.inputNumber().value || 0;
    return currentValue > 0
  }
}
