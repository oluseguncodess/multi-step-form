import { useForm } from 'react-hook-form';
import { useStoreContext } from '../../contexts/hooks/useStoreContext';
import { DATA } from '../../lib/data';
import AddOn from './AddOn';
import type { AddOnForm, AddOnFormData } from '../../types/types';

export default function AddOnForms() {
  const {selectedAddOns} = useStoreContext()
  const { register, handleSubmit } = useForm<AddOnFormData>({
    defaultValues: selectedAddOns,
  });
  const { toggleSubscription } = useStoreContext();

  function handleAddonForm(data: AddOnFormData) {
    const selectedAddons = Object.entries(data)
      .filter(([, value]) => value === true)
      .map(([key]) => key);

    const addOnDetails: AddOnForm[] = selectedAddons
      .map((name) => {
        const addOnData = DATA[0].addon.find((item) => item.name === name);

        if (!addOnData) return null;

        return {
          id: addOnData.id,
          addon: addOnData.title,
          price:
            toggleSubscription === 'monthly'
              ? addOnData.price.monthly
              : addOnData.price.yearly,
        };
      })
      .filter(Boolean) as AddOnForm[];

    console.log(addOnDetails);
  }
  return (
    <form
      className='w-full md:max-w-[450px] flex flex-col gap-4'
      id='/add-ons'
      noValidate
      onSubmit={handleSubmit(handleAddonForm)}
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
