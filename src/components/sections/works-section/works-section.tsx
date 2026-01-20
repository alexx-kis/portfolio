'use client';

import Container from '@/components/layout/container/container';
import WorksList from '@/components/layout/works-list/works-list';
import Heading from '@/components/ui/heading/heading';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath } from '@/constants/const';
import { WORKS } from '@/data/works';
import { useTransitionLink } from '@/hooks/use-transition-link';
import s from './works-section.module.scss';

// @======================== WorksSection ========================@ //

function WorksSection(): React.JSX.Element {

  const worksList = WORKS.slice(0, 4);
  const { handleTransition } = useTransitionLink();

  return (
    <section className={s['works-section']} id='works'>
      <Container>
        <div className={s.inner}>
          <Heading className={s.heading}>My works</Heading>
          <WorksList worksList={worksList} />
          <MainButton
            className={s.button}
            href={AppRoute.WORKS}
            text='See more'
            iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
            onMainButtonClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              handleTransition(e, AppRoute.WORKS);
            }}
          />
        </div>
      </Container>
    </section>
  );
}
export default WorksSection;