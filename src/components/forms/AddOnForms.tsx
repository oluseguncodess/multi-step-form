import { useForm } from 'react-hook-form';
import { useStoreContext } from '../../contexts/hooks/useStoreContext';
import { DATA } from '../../lib/data';
import AddOn from './AddOn';

export default function AddOnForms() {
  const { register } = useForm();
  const { toggleSubscription } = useStoreContext();
  return (
    <form
      className='w-full md:max-w-[450px] flex flex-col gap-4'
      id='/add-ons'
      noValidate
    >
      {DATA[0].addon.map((addon, index) => (
        <AddOn
          key={index}
          name={addon.name}
          title={addon.title}
          description={addon.description}
          duration={toggleSubscription === 'monthly' ? 'mo' : 'yr'}
          price={
            toggleSubscription === 'monthly'
              ? addon.price.monthly
              : addon.price.yearly
          }
          register={register}
        />
      ))}
    </form>
  );
}
