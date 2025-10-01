import { useLocation, Link } from 'react-router-dom';

export default function FormNavigation() {
  const { pathname } = useLocation();

  const classes = pathname === '/' ? 'justify-end' : 'justify-between';
  

  return (
    <div className={`w-full flex ${classes} items-center text-[0.9rem]`}>
      {pathname !== '/' && (
        <Link to='..'>
          <button className='text-gray-500'>Go back</button>
        </Link>
      )}

        <button className='w-[110px] h-[45px] py-1 px-2 md:p-4 bg-primary-blue-950 flex justify-center items-center text-white rounded-[5px]' form={pathname} type='submit'>
          Next Step
        </button>
  
    </div>
  );
}
