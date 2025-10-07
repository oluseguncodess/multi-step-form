import { useLocation, useNavigate } from 'react-router-dom';

export default function FormNavigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const classes = pathname === '/' ? 'justify-end' : 'justify-between';

  return (
    <div className={`w-full flex ${classes} items-center text-[0.9rem]`}>
      {pathname !== '/' && (
        <button className='text-gray-500' onClick={() => navigate(-1)}>
          Go back
        </button>
      )}

      <button
        className={`w-[110px] h-[45px] py-1 px-2 md:p-4 ${pathname === '/summary' ? 'bg-purplee-600 hover:bg-purplee-600/60' : 'bg-primary-blue-950 hover:bg-primary-blue-950/90'}  flex justify-center items-center text-white rounded-[5px] cursor-pointer`}
        form={pathname}
        type='submit'
      >
        {pathname === '/summary' ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
}
