import { Component, input, output } from '@angular/core';
import { MatRadioModule, MatRadioChange } from '@angular/material/radio';
import { RadioGroup } from '../../interfaces/radio-group';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mode-selector-radio',
  imports: [MatRadioModule, FormsModule],
  templateUrl: './mode-selector-radio.component.html',
  styleUrl: './mode-selector-radio.component.css'
})
export class ModeSelectorRadioComponent {
  options = input.required<RadioGroup>()
  radioOptionChanged = output<string>()
  selectedOption = input.required<string>()

  onSelectionChange(event: MatRadioChange): void {
    this.radioOptionChanged.emit(event.value)
  }
}
