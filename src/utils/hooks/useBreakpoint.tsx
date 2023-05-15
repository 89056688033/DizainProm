import { useEffect, useState } from 'react';

export const useBreakpoint = (breakpoint: number) => {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  useEffect(() => {
    const checkResize = () => {
      if (window.innerWidth <= breakpoint) {
        setIsBreakpoint(() => true);
      }

      if (isBreakpoint && window.innerWidth > breakpoint) {
        setIsBreakpoint(() => false);
      }
    };

    window.addEventListener('resize', checkResize);
    return () => {
      window.removeEventListener('resize', checkResize);
    };
  }, [breakpoint, isBreakpoint]);

  return isBreakpoint;
};
