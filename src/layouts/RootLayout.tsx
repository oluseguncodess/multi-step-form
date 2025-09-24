import Sidebar from '../components/sidebar/Sidebar';

export default function RootLayout() {
  return (
    <div className='w-full h-screen bg-body-background md:flex md:justify-center md:items-center'>
      <div className='md:w-[950px] bg-white md:h-[600px] md:p-4 md:rounded-[5px]'>
        <Sidebar />
      </div>
    </div>
  );
}
