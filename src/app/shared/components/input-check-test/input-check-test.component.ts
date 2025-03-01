import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-check-test',
  imports: [FormsModule],
  templateUrl: './input-check-test.component.html',
  styleUrl: './input-check-test.component.css'
})
export class InputCheckTestComponent {
  label = input<string>()
  inputModel = input.required<boolean>()
  inputChange = output<boolean>()
}
