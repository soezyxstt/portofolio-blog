import React, {useEffect, useState} from 'react';

function UseWindowSize() {
  const [windowDimension, setWindowDimension] = useState<{ width: number | null, height: null | number }>({
    width: null,
    height: null
  });
  const hasWindow = typeof window !== 'undefined';

  function getWindowDimension() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;

    return {
      width,
      height
    }
  }

  useEffect(() => {
    if (hasWindow) {
      setWindowDimension(getWindowDimension());
      window.addEventListener('resize', () => {
        setWindowDimension(getWindowDimension());
      });
      return () => window.removeEventListener('resize', () => {
        setWindowDimension(getWindowDimension());
      });
    }
  }, [hasWindow]);

  return windowDimension;
}

export default UseWindowSize;