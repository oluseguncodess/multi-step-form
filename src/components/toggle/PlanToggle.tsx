import { useStoreContext } from '../../contexts/hooks/useStoreContext';

export default function PlanToggle() {
  const { toggleSubscription, setToggleSubscription } = useStoreContext();
  const isYearly = toggleSubscription === 'yearly';

  const handleToggle = () => {
    setToggleSubscription(isYearly ? 'monthly' : 'yearly');
  };

  return (
    <div className='flex items-center justify-center gap-6 bg-neutral-magnolia p-4 rounded-lg bg-bluee-50'>
      <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-primary-blue-950' : 'text-gray-400'}`}>
        Monthly
      </span>

      <label htmlFor='mode-toggle' className='relative inline-block cursor-pointer'>
        <input
          type='checkbox'
          id='mode-toggle'
          className='sr-only'
          checked={isYearly}
          onChange={handleToggle}
        />

        <div className='block w-[40px] h-[20px] rounded-full bg-primary-blue-950 transition-colors duration-300 relative'>
          <span 
            className={`absolute top-[3.5px] left-[3px] w-[13px] h-[13px] rounded-full bg-white transition-all duration-300 ${isYearly ? 'translate-x-[21px]' : ''}`}
          ></span>
        </div>
      </label>

      <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-primary-blue-950' : 'text-gray-400'}`}>
        Yearly
      </span>
    </div>
  );
}
