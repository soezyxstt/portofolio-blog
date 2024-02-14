import Navbar from '@/components/util/navbar';
import { rajdhani } from '@/lib/font';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <main className='flex min-h-dvh flex-col items-center justify-center md:p-24 p-12 bg-black'>
      <Navbar />
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
          'text-gray-200 z-10 text-[5rem] md:text-[9rem] text-center',
          rajdhani.className
        )}
      >
        <h1 className='leading-tight'>{'Adi Haditya'.toUpperCase()}</h1>
        <h1>{'Nursyam'.toUpperCase()}</h1>
      </div>
      <div className='z-10 font-mono felx flex-col gap-2'>
        <h1 className='hover:pl-2 transition-all'>{'Scroll for more'.toUpperCase()}</h1>
        <Separator className='dark:bg-teal-600 w-48' />
      </div>
    </main>
  );
}
