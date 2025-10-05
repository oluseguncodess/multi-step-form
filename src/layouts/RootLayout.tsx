import { Navigate, Outlet, useLocation} from 'react-router-dom';
import FormHeadings from '../components/forms/FormHeadings';
import FormNavigation from '../components/navigation/FormNavigation';
import Sidebar from '../components/sidebar/Sidebar';
import { useStoreContext } from '../contexts/hooks/useStoreContext';

export default function RootLayout() {
  const {currentStep} = useStoreContext()
  const {pathname} = useLocation()

  const stepMap: Record<string, number> = {
    '/': 0,
    '/select-plan': 1,
    '/add-ons': 2,
    '/summary': 3,
  };

  const stepToPath: Record<number, string> = Object.entries(stepMap).reduce<Record<number, string>>((acc, [path, step]) => {
    acc[step] = path;
    return acc
  }, {})

  const requiredStep = stepMap[pathname] ?? 0;

  if(currentStep < requiredStep) {
    return <Navigate to={stepToPath[currentStep]} replace/>
  }

  return (
    <div className='w-full h-screen bg-body-background md:flex md:justify-center md:items-center overscroll-none relative'>
      <div className='md:w-[950px] bg-white md:h-[600px] md:p-4 md:rounded-[5px] md:flex md:justify-between relative'>
        <Sidebar />
        <div className='bg-white w-[95%] absolute z-10 top-25 left-1/2 transform -translate-x-1/2 md:static md:max-w-[550px] rounded-[10px] md:-translate-x-0 pt-7 px-6 pb-8 md:pt-10'>
          <div className='w-full flex flex-col gap-5 md:gap-9'>
            <FormHeadings />
            <Outlet />
          </div>
          <div className='w-full max-w-[450px] absolute bottom-5 hidden md:block'>
            <FormNavigation />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 w-full p-3 bg-white md:hidden'>
        <FormNavigation />
      </div>
    </div>
  );
}
