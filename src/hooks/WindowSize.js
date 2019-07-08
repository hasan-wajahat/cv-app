import { useState, useEffect } from 'react';

function getSize() {
  return {
    height: window.innerHeight,
    width: window.innerWidth,
  };
}

/**
 * hook for getting window size
 * @returns {object} {height: number, width: number}
 */
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
