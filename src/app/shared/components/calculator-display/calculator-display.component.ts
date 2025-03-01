import { Component, input } from '@angular/core';
import { DateDifferenceObject, DateOptionKey, DateOptions } from '../../services/date-calculator/src/interfaces/date-calculator';

@Component({
  selector: 'app-calculator-display',
  imports: [],
  templateUrl: './calculator-display.component.html',
  styleUrl: './calculator-display.component.css'
})
export class CalculatorDisplayComponent {

  dateDifference = input.required<DateDifferenceObject>()
  dateOptions = input.required<DateOptions>()
  dateDifferenceKeys: Array<DateOptionKey> = []

  ngOnInit() {
    this.dateDifferenceKeys = Object.keys(this.dateDifference()) as Array<DateOptionKey>
  }
}
