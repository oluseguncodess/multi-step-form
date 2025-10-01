import { useLocation } from 'react-router-dom';
import type { sidebarItem } from '../../types/types';

export default function SidebarItem({
  id,
  step,
  description,
  path,
}: sidebarItem) {
  const { pathname } = useLocation();

  const classes = path === pathname ? 'bg-primary-blue-300 text-black' : '';
  return (
    <div className='flex md:gap-4 md:justify-start text-white md:h-[35px]'>
      <div
        className={`flex justify-center items-center w-[35px] h-[35px] border-1 border-white rounded-full ${classes}`}
      >
        <span>{id}</span>
      </div>
      <div className='hidden md:flex flex-col h-full uppercase'>
        <span className='text-[0.8rem] font-[200] opacity-70'>{step}</span>
        <span className='font-bold text-[0.85rem] tracking-wider'>
          {description}
        </span>
      </div>
    </div>
  );
}
