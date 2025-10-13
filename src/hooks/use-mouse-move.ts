import { RefObject, useEffect } from 'react';

// %======================== useMouseMove ========================% //

export const setCursorParallax = (element: HTMLElement, e: MouseEvent, strength: number) => {
  if (!element) return;
  const halfViewportWidth = window.innerWidth / 2;
  const halfViewportHeight = window.innerHeight / 2;

  const x = (e.clientX - halfViewportWidth) / (halfViewportWidth);
  const y = (e.clientY - halfViewportHeight) / (halfViewportHeight);

  (element as HTMLElement).style.transform = `translate(${x * strength}px, ${y * strength}px)`;
};

export const useMouseMove = (ref: RefObject<HTMLElement | null>, parallaxStrength: number) => {
  const handleWindowMouseMove = (e: MouseEvent) => {
    if (ref.current) {
      setCursorParallax(ref.current as HTMLElement, e, parallaxStrength);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  });
};