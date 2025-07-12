import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-mode-selector',
  imports: [MatSlideToggleModule, FormsModule],
  templateUrl: './mode-selector.component.html',
  styleUrl: './mode-selector.component.css'
})
export class ModeSelectorComponent {
  modeInput = input.required<boolean>()
  label = input.required<string>()
  changeMode = output<boolean>()
}
