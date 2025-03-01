import { Component, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text-test',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-text-test.component.html',
  styleUrl: './input-text-test.component.css'
})
export class InputTextTestComponent {
  inputValue = input.required<string>()
  inputControl = new FormControl()
  inputChange = output<string>()
  
  ngOnInit() {
    this.inputControl.setValue(this.inputValue())
    this.inputControl.valueChanges.subscribe((value: string) => {
        this.inputChange.emit(value)
      }
    )
  }
}
