'use client';

import { useEventListener } from '@/hooks/useEventListener';
import { useRef, type RefObject } from 'react';

const TopTracker = ({ mainRef }: { mainRef: RefObject<HTMLDivElement> }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScroll = () => {
    if (mainRef.current && ref.current) {
      const main = mainRef.current;
      const tracker = ref.current;
      const progress = main.scrollTop / (main.scrollHeight - main.clientHeight);
      tracker.style.width = `${progress * 100}%`;
    }
  }
  useEventListener('scroll', onScroll, mainRef);

  return (
    <div ref={ref} id='top-tracker' className='fixed z-50 h-1 w-0 bg-stone-600 rounded-full top-16 left-0'></div>
  );
};

export default TopTracker;