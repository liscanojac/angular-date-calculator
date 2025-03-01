export interface MultiToggleOptions {
  [i: string]: MultiToggleOption
}

interface MultiToggleOption {
  label: string,
  value: boolean
}


export interface DateLabels {
  placeholder?: string
  hint?: string
  showHint?: boolean
}