import { useState, type PropsWithChildren } from 'react';
import { StoreContext } from '../store/store';
import { type PersonalInfo } from '../../types/types';

export default function StoreContextProvider({ children }: PropsWithChildren) {
  const [currentStep, setCurrentStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(
    {} as PersonalInfo
  );

  // () => {
  //   const savedStep = localStorage.getItem('formCurrentStep');
  //   return savedStep ? parseInt(savedStep, 10) : 0;
  // }

  // useEffect(() => {
  //   localStorage.setItem('formCurrentStep', currentStep.toString());
  // }, [currentStep]);

  return (
    <StoreContext.Provider
      value={{ currentStep, setCurrentStep, personalInfo, setPersonalInfo }}
    >
      {children}
    </StoreContext.Provider>
  );
}
