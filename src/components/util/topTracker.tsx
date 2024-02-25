'use client';

import { useEventListener } from '@/hooks/useEventListener';
import { useRef } from 'react';

const TopTracker = () => {
  const ref = useRef<HTMLDivElement>(null);
  const onScroll = () => {
    if (ref.current) {
      const tracker = ref.current;
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      tracker.style.width = `${progress * 100}%`;
    }
  }

  useEventListener('scroll', onScroll);

  return (
    <div
      ref={ref}
      id='top-tracker'
      className='fixed z-50 h-1 w-0 bg-teal-600 top-[calc(var(--navbar-height))] transition-all ease-out rounded-full left-0'
    ></div>
  );
};

export default TopTracker;