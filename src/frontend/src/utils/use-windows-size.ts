import { useEffect, useState } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

export const useWindowsSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({} as WindowSize);

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return windowSize;
};
