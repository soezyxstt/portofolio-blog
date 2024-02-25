import { cn } from '@/lib/utils';
import ScrollMore from '../../util/scrollMore';
import { rajdhani } from '@/lib/font';

const Greeting = () => {
  return (
    <div id='home' className='md:py-24 min-h-dvh h-dvh py-12 container flex-col gap-12 justify-center snap-center '>
      <div className='absolute w-auto max-w-[65%] h-[60vh] z-0'>
        <img
          src='/images/g.png'
          alt='adi'
          className='absolute bottom-0 left-0 z-[1] w-auto h-auto'
        />
        <img
          src='/images/cloud.png'
          alt='cloud'
          className='opacity-30 w-auto h-full'
        />
      </div>
      <div
        className={cn(
          'text-stone-200 z-10 text-[2rem] md:text-8xl w-fit',
          rajdhani.className
        )}
      >
        <div className='flex gap-3 md:text-7xl text-3xl'>
          <h1 className=''>{'Hello There!'}</h1>
          <p className='text-teal-400 font-bold underline'>{" I'm"}</p>
        </div>
        <h1
          id='typing-name'
          className='leading-tight animate-typing overflow-hidden border-solid border-r-[.075em] whitespace-nowrap '
        >
          {'Adi Haditya Nursyam'.toUpperCase()}
        </h1>
      </div>
      <ScrollMore />
    </div>
  );
};

export default Greeting;
