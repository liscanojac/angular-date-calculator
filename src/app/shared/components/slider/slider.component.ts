import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-slider',
  imports: [MatSlideToggle, FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  option = input.required<boolean>();
  label = input<string>('Slide me!');
  sliderChange = output<boolean>();

  sliderChangeHandler(newValue: boolean) {
    this.sliderChange.emit(newValue);
  }
}
