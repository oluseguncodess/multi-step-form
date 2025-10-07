import { useState, type PropsWithChildren } from 'react';
import { StoreContext } from '../store/store';
import {
  type Summary,
  type PersonalInfo,
  type FormFields,
  type AddOnFormData,
} from '../../types/types';

export default function StoreContextProvider({ children }: PropsWithChildren) {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(
    {} as PersonalInfo
  );
  const [selectedPlan, setSelectedPlan] = useState({} as FormFields);
  const [selectedAddOns, setSelectedAddOns] = useState({} as AddOnFormData);
  const [toggleSubscription, setToggleSubscription] = useState<
    'monthly' | 'yearly'
  >('monthly');
  const [summary, setSummary] = useState<Summary[]>([]);

  return (
    <StoreContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        toggleSubscription,
        setToggleSubscription,
        summary,
        setSummary,
        selectedPlan,
        setSelectedPlan,
        selectedAddOns,
        setSelectedAddOns,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
