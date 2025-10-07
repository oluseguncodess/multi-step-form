import { useEffect } from 'react';
import thankYou from '../../assets/images/icon-thank-you.svg';
import { useNavigate } from 'react-router-dom';

export default function ConfirmationPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='w-15 h-15 mb-3 md:w-22 md:h-22'>
        <img src={thankYou} alt='thank-you' className='w-full h-full' />
      </div>
      <h1 className='text-primary-blue-950 text-2xl font-bold md:text-[2.05rem] md:tracking-wide'>
        Thank you!
      </h1>
      <p className='text-center text-gray-400 w-full max-w-[300px] md:max-w-full'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
