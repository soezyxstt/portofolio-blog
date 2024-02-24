'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog } from './aboutMe';
import { montserrat, quicksand } from '@/lib/font';
import { cn } from '@/lib/utils';

const EduDialog = ({ query }: { query?: string }) => {
  return (
    <Dialog
      title='Education'
      open={query === 'education'}
    >
      <ScrollArea
        className='px-4 md:h-[50vh] h-[50vh]'
        onScroll={(e) => {
          const timeline = document.getElementsByClassName('about-dialog');

          const { top, bottom } = e.currentTarget.getBoundingClientRect();
          const positions = [...timeline].map(
            (el) => el.getBoundingClientRect().top
          );

          positions.forEach((el, i) => {
            if (el <= top + 400) {
              timeline[i].setAttribute(
                'style',
                `opacity: ${(top + 400 - el) / 300};`
              );
            }
            if (i === 0 || i === 1) return;

            if (i % 2 === 0) {
              if (el < bottom && el > top) {
                timeline[i].classList.add('animate-timeline-to-r');
                timeline[i].classList.remove('translate-x-[-120%]');
              } else if (el > bottom) {
                timeline[i].classList.remove('animate-timeline-to-r');
                timeline[i].classList.add('translate-x-[-120%]');
              }
            } else {
              if (el < bottom && el > top) {
                timeline[i].classList.add('animate-timeline-to-l');
                timeline[i].classList.remove('translate-x-[120%]');
              } else if (el > bottom) {
                timeline[i].classList.remove('animate-timeline-to-l');
                timeline[i].classList.add('translate-x-[120%]');
              }
            }
          });
        }}
      >
        <div className='h-[70rem] relative overflow-hidden'>
          <div className='bg-stone-100 w-[1px] absolute h-[60rem] left-[50%] translate-x-[-1px] before:w-3 before:h-3 before:bg-white before:rounded-full before:absolute before:left-[50%] before:translate-x-[-50%] after:w-3 after:h-3 after:bg-white after:rounded-full after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-0'></div>
          <div className='about-dialog w-fit absolute right-[calc(50%-5.5px)] flex gap-5 top-20 items-center '>
            <div className='text-right space-y-2'>
              <div className='flex items-center gap-4 place-content-end'>
                <img
                  src='/images/sd.png'
                  alt='sd'
                  className='w-10 h-10'
                />
                <div className={montserrat.className}>
                  <h1 className='font-semibold leading-none'>
                    SDN 1 Saribakti
                  </h1>
                  <span className='text-xs'>2010 - 2016</span>
                </div>
                <div className='w-3 h-3 bg-white rounded-full aspect-square'></div>
              </div>
              <p className={cn('text-sm mr-7', quicksand.className)}>
                Start from here, in a small village in Garut. I was born and
                raised here. I learned a lot of things here, and I'm grateful
                for that.
              </p>
            </div>
          </div>
          <div className='about-dialog w-fit absolute left-[calc(50%-6.5px)] flex gap-5 top-[20rem] items-center opacity-40'>
            <div className='text-left space-y-2'>
              <div className='flex items-center flex-row-reverse gap-4 place-content-end'>
                <img
                  src='/images/smp.png'
                  alt='smp'
                  className='w-10 h-10'
                />
                <div className={montserrat.className}>
                  <h1 className='font-semibold leading-none'>
                    SMPN 1 Tarogong Kidul
                  </h1>
                  <span className='text-xs'>2016 - 2019</span>
                </div>
                <div className='w-3 h-3 bg-white rounded-full aspect-square'></div>
              </div>
              <p className={cn('text-sm ml-7', quicksand.className)}>
                The first time I study at the town. Quite exciting and a lot of
                new things and cultures to know more about. That's a very good
                experience for me.
              </p>
            </div>
          </div>
          <div className='about-dialog w-fit absolute right-[calc(50%-5.5px)] flex gap-5 top-[35rem] items-center opacity-0 translate-x-[-120%]'>
            <div className='text-right space-y-2'>
              <div className='flex items-center gap-4 place-content-end'>
                <img
                  src='/images/sma.png'
                  alt='sma'
                  className='w-10 h-10'
                />
                <div className={montserrat.className}>
                  <h1 className='font-semibold leading-none'>SMAN 1 Garut</h1>
                  <span className='text-xs'>2019 - 2022</span>
                </div>
                <div className='w-3 h-3 bg-white rounded-full aspect-square'></div>
              </div>
              <p className={cn('text-sm mr-7', quicksand.className)}>
                The first time I knew about programming and technology. Such an
                unforgettable moment for me. I grew up su much than any time
                before.
              </p>
            </div>
          </div>
          <div className='about-dialog w-fit absolute left-[calc(50%-5.5px)] flex gap-5 top-[50rem] items-center opacity-0 translate-x-[120%]'>
            <div className='text-left space-y-2'>
              <div className='flex items-center flex-row-reverse gap-4 place-content-end'>
                <img
                  src='/images/itb.png'
                  alt='itb'
                  className='w-10 h-10'
                />
                <div className={montserrat.className}>
                  <h1 className='font-semibold leading-none'>
                    Institut Teknologi Bandung
                  </h1>
                  <span className='text-xs'>2022 - 2026</span>
                </div>
                <div className='w-3 h-3 bg-white rounded-full aspect-square'></div>
              </div>
              <p className={cn('text-sm ml-7', quicksand.className)}>
                A lot of new experiences, teamwork, and knowledge. Here I know
                more about robotics and web development. I met a lot of great
                people here.
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </Dialog>
  );
};

export default EduDialog;
