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

  inputValue = input.required<FormControl<string | null>>();
  max =  input<number>();
  min = input<number>();
  onlyPositives = input<boolean>(false);
  decimalsAllowed = input<boolean>(true);

  validateInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;

    console.log('Original value:', value);
    value = this.regexValidation(value);
    console.log('After regex validation:', value);

    if (!this.onlyPositives()) value = this.negativeValidator(value);
    if (this.decimalsAllowed()) value = this.decimalValidator(value);

    if (this.inputValue().invalid) {
      value = this.validateMinAndMax(value);
    }
    const newValue = Number(value);
    console.log('Before being emitted', value)
    this.inputValue().setValue(value, { emitEvent: false, onlySelf: true });

    this.inputValue().markAsTouched();
  }

  regexValidation(valueInput: string): string {
    const regexValidator = {
      non_negative_decimal: /[^0-9]/g,
      non_decimal: /[^0-9-]/g,
      non_negative: /[^0-9,.]/g,
      default: /[^0-9,.-]/g
    };

    if (this.onlyPositives() && !this.decimalsAllowed()) {
      return valueInput.replace(regexValidator.non_negative_decimal, '');
    }
    if (this.onlyPositives()) {
      return valueInput.replace(regexValidator.non_negative, '');
    }
    if (!this.decimalsAllowed()) {
      return valueInput.replace(regexValidator.non_decimal, '');
    }

    return valueInput.replace(regexValidator.default, '');
  }

  decimalValidator(value: string): string {
    value = value.replace(',', '.');

    const decimalParts = value.split('.');

    if (decimalParts.length > 2) {
      decimalParts.pop();
      return decimalParts.join('');
    }

    return value;
  }

  negativeValidator(value: string): string {
    if (value.includes('-')) {
      const minusParts = value.split('-');

      if(minusParts[0] !== '' || minusParts.length > 2) {
        minusParts.pop();
        return  minusParts.join('-');
      }
    }
    return value
  }

  validateMinAndMax(value: string): string {
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
    if (this.inputValue().value === '' && (this.inputValue().dirty || this.inputValue().touched)) {
      
      this.inputValue().setValue('0', { emitEvent: false, onlySelf: true });
      this.inputValue().markAsDirty();
    }
  }
}
