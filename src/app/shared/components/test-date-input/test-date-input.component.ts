import { Component, input, output } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DateLabels } from '../../interfaces/multi-toggle-options';
const defaultMinDate = new Date(2000, 0, 1)
const defaultMaxDate = new Date(defaultMinDate.getUTCFullYear() + 10, defaultMinDate.getUTCMonth(), defaultMinDate.getUTCDate())

@Component({
  selector: 'app-test-date-input',
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'},provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule],
  templateUrl: './test-date-input.component.html',
  styleUrl: './test-date-input.component.css'
})
export class TestDateInputComponent {
  dateInput = input.required<Date | undefined>()
  updateDateInput = output<Date>()
  inputLabel = input<DateLabels>();
  minDate = input<string>('')
  minDate2 = input<Date>(defaultMinDate)
  maxDate = input<string>('')
  min: Date = defaultMinDate
  max: Date = defaultMaxDate
  label: DateLabels = {
    placeholder: 'Choose a date',
    hint: 'DD/MM/YYYY',
    showHint: true
  }

  ngOnInit() {
    this.label = {...this.label, ...this.inputLabel()};
    this.min = this.minDate() ? this.getDate(this.minDate()) : this.min
    this.max = this.maxDate() ? this.getDate(this.maxDate()) : this.max
  }

  getDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }
}
