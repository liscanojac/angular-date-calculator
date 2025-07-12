export type RadioGroup = Array<RadioOption>

export type CalculatorMode = 'date-travel' | 'date-difference'

interface RadioOption {
  label: string,
  value: CalculatorMode
}