export default function PersonalInfoForm() {
  return (
    <form className='w-full flex flex-col gap-4 md:gap-8'>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='name'
          className='text-[0.81rem] text-primary-blue-950/90'
        >
          Name
        </label>
        <input
          type='text'
          name='name'
          placeholder='e.g. Stephen King'
          className='border-1 border-grayy-200 px-4 py-2 md:py-3 rounded-[5px] md:rounded-[10px] focus:outline-none placeholder:text-sm placeholder:font-[400] placeholder:text-grayy-500'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='email'
          className='text-[0.81rem] text-primary-blue-950/90'
        >
          Email Address
        </label>
        <input
          type='email'
          name='email'
          placeholder='e.g. stephenking@lorem.com'
          className='border-1 border-grayy-200 px-4 py-2 md:py-3 rounded-[5px] md:rounded-[10px] focus:outline-none placeholder:text-sm placeholder:font-[400] placeholder:text-grayy-500'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='phone'
          className='text-[0.81rem] text-primary-blue-950/90'
        >
          Phone Number
        </label>
        <input
          type='tel'
          name='phone'
          placeholder='e.g. +1 234 567 890'
          className='border-1 border-grayy-200 px-4 py-2 md:py-3 rounded-[5px] md:rounded-[10px] focus:outline-none placeholder:text-sm placeholder:font-[400] placeholder:text-grayy-500'
        />
      </div>
    </form>
  );
}
