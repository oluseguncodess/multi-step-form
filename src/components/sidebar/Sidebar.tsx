import type { sidebarItem } from '../../types/types';
import SidebarItem from './SidebarItem';

const navigation: sidebarItem[] = [
  { id: 1, step: 'Step 1', description: 'Your info', path: '/'},
  { id: 2, step: 'Step 2', description: 'Select plan', path: 'select-plan' },
  { id: 3, step: 'Step 3', description: 'Add-ons', path: 'add-ons' },
  { id: 4, step: 'Step 4', description: 'Summary', path: 'summary'  },
];

export default function Sidebar() {
  
  return (
    <div className='bg-[url("./bg-sidebar-mobile.svg")] h-40 w-full md:w-[270px] bg-cover bg-center bg-no-repeat md:h-full md:rounded-[5px] md:bg-[url("./bg-sidebar-desktop.svg")] flex justify-center md:justify-normal md:pl-9'>
      <div className='w-[190px] flex md:flex-col justify-between md:justify-normal pt-10 md:gap-10'>
        {navigation.map((sidebaritem) => (
        <SidebarItem
          key={sidebaritem.id}
          id={sidebaritem.id}
          step={sidebaritem.step}
          description={sidebaritem.description}
          path={sidebaritem.path}
        />
      ))}
      </div>
    </div>
  );
}
