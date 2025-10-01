export type PersonalInfo = {
  name: string,
  email: string,
  phone: string
}

export type sidebarItem = {
  id: number,
  step: string,
  description: string,
  path: string
}

export type storeContextType = {
  personalInfo: PersonalInfo
  setPersonalInfo: (info: PersonalInfo) => void
  currentStep: number,
  setCurrentStep: (step: number) => void
}