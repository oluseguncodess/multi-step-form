import { useLocation } from 'react-router-dom';

const formheadings = [
  {
    id: 1,
    title: 'Personal info',
    description: 'Please provide your name, email address, and phone number.',
    path: '/',
  },
  {
    id: 2,
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
    path: '/select-plan',
  },
  {
    id: 3,
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    path: '/add-ons',
  },
  {
    id: 4,
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.',
    path: '/summary',
  },
];

export default function FormHeadings() {
  const { pathname } = useLocation();
  return (
    <div className=''>
      {formheadings.map((text) => {
        if (text.path === pathname) {
          return (
            <div key={text.id} className='flex flex-col gap-2 w-full'>
              <h1 className='text-2xl md:text-[2.1rem] text-primary-blue-950 font-bold md:font-[600]'>{text.title}</h1>
              <p className='text-[0.95rem] text-grayy-500 font-[300] leading-[1.4rem] tracking-wide'>{text.description}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
