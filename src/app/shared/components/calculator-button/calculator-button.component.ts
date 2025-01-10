import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calculator-button',
  imports: [MatButtonModule],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.css'
})
export class CalculatorButtonComponent {
  btnLabel = input<string>('Calculate')
  disabled = input<boolean>()
  clickAction = output()
}
