import * as React from 'react';
import { HeaderComponent } from '~/components/header';
import { NavigationComponent } from '~/components/navigation';

export const MainLayout: React.FC = () => {
  return (<>
    <div className='w-screen h-screen flex flex-row'>
      <NavigationComponent />
      <div className="h-full w-full box-border">
        <HeaderComponent />
        <div className=""></div>
      </div>
    </div>
  </>);
}
