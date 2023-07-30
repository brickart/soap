import * as React from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon }) => {
  return (<>
    <button className='w-10 h-10 flex justify-center items-center hover:bg-zinc-200 rounded-md'>
      <div className="w-6 h-6 fill-gray-300">{icon}</div>
    </button>
  </>);
}
