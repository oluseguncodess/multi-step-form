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
export type SelectedPlan = {
  plan: 'Arcane' | 'Advanced' | 'Pro',
  price: number,
  subscription: 'monthly' | 'yearly'
}
  
export type FormFields = {
  id?: number,
  plan: string;
  price?: number
};

export type AddOnForm ={
  id: number,
  addon: string
  price: number
}

export type Summary = FormFields | AddOnForm

export type AddOnFormData = {
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
};

export type storeContextType = {
  personalInfo: PersonalInfo
  setPersonalInfo: (info: PersonalInfo) => void
  currentStep: number,
  setCurrentStep: (step: number) => void
  toggleSubscription: 'monthly' | 'yearly'
  setToggleSubscription: (subscription: 'monthly' | 'yearly') => void
  summary: Summary[],
  setSummary: (summary: Summary[]) => void
  selectedPlan: FormFields
  setSelectedPlan: (plan: FormFields) => void
  selectedAddOns: AddOnFormData
  setSelectedAddOns: (addons: AddOnFormData) => void
}

