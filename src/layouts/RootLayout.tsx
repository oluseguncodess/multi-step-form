import { Navigate, Outlet, useLocation} from 'react-router-dom';
import FormHeadings from '../components/forms/FormHeadings';
import FormNavigation from '../components/navigation/FormNavigation';
import Sidebar from '../components/sidebar/Sidebar';
import { useStoreContext } from '../contexts/hooks/useStoreContext';

export default function RootLayout() {
  const {pathname} = useLocation()
  const { personalInfo, selectedPlan, summary } = useStoreContext();

  const stepMap: Record<string, number> = {
    '/': 0,
    '/select-plan': 1,
    '/add-ons': 2,
    '/summary': 3,
    '/confirmation': 4,
  };

  // Derive currentStep from pathname
  const currentStep = stepMap[pathname] ?? 0;

  // Check if user has completed previous steps
  const hasPersonalInfo = personalInfo && personalInfo.name && personalInfo.email && personalInfo.phone;
  const hasSelectedPlan = selectedPlan && selectedPlan.data;
  const hasSummary = summary && summary.length > 0;

  // Redirect logic based on actual form completion
  if (pathname === '/select-plan' && !hasPersonalInfo) {
    return <Navigate to="/" replace />
  }
  if (pathname === '/add-ons' && (!hasPersonalInfo || !hasSelectedPlan)) {
    return <Navigate to="/" replace />
  }
  if (pathname === '/summary' && (!hasPersonalInfo || !hasSelectedPlan)) {
    return <Navigate to="/" replace />
  }
  if (pathname === '/confirmation' && (!hasPersonalInfo || !hasSelectedPlan || !hasSummary)) {
    return <Navigate to="/" replace />
  }

  return (
    <div className='w-full h-screen bg-body-background md:flex md:justify-center md:items-center overscroll-none relative'>
      <div className='md:w-[950px] bg-white md:h-[600px] md:p-4 md:rounded-[5px] md:flex md:justify-between relative'>
        <Sidebar />
        <div className={`bg-white w-[95%] absolute z-10 top-25 left-1/2 transform -translate-x-1/2 md:static md:max-w-[550px] rounded-[10px] md:-translate-x-0 pt-7 px-6 pb-8 md:pt-10 ${pathname === '/confirmation' ? 'h-[400px] md:h-full flex justify-center items-center' : ''}`}>
          <div className={`w-full flex flex-col gap-5 md:gap-9`}>
            {currentStep < 4 && <FormHeadings />}
            <Outlet />
          </div>
          <div className='w-full max-w-[450px] absolute bottom-5 hidden md:block'>
            <FormNavigation />
          </div>
        </div>
      </div>
     {currentStep < 4 && <div className='absolute bottom-0 w-full p-3 bg-white md:hidden'>
        <FormNavigation />
      </div>}
    </div>
  );
}
