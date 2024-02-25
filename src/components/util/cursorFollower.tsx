import { useEventListener } from '@/hooks/useEventListener';
import { useInterval } from '@/hooks/useInterval';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useRef } from 'react';

const CursorFollower = () => {
  const isDekstop = useMediaQuery('(min-width: 1024px)');
  const ref = useRef<HTMLDivElement>(null);
  var mouseX = 0;
  var mouseY = 0;
  var xp = 0;
  var yp = 0;
  const arrayTimeout: NodeJS.Timeout[] = [];
  const timeoutArray: NodeJS.Timeout[] = [];

  const moveCursor = (e: MouseEvent) => {
    mouseX = e.pageX - 12
    mouseY = e.pageY - 12 
    if (e.pageX > 0.9 * window.innerWidth) {
      timeoutArray.forEach((timeout) => clearTimeout(timeout));
      document.getElementById('right-nav')?.setAttribute('style', 'right: 0');
      timeoutArray.push(
        setTimeout(() => {
          document.getElementById('right-nav')?.setAttribute('style', 'right: -100%');
        }, 1000)
      );
    }
  };

  const showCursor = () => {
    if (ref.current) {
      ref.current.style.opacity = '1';
    }
  };

  const hideCursor = () => {
    if (ref.current) {
      ref.current.style.opacity = '0';
    }
  };

  const hideCursorOnScroll = () => {
    arrayTimeout.forEach((timeout) => clearTimeout(timeout));
    hideCursor();
    arrayTimeout.push(
      setTimeout(() => {
        showCursor();
      }, 500)
    );
  }

  useInterval(() => {
    xp += (mouseX - xp) / 6;
    yp += (mouseY - yp) / 6;
    if (ref.current) {
      ref.current.style.left = xp + 'px';
      ref.current.style.top = yp + 'px';
    }
  }, 20);

  useEventListener('mouseenter', showCursor);
  useEventListener('mouseleave', hideCursor);
  useEventListener('mousemove', moveCursor);
  useEventListener('scroll', hideCursorOnScroll);
  if (isDekstop) {
    return (
      <div
        ref={ref}
        id='cursor-follower'
        className='w-6 h-6 rounded-full border-[1.5px] border-teal-300 absolute top-72 left-40 z-[1000] pointer-events-none backdrop-blur-[1px] opacity-0 bg-teal-400/30'
      ></div>
    );
  }

  return null;
};

export default CursorFollower;
