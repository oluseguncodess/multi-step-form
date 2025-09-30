import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1, 'This field is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .min(1, 'This field is required')
    // eslint-disable-next-line no-useless-escape
    .regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Invalid phone number'),
});

type FormFields = z.infer<typeof formSchema>;

export default function PersonalInfoForm() {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(formSchema),
  });

  function handleFormSubmit() {
    navigate('/select-plan')
  }
  return (
    <form
      className='w-full flex flex-col gap-4 md:gap-7'
      id='/'
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
    >
      <div className='flex flex-col gap-1'>
        <div className='w-full flex justify-between items-center text-[0.81rem]'>
          <label htmlFor='name' className='text-primary-blue-950/90'>
            Name
          </label>
          {errors.name && (
            <span className='text-red-500 font-bold'>
              {errors.name.message}
            </span>
          )}
        </div>

        <input
          {...register('name')}
          type='text'
          name='name'
          placeholder='e.g. Stephen King'
          className='border-1 border-grayy-200 px-4 py-2 md:py-3 rounded-[5px] md:rounded-[10px] focus:outline-none placeholder:text-sm placeholder:font-[400] placeholder:text-grayy-500'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='w-full flex justify-between items-center text-[0.81rem]'>
          <label
            htmlFor='email'
            className='text-[0.81rem] text-primary-blue-950/90'
          >
            Email Address
          </label>
          {errors.email && (
            <span className='text-red-500 font-bold'>
              {errors.email.message}
            </span>
          )}
        </div>
        <input
          {...register('email')}
          type='email'
          name='email'
          placeholder='e.g. stephenking@lorem.com'
          className='border-1 border-grayy-200 px-4 py-2 md:py-3 rounded-[5px] md:rounded-[10px] focus:outline-none placeholder:text-sm placeholder:font-[400] placeholder:text-grayy-500'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <div className='w-full flex justify-between items-center text-[0.81rem]'>
          <label
            htmlFor='phone'
            className='text-[0.81rem] text-primary-blue-950/90'
          >
            Phone Number
          </label>
          {errors.phone && (
            <span className='text-red-500 font-bold'>
              {errors.phone.message}
            </span>
          )}
        </div>
        <input
          {...register('phone')}
          type='tel'
          name='phone'
          placeholder='e.g. +1 234 567 890'
          className='border-1 border-grayy-200 px-4 py-2 md:py-3 rounded-[5px] md:rounded-[10px] focus:outline-none placeholder:text-sm placeholder:font-[400] placeholder:text-grayy-500'
        />
      </div>
    </form>
  );
}
