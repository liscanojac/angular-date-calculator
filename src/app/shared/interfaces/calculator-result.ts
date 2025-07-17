import { DateDifferenceObject, DateOptions, TimeTravelOptionsBase } from "../services/date-calculator/src/interfaces/date-calculator";
import { CalculatorMode } from "./radio-group";

export interface CalculatorResult {
  startDate: string,
  endDate: string,
  mode: CalculatorMode,
  goingFuture: boolean,
  dateTravelOptions: TimeTravelOptionsBase,
  dateDifference: DateDifferenceObject,
}
