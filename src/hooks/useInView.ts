import { MutableRefObject, useEffect, useState } from 'react';

const useInView = <T extends Element>(
  target: MutableRefObject<T>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      setIsIntersecting(entries[0].isIntersecting);
    };

    observer?.disconnect();

    if (target.current) {
      const _observer = new IntersectionObserver(handleIntersect, options);
      _observer.observe(target.current);
      setObserver(_observer);
    }
  }, [target.current, options.root, options.rootMargin, options.threshold]); // eslint-disable-line

  useEffect(() => {
    return () => {
      observer?.disconnect();
    };
  }, []); // eslint-disable-line

  return isIntersecting;
};

export default useInView;
