import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 10; // The number of pixels to count as a 'scroll'

export function useScrollDirection(init: "up" | "down" = 'up') {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">(init);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > SCROLL_THRESHOLD ||
          scrollY - lastScrollY < -SCROLL_THRESHOLD)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}
