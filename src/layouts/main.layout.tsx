import * as React from 'react';
import { HeaderComponent } from '~/components/header';
import { NavigationComponent } from '~/components/navigation';

interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = () => {
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
