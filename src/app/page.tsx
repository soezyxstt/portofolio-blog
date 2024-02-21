'use client';

import Navbar from '@/components/util/navbar';
import { rajdhani } from '@/lib/font';
import { cn } from '@/lib/utils';
import ProjectCard from '@/components/util/projectCard';
import ScrollMore from '@/components/util/scrollMore';
import TopTracker from '@/components/util/topTracker';
import { useRef } from 'react';
import CursorFollower from '@/components/util/cursorFollower';
import { useEventListener } from '@/hooks/useEventListener';

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEventListener(
    'scroll',
    () => {
      const root = document.documentElement || document.body;
      const scroll = mainRef.current?.scrollTop || 0;

      const current = Number(root.style.getPropertyValue('--scroll'));

      if (current > scroll) {
        root.style.setProperty('--navbar-height', '4rem')
      }
      else {
        root.style.setProperty('--navbar-height', '0rem');
      }
      if (root) {
        root.style.setProperty('--scroll', scroll.toString());
      }
    },
    mainRef
  );

  return (
    <main
      ref={mainRef}
      id='main'
      className='flex h-full flex-col scroll-smooth items-center bg-black text-stone-200 *:flex snap-y snap-mandatory overflow-y-scroll relative '
    >
      <CursorFollower mainRef={mainRef} />
      <Navbar />
      <TopTracker mainRef={mainRef} />
      <div className='md:py-24 min-h-screen h-screen py-12 container flex-col gap-12 justify-center snap-center border-b border-b-white'>
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
          <h1 className='leading-tight animate-typing overflow-hidden border-solid border-r-[.075em] whitespace-nowrap '>
            {'Adi Haditya Nursyam'.toUpperCase()}
          </h1>
        </div>
        <ScrollMore />
      </div>
      <div
        id='project'
        className='z-10 min-h-screen h-screen md:container flex-col pt-8 pb-8 md:pt-10 md:pb-10 w-full gap-6 snap-center'
      >
        <h1 className='text-4xl font-bold pl-10 md:pl-0'>Projects</h1>
        <div className='flex flex-1 overflow-x-scroll snap-x snap-mandatory'>
          <div className='flex md:w-full flex-row-reverse gap-4 md:gap-2 w-[600%] px-12 md:px-0'>
            <ProjectCard
              src='bg-pemira-2'
              className='hover:bg-pemira-1'
              title='PEMIRA KM ITB'
              year='2024'
            >
              Design and develop a website for the election of the K3M and
              MWA-WM
            </ProjectCard>
            <ProjectCard
              src='bg-oskm'
              title='IT OSKM ITB'
              year='June 2023'
            >
              Participate in the IT OSKM ITB as a committee member and become
              the best committee
            </ProjectCard>
            <ProjectCard
              src='bg-prd'
              title='Engineering Design'
              year='2023'
            >
              Design a prototype of a glider aircraft in a team of 5 and won 5th
              place
            </ProjectCard>
            <ProjectCard
              src='bg-krai'
              title='KRAI Internship'
              year='August - 2023'
            >
              Build a Robot in internship at ITB ABU Robotics Team
            </ProjectCard>
            <ProjectCard
              src='bg-moka'
              title='MOKA Garut'
              year='Nov - 2023'
            >
              Participate in the Mojang Jajaka Garut and become the Jajaka
              Calakan
            </ProjectCard>
            <ProjectCard
              src='bg-flywheel'
              title='Flywheel'
              year='May - 2023'
              isLast
            >
              Construct a motor utilizing magnets levitation technology in aim
              of augmenting efficiency as an experiment for Scientific Writing
              report.
            </ProjectCard>
          </div>
        </div>
      </div>
    </main>
  );
}
