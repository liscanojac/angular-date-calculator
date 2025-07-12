import { FormControl } from "@angular/forms";
interface TimeOption {
  min: number,
  max: number,
}

export type TimeTravelKey = 'years' | 'months' | 'weeks' | 'days'

export type TimeTravelOptions = {
  [key in TimeTravelKey]: TimeOption
}


export type DateTravelOptions = {
  [key in TimeTravelKey]: FormControl<number | null>
}