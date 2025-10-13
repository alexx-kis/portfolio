'use client';

import Skills from '@/components/layout/skills/skills';
import Container from '@/components/shared/container/container';
import Heading from '@/components/ui/heading/heading';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath } from '@/constants/const';
import { aboutSectionText } from '@/data/about';
import { SKILLS_CONCISE } from '@/data/skills';
import { useTransitionLink } from '@/hooks/use-transition-link';
import { gsap, useGSAP } from '@/lib/gsap';
import { splitTextToParagraphs } from '@/utils/utils';
import { useRef } from 'react';
import s from './about-section.module.scss';

// @======================== AboutSection ========================@ //

function AboutSection(): React.JSX.Element {

  const refs = {
    section: useRef<HTMLDivElement | null>(null),
    heading: useRef<HTMLDivElement | null>(null),
    textBox: useRef<HTMLDivElement | null>(null),
    skillsHeading: useRef<HTMLHeadingElement | null>(null),
    skillsRows: useRef<(HTMLDivElement | null)[]>([]),
    button: useRef<HTMLDivElement | null>(null)
  };

  useGSAP(() => {
    [refs.heading.current, refs.textBox.current, refs.skillsHeading.current, refs.skillsRows.current, refs.button.current].forEach((element) => {
      gsap.to(element, {
        opacity: 0,
        yPercent: -50,
        stagger: 0.1,
        scrollTrigger: {
          trigger: element,
          start: '50% 25%',
          end: '50% 0%',
          scrub: 1,
        }
      });
    });
  });

  const { handleTransition } = useTransitionLink();

  return (
    <section className={s.section} id='about' ref={refs.section}>
      <Container>
        <div className={s.inner} >
          <div className={s.header} >
            <div className={s.info} >
              <Heading className={s.heading} ref={refs.heading}>
                Hi! My name is Alex and I am a frontend developer
              </Heading>
              <div className={s.textBox} ref={refs.textBox}>
                {splitTextToParagraphs(aboutSectionText).map((paragraph, index) => (
                  <p key={index} className={s.text}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <Skills data={SKILLS_CONCISE} refs={{ heading: refs.skillsHeading, itemRows: refs.skillsRows }} />
          </div>
          <div ref={refs.button}>
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
        </div>
      </Container>
    </section >
  );
}
export default AboutSection;