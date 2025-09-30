export type sidebarItem = {
  id: number,
  step: string,
  description: string,
  path: string
}

export type storeContextType = {
  currentStep: number,
  setCurrentStep: (step: number) => void
}