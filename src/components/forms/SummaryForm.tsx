import { useForm } from 'react-hook-form';
import { useStoreContext } from '../../contexts/hooks/useStoreContext';
import { useNavigate } from 'react-router-dom';

export default function SummaryForm() {
  const navigate = useNavigate();
  const {
    summary,
    selectedPlan,
    toggleSubscription,
    currentStep,
    setCurrentStep,
  } = useStoreContext();
  const totalPrice = summary.reduce(
    (acc, value) => acc + (value?.price ?? 0),
    0
  );
  const { handleSubmit } = useForm();

  function handleConfirmation() {
    setCurrentStep(currentStep + 1)
    navigate('/confirmation')
  }

  function handleStep() {
    setCurrentStep(currentStep - 2);
    navigate(-2);
  }

  return (
    <>
      <form
        className='w-full md:max-w-[450px] flex flex-col gap-3 p-4 md:p-6 bg-bluee-100 rounded-[8px]'
        id='/summary'
        onSubmit={handleSubmit(handleConfirmation)}
        noValidate
      >
        <div className='flex-col flex gap-3'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
              <h4 className='text-primary-blue-950 font-[500] text-[0.9rem]'>
                {toggleSubscription === 'monthly'
                  ? `${selectedPlan.data}(Monthly)`
                  : `${selectedPlan.data}/(Yearly)`}
              </h4>
              <span
                className='text-gray-400 underline text-[0.95rem] font-[400] hover:cursor-pointer hover:text-purplee-600'
                onClick={handleStep}
              >
                Change
              </span>
            </div>
            <span className='text-primary-blue-950 font-semibold text-[0.93rem]'>
              {toggleSubscription === 'monthly'
                ? `$${selectedPlan.price}/mo`
                : `$${selectedPlan.price}/yr`}
            </span>
          </div>
          <hr className='text-gray-300' />
        </div>
        <div className='flex-col flex gap-3'>
          {summary.slice(1).map((info) => (
            <div className='flex justify-between items-center' key={info.id}>
              <h5 className='text-gray-400 font-[300] text-[0.9rem]'>
                {info.data}
              </h5>
              <span className='text-primary-blue-950 text-[0.93rem]'>
                +${info.price}/{toggleSubscription === 'monthly' ? 'mo' : 'yr'}
              </span>
            </div>
          ))}
        </div>
      </form>
      <div className='bg-white flex justify-between items-center px-4 pt-2 max-w-[450px]'>
        <span className='text-gray-400 font-[300] text-[0.9rem]'>
          Total (per {toggleSubscription === 'monthly' ? 'month' : 'year'})
        </span>
        <span className='text-purplee-600 font-semibold text-[1.05rem] md:text-[1.2rem]'>
          +${totalPrice}/{toggleSubscription === 'monthly' ? 'mo' : 'yr'}
        </span>
      </div>
    </>
  );
}
