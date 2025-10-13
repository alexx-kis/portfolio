'use client';

import gsap from 'gsap';
import { useEffect, useState } from 'react';
import s from './preloader.module.scss';

// ^======================== Preloader ========================^ //

function Preloader(): React.JSX.Element | null {
  const [isVisible, setIsVisible] = useState(true);

  const handleWindowLoad = () => {
    gsap.to('.preloader', {
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
    <div className={s.preloader}>
      <div className={s.element} />
    </div>

  );
}
export default Preloader;