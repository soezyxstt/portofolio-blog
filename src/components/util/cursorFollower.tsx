import { useEventListener } from '@/hooks/useEventListener';
import { useInterval } from '@/hooks/useInterval';
import { use, useRef, type RefObject } from 'react';

const CursorFollower = ({
  mainRef,
}: {
  mainRef: RefObject<HTMLDivElement>;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  var mouseX = 0;
  var mouseY = 0;
  var xp = 0;
  var yp = 0;

  const moveCursor = (e: MouseEvent) => {
    mouseX = e.pageX - 12 + mainRef.current?.scrollLeft!;
    mouseY = e.pageY - 12 + mainRef.current?.scrollTop!;
  };

  const moveCursorTouch = (e: TouchEvent) => {
    mouseX = e.touches[0].pageX - 12 + mainRef.current?.scrollLeft!;
    mouseY = e.touches[0].pageY - 12 + mainRef.current?.scrollTop!;
  }

  const showCursor = () => {
    if (ref.current) {
      ref.current.style.opacity = '1';
    }
  }

  const hideCursor = () => {
    if (ref.current) {
      ref.current.style.opacity = '0';
    }
  }

  useInterval(() => {
    xp += (mouseX - xp) / 6;
    yp += (mouseY - yp) / 6;
    if (ref.current) {
      ref.current.style.left = xp + 'px';
      ref.current.style.top = yp + 'px';
    }
  }, 20);

  useEventListener('touchstart', showCursor, mainRef)
  useEventListener('touchcancel', hideCursor, mainRef)
  useEventListener('touchmove', moveCursorTouch, mainRef)

  useEventListener('mouseenter', showCursor, mainRef)
  useEventListener('mouseleave', hideCursor, mainRef)
  useEventListener('mousemove', moveCursor, mainRef);
  return (
    <div
      ref={ref}
      className='w-6 h-6 rounded-full border-[1.5px] border-teal-300 absolute top-72 left-40 z-[1000] pointer-events-none backdrop-blur-[1px] opacity-0 bg-teal-400/30'
    ></div>
  );
};

export default CursorFollower;
