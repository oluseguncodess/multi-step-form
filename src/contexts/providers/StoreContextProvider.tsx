import { useState, type PropsWithChildren } from 'react';
import { StoreContext } from '../store/store';

export default function StoreContextProvider({ children }: PropsWithChildren) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <StoreContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StoreContext.Provider>
  );
}
