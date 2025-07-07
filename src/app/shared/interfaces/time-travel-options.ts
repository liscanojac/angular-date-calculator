
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
