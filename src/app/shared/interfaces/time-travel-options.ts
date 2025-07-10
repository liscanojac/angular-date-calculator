import { FormControl } from "@angular/forms";

export interface TimeTravelOptions {
  y: TimeOption,
  m_d: TimeOption,
  w_d: TimeOption,
  d: TimeOption,
}

interface TimeOption {
  min: number,
  max: number,
}

export interface DateTravelOptions {
  y: FormControl<number | null>,
  m_d: FormControl<number | null>,
  w_d: FormControl<number | null>,
  d: FormControl<number | null>,
}