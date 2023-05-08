import { useEffect, useRef, useState } from 'react';

const useScroll = () => {
  const timer = useRef(null);
  const [, setValueY] = useState(0);
  const gapY = useRef(0);

  const handleScroll = () => {
    const scrollY = window.scrollY ?? 0;
    const visualViewport = window.visualViewport;
    const scrollHeight = document.getElementById('root')?.scrollHeight ?? 0;

    setValueY((prev) => {
      const scrollDiff = prev - scrollY;
      const isScrollingUp = scrollDiff > 0;
      const isScrollingDown = scrollDiff < 0;

      if (scrollY < 20) {
        gapY.current = 0;
      } else if (scrollHeight <= scrollY + (visualViewport?.height ?? 0) + 20) {
        gapY.current = -50;
      } else if (
        (isScrollingUp && gapY.current >= 0) ||
        (isScrollingDown && gapY.current <= -50)
      ) {
        timer.current = null;
      } else {
        gapY.current += Math.abs(scrollDiff) * (isScrollingUp ? 1 : -1);
        gapY.current = Math.min(0, Math.max(-50, gapY.current));
        timer.current = null;
      }

      return scrollY;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return gapY.current;
};

export default useScroll;
