import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-time-slider',
  imports: [MatSlideToggle, FormsModule],
  templateUrl: './time-slider.component.html',
  styleUrl: './time-slider.component.css'
})
export class TimeSliderComponent {
  timeDirection = model.required<boolean>();

  sliderLabelTest(): string {
    return `${ this.timeDirection() ? 'Add to' : 'Subtract from'} a date`
  }
}
