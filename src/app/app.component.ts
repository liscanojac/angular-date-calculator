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
import { DateDifferenceObject, DateOptions, TimeTravelOptions, TimeTravelOptionsBase } from './shared/services/date-calculator/src/interfaces/date-calculator';
import { dateCalculator } from './shared/services/dateCalculatorInstance';
import { OptionsCheckboxComponent } from './shared/components/options-checkbox/options-checkbox.component';
import { CheckboxOptions } from './shared/interfaces/checkbox-options';
import { CalculatorDisplayComponent } from './shared/components/calculator-display/calculator-display.component';
import { ModeSelectorRadioComponent } from './shared/components/mode-selector-radio/mode-selector-radio.component';
import { CalculatorMode, RadioGroup } from './shared/interfaces/radio-group';
import { TimeTravelPanelComponent } from './shared/components/time-travel-panel/time-travel-panel.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTravelOptions, TimeTravelOptionLimits } from './shared/interfaces/time-travel-options';
import { JsonPipe } from '@angular/common';
import { CalculatorResult } from './shared/interfaces/calculator-result';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogoComponent, InputTextTestComponent, InputCheckTestComponent, TestSlidePanelComponent, TestChheckboxPanelComponent, DatepickerComponent, CalculatorButtonComponent, OptionsCheckboxComponent, CalculatorDisplayComponent, ModeSelectorRadioComponent, TimeTravelPanelComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'date-calculator-angular';
  testInputText = 'test'
  testInputCheck = false
  dateInputLabel = {
    start: {
      placeholder: 'Start Date'
    },
    end: {
      placeholder: 'End Date'
    }
  }
  startDate: Date | undefined = undefined;
  endDate: Date | undefined = undefined;
  timeDifference: DateDifferenceObject = {
    y_m_d: '',
    m_d: '',
    w_d: '',
    d: ''
  }
  calculatorMode: CalculatorMode = 'date-difference'
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
  goingFuture = true;
  maxTimeInputValue = 1000
  testTravelledDate = ''

  result: CalculatorResult = {
    startDate: '',
    endDate: '',
    goingFuture: this.goingFuture,
    mode: this.calculatorMode,
    dateTravelOptions: {
      years: 0,
      months: 0,
      weeks: 0,
      days: 0,
    },
    dateDifference: {
      y_m_d: '',
      m_d: '',
      d: '',
      w_d: '',
    }
  }

  testMaxValue = 10
  testNumberInput = new FormControl<string>('0', [Validators.max(100), Validators.min(-100)]);
  dateTravelOptions = new FormGroup<DateTravelOptions>({
    years: new FormControl<number>(0, { 
      nonNullable: true,
      validators: [Validators.min(0), Validators.max(this.maxTimeInputValue)]
    }),
    months: new FormControl<number>(0, { 
      nonNullable: true,
      validators: [Validators.min(0), Validators.max(this.maxTimeInputValue)]
    }),
    weeks: new FormControl<number>(0, { 
      nonNullable: true,
      validators: [Validators.min(0), Validators.max(this.maxTimeInputValue)]
    }),
    days: new FormControl<number>(0, { 
      nonNullable: true,
      validators: [Validators.min(0), Validators.max(this.maxTimeInputValue)]
    })
  });

  inputLimits: TimeTravelOptionLimits = {
    years: {
      max: this.maxTimeInputValue,
      min: 0,
    },
    months: {
      max: this.maxTimeInputValue,
      min: 0,
    },
    weeks: {
      max: this.maxTimeInputValue,
      min: 0,
    },
    days: {
      max: this.maxTimeInputValue,
      min: 0,
    }
  }
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
      y_m_d: this.dateDifferenceOptions['y_m_d'].value,
      m_d: this.dateDifferenceOptions['m_d'].value,
      w_d: this.dateDifferenceOptions['w_d'].value,
      d: this.dateDifferenceOptions['d'].value,
    }
    return dateOptions
  }

  calculatorBtnEnabled(): boolean {
    if (this.calculatorMode === 'date-travel') {
      return !!this.startDate && this.dateDifferenceOptionSelected() && this.dateTravelOptionSelected();
    }
    return !!this.startDate && !!this.endDate && this.dateDifferenceOptionSelected();
  }

  dateDifferenceOptionSelected(): boolean {
    for (const key in this.dateDifferenceOptions) {
      if (this.dateDifferenceOptions[key].value) return true
    }
    return false
  }

  dateTravelOptionSelected(): boolean {
    for (const option in this.dateTravelOptions.controls) {
      const controlOption = this.dateTravelOptions.get(option);
      if (!!controlOption?.value) {
        return true;
      };
    }
    return false;
  }

  handleTextInputChange(newInput: string) {
    this.testInputText = newInput
  }

  handleInputCheckChange(newVal: boolean) {
    this.testInputCheck = newVal
  }
  
  private getTimeTravelOptions(): TimeTravelOptionsBase {
    return {
      years: this.dateTravelOptions.get('years')?.value ?? 0,
      months: this.dateTravelOptions.get('months')?.value ?? 0,
      weeks: this.dateTravelOptions.get('weeks')?.value ?? 0,
      days: this.dateTravelOptions.get('days')?.value ?? 0,
    };
  }

  calculatorModeHandler(newMode: CalculatorMode) {
    this.calculatorMode = newMode;
    this.resetValues();
  }

  calculate() {
    const startDate = this.startDate;
    const endDate = this.endDate;

    if (this.calculatorBtnEnabled() && startDate) {
      this.result.mode = this.calculatorMode;
      this.result.startDate = dateCalculator.formatDateToDisplay(startDate);
      if (this.calculatorMode === 'date-travel') {

        this.result.dateTravelOptions = this.getTimeTravelOptions();
        const travelledDate = dateCalculator.getTimeTravelDate(startDate, {
          ...this.result.dateTravelOptions,
          past: !this.goingFuture
        });
        this.testTravelledDate = travelledDate;
        this.result.endDate = dateCalculator.formatDateToDisplay(travelledDate);
        this.result.goingFuture = this.goingFuture;
      }
      if (endDate) {
        this.result.endDate = dateCalculator.formatDateToDisplay(endDate);
        this.timeDifference = dateCalculator.getTimeDifference(startDate, endDate, this.getDateOptions())
        this.result.dateDifference = this.timeDifference;
      }
    }
  }

  private resetValues() {
    this.startDate = undefined;
    this.endDate = undefined;
    this.dateDifferenceOptions = {
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
    };
    this.dateTravelOptions.reset();
    this.timeDifference = {
      y_m_d: '',
      m_d: '',
      w_d: '',
      d: ''
    };
    this.testTravelledDate = '';
    this.result = {
      startDate: '',
      endDate: '',
      mode: this.calculatorMode,
      goingFuture: true,
      dateTravelOptions: {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
      },
      dateDifference: {
        y_m_d: '',
        m_d: '',
        w_d: '',
        d: ''
      }
    }
  }
}
