'use client';

import WorksList from '@/components/layout/works-list/works-list';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath } from '@/constants/const';
import { WORKS } from '@/data/works';
import { useTransitionLink } from '@/hooks/use-transition-link';
import './works-section.scss';

// @======================== WorksSection ========================@ //

function WorksSection(): React.JSX.Element {

  const worksList = WORKS.slice(0, 4);
  const { handleTransition } = useTransitionLink();

  return (
    <section className='works scroll' id='works'>
      <div className='container'>
        <div className='works__inner'>
          <h2 className='works__heading heading'>My works</h2>
          <WorksList worksList={worksList} />
          <MainButton
            className='works__button'
            href={AppRoute.WORKS}
            text='See more'
            iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
            onMainButtonClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              handleTransition(e, AppRoute.WORKS);
            }}
          />
        </div>
      </div>
    </section>
  );
}
export default WorksSection;