import FormHeadings from '../components/forms/FormHeadings';
import PersonalInfoForm from '../components/forms/PersonalInfoForm';
import Sidebar from '../components/sidebar/Sidebar';

export default function RootLayout() {
  return (
    <div className='w-full h-screen bg-body-background md:flex md:justify-center md:items-center overscroll-none relative'>
      <div className='md:w-[950px] bg-white md:h-[600px] md:p-4 md:rounded-[5p] md:flex md:justify-between'>
        <Sidebar />
        <div className='bg-white w-[95%] absolute z-10 top-25 left-1/2 transform -translate-x-1/2 md:static md:max-w-[550px] rounded-[10px] md:-translate-x-0 pt-7 px-6 pb-8 md:pt-10'>
          <div className='w-full md:max-w-[450px] flex flex-col gap-5 md:gap-10'>
            <FormHeadings/>
            <PersonalInfoForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
