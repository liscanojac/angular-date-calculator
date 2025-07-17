import { Component, input } from '@angular/core';
import { DateDifferenceObject, DateOptionKey, DateOptions } from '../../services/date-calculator/src/interfaces/date-calculator';
import { CalculatorResult } from '../../interfaces/calculator-result';
import { dateCalculator } from '../../services/dateCalculatorInstance';

@Component({
  selector: 'app-calculator-display',
  imports: [],
  templateUrl: './calculator-display.component.html',
  styleUrl: './calculator-display.component.css'
})
export class CalculatorDisplayComponent {

  result = input.required<CalculatorResult>();
  dateDifferenceOptions: Array<DateOptionKey> = []

  ngOnInit() {
    this.dateDifferenceOptions = Object.keys(this.result().dateDifference) as Array<DateOptionKey>
  }

  getDateDifferenceHeader(): string {
    return `From ${this.result().startDate} to ${this.result().endDate} are:`
  }

  getDateTravelHeader(): string {
    return `${this.result().endDate} is the date ${dateCalculator.formatTimeTravelOptions(this.result().dateTravelOptions)} ${this.result().goingFuture ? 'after' : 'before'} ${this.result().startDate}`
  }

  getResultHeader() {
    return this.result().mode === 'date-difference' ? this.getDateDifferenceHeader() : this.getDateTravelHeader();
  }
}
