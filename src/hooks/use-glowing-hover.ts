// %======================== useGlowingHover ========================% //

import { useEffect, useRef } from 'react';

export function useGlowingHover() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const item = ref.current;

    if (item) {
      const bgElement = document.createElement('div');
      bgElement.style.cssText = `
        z-index: -1;
        opacity: 0;
        inset: 0;
        transition: all 250ms;
        border-radius: inherit;
        position: absolute;
      `;
      item.appendChild(bgElement);

      const initialBackgroundColor = getComputedStyle(item).backgroundColor;
      const bgInner = document.createElement('div');
      bgInner.style.cssText = `
        border-radius: inherit;
        transition: all 250ms;
        position: absolute;
        inset: max(${1 / 1440 * 100}vw, 1px);
        opacity: 0.9;
      `;
      bgElement.appendChild(bgInner);

      const handleMouseLeave = () => {
        bgElement.style.opacity = '0';
      };

      const handleMouseEnter = () => {
        bgElement.style.opacity = '1';
      };

      const handleMouseMove = (e: MouseEvent) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        bgElement.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px , rgba(255,255,255,0.5), ${initialBackgroundColor})`;
      };

      item.addEventListener('mouseleave', handleMouseLeave);
      item.addEventListener('mouseenter', handleMouseEnter);
      item.addEventListener('mousemove', handleMouseMove);

      return () => {
        item.removeEventListener('mouseleave', handleMouseLeave);
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return ref;
}
