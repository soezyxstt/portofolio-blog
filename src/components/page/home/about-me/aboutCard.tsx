'use client';

import type { ReactNode } from 'react';
import Tilt from '../../../util/TiltComponent';
import { cn } from '@/lib/utils';
import Link, { type LinkProps } from 'next/link';
import { Separator } from '@/components/ui/separator';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';

const AboutCard = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <Tilt
      className='w-[500px]'
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable
      glareColor='#57534eaa'
    >
      <div
        className={cn(
          'border [box-shadow:0_0_9999px_2px_#115e5966] rounded-xl border-stone-400 h-40 p-8',
          className
        )}
      >
        {children}
      </div>
    </Tilt>
  );
};

const Card = ({
  children,
  title,
  top,
  left,
  img,
  ...props
}: {
  title?: string;
  children?: ReactNode;
  top?: string;
    left?: string;
  img?: string;
} & LinkProps) => {
  const isDekstop = useMediaQuery('(min-width: 768px)');

  if (isDekstop) {
    return (
      <Link
        className={cn('about-card rounded-xl opacity-0 absolute bg-neutral-800/30 group', top, left)}
        {...props}
      >
        <AboutCard className=' flex flex-col justify-between'>
          <h1 className='text-lg font-bold'>{title}</h1>
          <div className=''>
            {children}
            <Separator className='relative h-0.5 mt-2 before:absolute before:left-0 before:h-full before:top-0 before:bg-teal-500 before:w-0 group-hover:before:w-full before:duration-300 before:transition-all' />
          </div>
        </AboutCard>
      </Link>
    );
  }

  return (
    <Link
      className={cn(
        'w-full [box-shadow:0_0_9999px_2px_#55555566] group border-[0.5px] overflow-hidden pt-6 border-stone-600/70 absolute mobile-about-card bg-gradient-to-b rounded-lg h-[40vh] from-neutral-800/70 to-stone-900/70 text-lg',
        top,
        left
      )}
      {...props}
    >
      <div className='flex flex-col relative h-full px-6 '>
        <h1 className='text-xl font-bold'>{title}</h1>
        <div className='text-stone-400'>
          {children}
          <Separator className='relative h-0.5 mt-2 before:absolute before:left-0 before:h-full before:top-0 before:bg-teal-500 before:w-0 group-hover:before:w-full before:duration-300 before:transition-all' />
        </div>
        <div className='absolute bottom-0 right-0 h-[65%] w-[65%] py-4 px-6 rounded-tl-xl bg-neutral-600/40 [box-shadow:4px_4px_20px_0_#00000044]'>
          <Image
            src={img ?? '/images/nextjs.svg'}
            width={120}
            height={100}
            alt='arrow'
            className=' object-cover w-full h-full [object-position:center_top] aspect-square'
            quality={100}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
