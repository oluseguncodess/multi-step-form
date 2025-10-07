import { useForm } from 'react-hook-form';
// import arcade from '../../assets/images/icon-arcade.svg';
import { DATA } from '../../lib/data';
import PlanToggle from '../toggle/PlanToggle';
import { useStoreContext } from '../../contexts/hooks/useStoreContext';
import { useNavigate } from 'react-router-dom';

type FormFields = {
  plan: string;
};

export default function SelectPlanForm() {
  const { toggleSubscription, selectedPlan, setSelectedPlan } =
    useStoreContext();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormFields>({
    defaultValues: { plan: selectedPlan.data },
  });

  function handleFormSubmit(data: FormFields) {
    // get the existing data selected from database
    const existingData = DATA[0].plan.find(
      (plan) => plan.title === data.plan
    );
    const currentPrice =
      toggleSubscription === 'monthly'
        ? existingData?.price.monthly
        : existingData?.price.yearly;
    setSelectedPlan({id: 1, data: data.plan, price: currentPrice})
    navigate('/add-ons');
  }

  return (
    <div className='flex flex-col gap-7 md:max-w-[450px]'>
      <form
        className='w-full flex flex-col md:flex-row gap-3.5 md:justify-between'
        id='/select-plan'
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {DATA.map((data) =>
          data.plan.map((plan) => (
            <div key={plan.id}>
              <label className='cursor-pointer'>
                <input
                  type='radio'
                  value={plan.title}
                  {...register('plan', {
                    required: true,
                    onChange: (e) =>
                      setSelectedPlan({
                        data: e.target.value,
                      }),
                  })}
                  className='sr-only peer' // hidden but functional
                />
                <div className='border-1 border-gray-400 p-4 peer-checked:border-primary-blue-950 peer-checked:bg-bluee-50 flex rounded-[8px] md:w-[140px]'>
                  <div className='flex gap-3 items-center md:items-start md:flex-col md:gap-10'>
                    <div className='w-11 h-11'>
                      <img src={plan.images} alt={plan.title} />
                    </div>
                    <div className='flex flex-col'>
                      <h3 className='text-primary-blue-950 font-[500]'>
                        {plan.title}
                      </h3>
                      <span className='text-sm text-gray-400'>
                        $
                        {toggleSubscription === 'monthly'
                          ? `${plan.price.monthly}/mo`
                          : `${plan.price.yearly}/yr`}
                      </span>
                      {toggleSubscription === 'yearly' && (
                        <span className='text-[0.7rem] text-primary-blue-950'>
                          2 months free
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </label>
            </div>
          ))
        )}
      </form>
      <PlanToggle />
    </div>
  );
}
