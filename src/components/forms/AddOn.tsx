import type { UseFormRegister } from 'react-hook-form';
import type { AddOnFormData } from '../../types/types';
import { useStoreContext } from '../../contexts/hooks/useStoreContext';

type addOnProps = {
  name: keyof AddOnFormData;
  title: string;
  description: string;
  price: number;
  duration: string;
  register: UseFormRegister<AddOnFormData>;
};

export default function AddOn({
  title,
  description,
  price,
  duration,
  register,
  name,
}: addOnProps) {
  const { selectedAddOns, setSelectedAddOns } = useStoreContext();
  return (
    <label className='group flex items-center cursor-pointer relative'>
      <input
        type='checkbox'
        className='sr-only peer'
        {...register(name, {
          onChange: (e) => {
            setSelectedAddOns({ ...selectedAddOns, [name]: e.target.checked });
          },
        })}
      />
      <div
        className='w-full p-4 md:py-4 md:px-5 border border-gray-300 rounded-[8px] 
                  peer-checked:border-purple-800 peer-checked:bg-purple-50'
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4 md:gap-6'>
            <div
              className='w-5 h-5 border-1 border-gray-300 rounded 
                      group-has-[:checked]:bg-purplee-600 
                      group-has-[:checked]:border-purplee-600
                      flex items-center justify-center'
            >
              <svg
                className='w-3 h-3 text-white hidden 
                        group-has-[:checked]:block'
                viewBox='0 0 12 10'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              >
                <polyline points='1.5 6 4.5 9 10.5 1'></polyline>
              </svg>
            </div>
            <div className='flex flex-col md:gap-0.5'>
              <h3 className='text-primary-blue-950 font-[500] text-[0.95rem] md:text-base'>
                {title}
              </h3>
              <span className='text-[0.85rem] text-gray-400 md:font-[400] font-[300] md:text-[0.9rem]'>
                {description}
              </span>
            </div>
          </div>
          <span className='text-purplee-600 text-sm font-[400]'>
            +${price}/{duration}
          </span>
        </div>
      </div>
    </label>
  );
}
