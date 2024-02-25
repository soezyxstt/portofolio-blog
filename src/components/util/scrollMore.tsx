'use client';

import { Separator } from '../ui/separator';

const ScrollMore = () => {
  return (
    <a href='#project'
      className='z-10 font-mono flex flex-col gap-1 w-fit cursor-alias absolute bottom-0'
    >
      <h1 className='hover:pl-2 transition-all w-fit'>
        {'Scroll for more'.toUpperCase()}
      </h1>
      <Separator className='dark:bg-teal-600 w-48' />
    </a>
  );
}

export default ScrollMore;