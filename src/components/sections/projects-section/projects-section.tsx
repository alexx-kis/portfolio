'use client';

import Container from '@/components/layout/container/container';
import ProjectsList from '@/components/layout/projects-list/projects-list';
import Heading from '@/components/ui/heading/heading';
import MainButton from '@/components/ui/main-button/main-button';
import { AppRoute, basePath } from '@/constants/const';
import { PROJECTS } from '@/data/projects';
import { useTransitionLink } from '@/hooks/use-transition-link';
import s from './projects-section.module.scss';

// @======================== ProjectsSection ========================@ //

function ProjectsSection(): React.JSX.Element {

  const projectsList = PROJECTS.slice(0, 4);
  const { handleTransition } = useTransitionLink();

  return (
    <section className={s['projects-section']} id='projects'>
      <Container>
        <div className={s.inner}>
          <Heading className={s.heading}>My projects</Heading>
          <MainButton
            className={s.button}
            href={AppRoute.PROJECTS}
            text='See more'
            iconPath={`${basePath}/img/icons/go-to-arrow.svg`}
            onMainButtonClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              handleTransition(e, AppRoute.PROJECTS);
            }}
          />
          <ProjectsList projects={projectsList} className={s.list} />
        </div>
      </Container>
    </section>
  );
}
export default ProjectsSection;