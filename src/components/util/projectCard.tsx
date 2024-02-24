'use client';

import { useDebounce } from '@/hooks/useDebounce';
import useInView from '@/hooks/useInView';
import { quicksand, robotoMono } from '@/lib/font';
import { cn } from '@/lib/utils';
import { type MutableRefObject, useRef, type ReactNode } from 'react';

const ProjectCard = ({
  src,
  title,
  year,
  isLast = false,
  children,
  className,
}: {
  src?:
    | 'bg-oskm'
    | 'bg-flywheel'
    | 'bg-pemira-1'
    | 'bg-pemira-2'
    | 'bg-prd'
    | 'bg-krai'
    | 'bg-moka';
  title?: string;
  year?: string;
  isLast?: boolean;
  children?: ReactNode;
  className?: string;
}) => {
  const bg = src;
  const w = !isLast
    ? 'max-w-[calc(100vw)] w-[calc(100vw-4rem)] md:w-[calc((100/7)*1%-6px)] md:hover:w-[calc((100/7)*2%-6px)]'
    : 'max-w-[calc(100vw)] w-[calc(100vw-4rem)] md:flex-1 md:peer-hover:w-[calc((100/7)*1%-6px)]';

  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const inView = useInView<HTMLDivElement>(ref, { threshold: 1 });
  const isInView = useDebounce(inView, 100);

  return (
    <div
      ref={ref}
      className={cn(
        `bg-cover bg-center peer transition-all duration-200 md:delay-200 relative group md:grayscale-[80%] md:hover:grayscale-0 snap-center`,
        bg,
        w,
        isInView
          ? 'grayscale-0 scale-100'
          : 'grayscale-[80%] scale-95 md:scale-100',
        className
      )}
    >
      <div className='absolute group-hover:opacity-0 transition-opacity w-full h-full bottom-0 bg-gradient-to-b from-black/20 to-black/40'></div>
      <div
        className={cn(
          'absolute bottom-0 px-8 py-6 text-sm z-10 h-[40%] md:opacity-0 md:group-hover:opacity-100 transition-all md:delay-200 bg-gradient-to-t from-black/75 via-black/50 via-60% to-black/0 w-full flex flex-col justify-end',
          isInView ? 'opacity-1' : 'opacity-0',
          robotoMono.className
        )}
      >
        <div className=' leading-tight justify-between items-center mb-3'>
          <h1 className='text-xl font-bold'>{title}</h1>
          <span className='font-bold text-xs'>{year}</span>
        </div>
        <p className={cn('', quicksand.className)}>{children}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
