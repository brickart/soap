import * as React from 'react';
import { IconButton } from './button/icon-button';
import LogoIcon from '../assets/logo-2.svg';
import StorefrontIcon from '../assets/icons/storefront.svg';
import FolderCopyIcon from '../assets/icons/folder_copy.svg';
import InboxIcon from '../assets/icons/inbox.svg';
import PersonIcon from '../assets/icons/person.svg';
import SellIcon from '../assets/icons/sell.svg';
import SettingsIcon from '../assets/icons/settings.svg';

interface NavigationComponentProps {}

export const NavigationComponent: React.FC<NavigationComponentProps> = () => {

  console.log(StorefrontIcon)
  return (<>
    <div className='h-full w-14 border-gray-200 border-r-2 box-border px-2 pb-2 flex flex-col'>
      <div className="w-10 h-12 flex justify-center items-center">
        <img className='h-6 w-6' src={LogoIcon.src} />
      </div>
      <div className="py-2 flex flex-col space-y-2 flex-1">
        <IconButton icon={<img src={InboxIcon.src} />} />
        <IconButton icon={<img src={StorefrontIcon.src} />} />
        <IconButton icon={<img src={FolderCopyIcon.src} />} />
        <IconButton icon={<img src={PersonIcon.src} />} />
        <IconButton icon={<img src={SellIcon.src} />} />
      </div>
      <IconButton icon={<img src={SettingsIcon.src} />} />
    </div>
  </>);
}
