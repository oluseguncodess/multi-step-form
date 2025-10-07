import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import AddOnForms from './components/forms/AddOnForms';
import PersonalInfoForm from './components/forms/PersonalInfoForm';
import StoreContextProvider from './contexts/providers/StoreContextProvider';
import SelectPlanForm from './components/forms/SelectPlanForm';
import SummaryForm from './components/forms/SummaryForm';
import ConfirmationPage from './components/confirmation/ConfirmationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <PersonalInfoForm /> },
      { path: 'select-plan', element: <SelectPlanForm /> },
      { path: 'add-ons', element: <AddOnForms /> },
      { path: 'summary', element: <SummaryForm /> },
      { path: '/confirmation', element: <ConfirmationPage /> }
    ],
  },
]);

function App() {
  return (
    <StoreContextProvider>
      <RouterProvider router={router} />
    </StoreContextProvider>
  );
}

export default App;
