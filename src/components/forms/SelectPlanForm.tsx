import { useForm } from 'react-hook-form';
// import arcade from '../../assets/images/icon-arcade.svg';
import { DATA } from '../../lib/data';

export default function SelectPlanForm() {
  const { register } = useForm();
  return (
    <div>
      <form className='w-full flex flex-col md:flex-row gap-3.5'>
        {DATA.map((data) =>
          data.plan.map((plan) => (
            <div key={plan.id}>
              <label className='cursor-pointer'>
                <input
                  type='radio'
                  value={plan.title.toLowerCase()}
                  {...register('plan', { required: true })}
                  className='sr-only peer' // hidden but functional
                />
                <div className='border-1 border-gray-400 p-4 peer-checked:border-primary-blue-950 peer-checked:bg-bluee-50 flex rounded-[8px] md:w-[140px]'>
                  <div className='flex gap-3 items-center md:flex-col md:gap-10'>
                    <div className='w-11 h-11'>
                      <img src={plan.images} alt={plan.title} />
                    </div>
                    <div className='flex flex-col'>
                      <h3 className='text-primary-blue-950 font-[500]'>{plan.title}</h3>
                      <span className='text-sm text-gray-400'>${plan.price.monthly}/mo</span>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          ))
        )}
      </form>
    </div>
  );
}
