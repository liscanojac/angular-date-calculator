import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './shared/components/logo/logo.component';
import { InputTextTestComponent } from './shared/components/input-text-test/input-text-test.component';
import { InputCheckTestComponent } from './shared/components/input-check-test/input-check-test.component';
import { DateLabels, MultiToggleOptions } from './shared/interfaces/multi-toggle-options';
import { TestSlidePanelComponent } from './shared/components/test-slide-panel/test-slide-panel.component';
import { TestChheckboxPanelComponent } from './shared/components/test-chheckbox-panel/test-chheckbox-panel.component';
import { DatepickerComponent } from './shared/components/datepicker/datepicker.component';
import { CalculatorButtonComponent } from './shared/components/calculator-button/calculator-button.component';
import { DateDifferenceObject, DateOptions } from './shared/services/date-calculator/src/interfaces/date-calculator';
import { dateCalculator } from './shared/services/dateCalculatorInstance';
import { OptionsCheckboxComponent } from './shared/components/options-checkbox/options-checkbox.component';
import { CheckboxOptions } from './shared/interfaces/checkbox-options';
import { CalculatorDisplayComponent } from './shared/components/calculator-display/calculator-display.component';
import { ModeSelectorRadioComponent } from './shared/components/mode-selector-radio/mode-selector-radio.component';
import { RadioGroup } from './shared/interfaces/radio-group';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoComponent, InputTextTestComponent, InputCheckTestComponent, TestSlidePanelComponent, TestChheckboxPanelComponent, DatepickerComponent, CalculatorButtonComponent, OptionsCheckboxComponent, CalculatorDisplayComponent, ModeSelectorRadioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'date-calculator-angular';
  testInputText = 'test'
  testInputCheck = false
  startDate: Date | undefined = undefined;
  endDate: Date | undefined = undefined;
  timeDifference: DateDifferenceObject = {
    y_m_d: '',
    m_d: '',
    w_d: '',
    d: ''
  }
  calculatorMode = 'date-difference'
  modeOptions: RadioGroup = [
    {
      label: 'Date Difference',
      value: 'date-difference'
    },
    {
      label: 'Add/Subtract from a Date',
      value: 'date-travel'
    }
  ]

  setLimitDates(date: Date | undefined, n: number): Date | undefined {
    return date ? dateCalculator.addDays(date, n, false) : date
  }

  addDaysToDate(date: Date | undefined, n: number): Date | undefined {
    return date ? dateCalculator.addDays(date, n) : date
  }

  dateDifferenceOptions: CheckboxOptions = {
    y_m_d: {
      value: true,
      label: 'Years, Months, Days'
    },
    m_d: {
      value: true,
      label: 'Months and Days'
    },
    w_d: {
      value: true,
      label: 'Weeks and Days'
    },
    d: {
      value: true,
      label: 'Days'
    },
  }

  getDateOptions(): DateOptions {
    const dateOptions: DateOptions = {
      y_m_d: this.dateDifferenceOptions['y_m_d']['value'],
      m_d: this.dateDifferenceOptions['m_d']['value'],
      w_d: this.dateDifferenceOptions['w_d']['value'],
      d: this.dateDifferenceOptions['d']['value'],
    }
    return dateOptions
  }

  calculatorBtnEnabled(): boolean {
    return !!this.startDate && !!this.endDate && this.dateDifferenceOptionSelected()
  }

  dateDifferenceOptionSelected(): boolean {
    for (const key in this.dateDifferenceOptions) {
      if (this.dateDifferenceOptions[key].value) return true
    }
    return false
  }

  handleTextInputChange(newInput: string) {
    this.testInputText = newInput
  }

  handleInputCheckChange(newVal: boolean) {
    this.testInputCheck = newVal
  }
  testFunct() {
    if (this.startDate && this.endDate) {
      this.timeDifference = dateCalculator.getTimeDifference(this.startDate, this.endDate, this.getDateOptions())
    }
  }
}
