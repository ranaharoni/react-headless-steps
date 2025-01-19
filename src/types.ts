import type { ReactNode } from "react"

export interface StepProps {
  children: ReactNode
  id?: string
  title?: string
  [prop: string]: any
}

export interface UseStepsResult {
  stepsProps: Omit<StepProps, "children">[]
  activeStep: number
  isFirst: boolean
  isLast: boolean
  totalSteps: number
  toNext: () => void
  toPrev: () => void
  toIndex: (index: number) => void
  toId: (id: string) => void
}
