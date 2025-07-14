import { Component, input, model } from '@angular/core';
import { TimeSliderComponent } from "../time-slider/time-slider.component";
import { FormControl, FormGroup } from '@angular/forms';
import { DateTravelOptions, TimeTravelKey, TimeTravelOptionLimits } from '../../interfaces/time-travel-options';
import { TimeInputComponent } from "../time-input/time-input.component";

@Component({
  selector: 'app-time-travel-panel',
  imports: [TimeSliderComponent, TimeInputComponent],
  templateUrl: './time-travel-panel.component.html',
  styleUrl: './time-travel-panel.component.css'
})
export class TimeTravelPanelComponent {

  timeTravelDirection = model.required<boolean>();
  inputNumber = input.required<FormControl<string | null>>();
  timeTravelOptions = input<TimeTravelOptionLimits>();
  timeTravelOptionsModel = input.required<FormGroup<DateTravelOptions>>();
  
  timeTravelOptionsFormControls: Array<keyof DateTravelOptions> = [];

  ngOnInit() {
    this.timeTravelOptionsFormControls = Object.keys(this.timeTravelOptionsModel().value) as Array<TimeTravelKey>;
  }
}
