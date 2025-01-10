import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatepickerLabel } from '../../interfaces/datepicker';
const defaultMinDate = new Date(2000, 0, 1)
const defaultMaxDate = new Date(defaultMinDate.getUTCFullYear() + 10, defaultMinDate.getUTCMonth(), defaultMinDate.getUTCDate())

@Component({
  selector: 'app-datepicker',
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {
  dateInput = input.required<Date | undefined>()
  inputLabel = input<DatepickerLabel>()
  minDate = input<Date>()
  maxDate = input<Date>()

  updateDateInput = output<Date>()
  
  label: DatepickerLabel = {
    placeholder: 'Choose a date',
    hint: 'DD/MM/YYYY',
    showHint: true
  }
  min: Date = defaultMinDate
  max: Date = defaultMaxDate
  ngOnInit() {
    this.label = {...this.label, ...this.inputLabel()};
    this.min = this.minDate() ?? this.min
    this.max = this.maxDate() ?? this.max
  }
}
