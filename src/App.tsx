import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import AddOnForms from './components/forms/AddOnForms';
import PersonalInfoForm from './components/forms/PersonalInfoForm';
import StoreContextProvider from './contexts/providers/StoreContextProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <PersonalInfoForm /> },
      { path: 'select-plan', element: <AddOnForms /> },
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
