'use client';

import Background from '@/components/ui/background/background';
import MainButton from '@/components/ui/main-button/main-button';
import MainHeading from '@/components/ui/main-heading/main-heading';
import { basePath } from '@/constants/const';
import clsx from 'clsx';
import Image from 'next/image';
import s from './hero-section.module.scss';

// @======================== HeroSection ========================@ //

function HeroSection(): React.JSX.Element {
  // useHeroAnimation();
  return (
    <section className={clsx(s.section, 'container')}>
      <Background className={s.bg}>
        <div className={clsx(s.circle, s._top)}>
          <div className={s.circleInner} />
        </div>
        <div className={clsx(s.circle, s._bottom)}>
          <div className={s.circleInner} />
        </div>
      </Background>
      <div className={s.inner}>
        <div className={s.info}>
          <MainHeading className={s.heading}>Hi! I&apos;m Alex</MainHeading>
          <p className={s.text}>a frontend developer</p>
          <div className={s.buttonBox}>
            <MainButton
              className={s.button}
              href=''
              text='Download CV'
              iconPath={`${basePath}/img/icons/download-arrow.svg`}
            />
          </div>
        </div>
        <div className={s.imageBox}>
          <Image
            className={s.image}
            src={`/img/avatar-big.png`}
            alt=''
            width={1080}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
}
export default HeroSection;