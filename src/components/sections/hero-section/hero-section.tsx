'use client';

import MainButton from '@/components/ui/main-button/main-button';
import MainHeading from '@/components/ui/main-heading/main-heading';
import { basePath } from '@/constants/const';
import s from './hero-section.module.scss';

// @======================== HeroSection ========================@ //

function HeroSection(): React.JSX.Element {
  // useHeroAnimation();
  return (
    <section
      className={s.section}
    // style={{
    //   backgroundImage: `url(${basePath}/img/bg/hero-bg.jpg)`,
    // }}
    >
      <div className='container'>
        <div className={s.inner}>
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
      </div>
    </section>
  );
}
export default HeroSection;