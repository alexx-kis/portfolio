'use client';

import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import s from './preloader.module.scss';

// ^======================== Preloader ========================^ //

function Preloader(): React.JSX.Element | null {
  const [isVisible, setIsVisible] = useState(true);
  const preloaderRef = useRef<HTMLDivElement | null>(null);

  const handleWindowLoad = () => {
    gsap.to(preloaderRef.current, {
      opacity: 0,
      onComplete: () => {
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    return () => {
      window.removeEventListener('load', handleWindowLoad);
    };

  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={s.preloader} ref={preloaderRef}>
      <div className={s.element} />
    </div>

  );
}
export default Preloader;