export interface CalculatorResult {
  startDate: string,
  endDate: string,
  goingFuture: boolean,
  dateTravelOptions: {
    years: number,
    months: number,
    weeks: number,
    days: number,
  },
}
