import { Component, input, model } from '@angular/core';
import { TimeSliderComponent } from "../time-slider/time-slider.component";
import { NumberInputComponent } from "../number-input/number-input.component";
import { FormControl } from '@angular/forms';
import { TimeTravelOptions } from '../../interfaces/time-travel-options';

@Component({
  selector: 'app-time-travel-panel',
  imports: [TimeSliderComponent, NumberInputComponent],
  templateUrl: './time-travel-panel.component.html',
  styleUrl: './time-travel-panel.component.css'
})
export class TimeTravelPanelComponent {

  timeTravelDirection = model.required<boolean>();
  inputNumber = input.required<FormControl<number | null>>();
  inputLimits = input<TimeTravelOptions>();
  

}
