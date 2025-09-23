'use client';

import Skills from '@/components/layout/skills/skills';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath } from '@/constants/const';
import { aboutSectionText } from '@/data/about';
import { SKILLS_CONCISE } from '@/data/skills';
import { useTransitionLink } from '@/hooks/use-transition-link';
import { splitTextToParagraphs } from '@/utils/utils';
import Image from 'next/image';
import './about-section.scss';

// @======================== AboutSection ========================@ //

function AboutSection(): React.JSX.Element {
  // useAboutAnimation();

  const { handleTransition } = useTransitionLink();

  return (
    <section className='main__about about' id='about'>
      <div className='container'>
        <div className='about__inner'>
          <div className='about__header'>
            <div className='about__headings' >
              <h2 className='about__heading heading'>Hi!</h2>
              <h2 className='about__heading heading'>
                My name is Alex and I am a frontend developer
              </h2>
            </div>
            <div className='about__image-wrapper' >
              <Image
                src={`${basePath}/img/avatar-big.png`}
                alt=''
                width={1}
                height={1}
              />
            </div>
          </div>
          <div className='about__info'>
            {splitTextToParagraphs(aboutSectionText).map((paragraph, index) => (
              <p key={index} className='about__text'>
                {paragraph}
              </p>
            ))}
          </div>
          <Skills data={SKILLS_CONCISE} />
          <MainButton
            className='about__button'
            href={AppRoute.ABOUT}
            text='Learn more'
            iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
            onMainButtonClick={(e) => {
              handleTransition(e, AppRoute.ABOUT);
            }}
          />
        </div>
      </div>
    </section >
  );
}
export default AboutSection;