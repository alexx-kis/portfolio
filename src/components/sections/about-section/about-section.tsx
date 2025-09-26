'use client';

import Skills from '@/components/layout/skills/skills';
import Container from '@/components/shared/container/container';
import Heading from '@/components/ui/heading/heading';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath } from '@/constants/const';
import { aboutSectionText } from '@/data/about';
import { SKILLS_CONCISE } from '@/data/skills';
import { useTransitionLink } from '@/hooks/use-transition-link';
import { splitTextToParagraphs } from '@/utils/utils';
import s from './about-section.module.scss';

// @======================== AboutSection ========================@ //

function AboutSection(): React.JSX.Element {
  // useAboutAnimation();

  const { handleTransition } = useTransitionLink();

  return (
    <section className={s.section} id='about'>
      <Container>
        <div className={s.inner} >
          <div className={s.header} >
            <div className={s.info} >
              <Heading className={s.heading}>
                Hi! My name is Alex and I am a frontend developer
              </Heading>
              {splitTextToParagraphs(aboutSectionText).map((paragraph, index) => (
                <p key={index} className={s.text}>
                  {paragraph}
                </p>
              ))}
            </div>
            <Skills data={SKILLS_CONCISE} />
          </div>
          <MainButton
            className={s.button}
            href={AppRoute.ABOUT}
            text='Learn more'
            iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
            onMainButtonClick={(e) => {
              handleTransition(e, AppRoute.ABOUT);
            }}
          />
        </div>
      </Container>
    </section >
  );
}
export default AboutSection;