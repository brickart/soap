import React, { FC } from 'react';
import Image from 'next/image';
import { IconButton } from './button/icon-button';

export const NavigationComponent: FC = () => {
  return (<>
    <div className='h-full w-14 border-gray-200 border-r-2 box-border px-2 pb-2 flex flex-col'>
      <div className="w-10 h-12 flex justify-center items-center">
        <Image className='h-6 w-6' src='../assets/logo-2.svg' alt='' />
      </div>
      <div className="py-2 flex flex-col space-y-2 flex-1">
        <IconButton icon={<Image src='../assets/icons/storefront.svg' alt='' />} />
        <IconButton icon={<Image src='../assets/icons/inbox.svg' alt='' />} />
        <IconButton icon={<Image src='../assets/icons/storefront.svg' alt='' />} />
        <IconButton icon={<Image src='../assets/icons/person.svg' alt='' />} />
        <IconButton icon={<Image src='../assets/icons/sell.svg' alt='' />} />
      </div>
      <IconButton icon={<Image src='../assets/icons/settings.svg' alt='' />} />
    </div>
  </>);
}
