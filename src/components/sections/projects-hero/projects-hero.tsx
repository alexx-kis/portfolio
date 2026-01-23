import ProjectsList from '@/components/layout/projects-list/projects-list';
import Container from '@/components/shared/container/container';
import Heading from '@/components/ui/heading/heading';
import { PROJECTS } from '@/data/projects';
import s from './projects-hero.module.scss';

// @======================== ProjectsHero ========================@ //

function ProjectsHero(): React.JSX.Element {
  return (
    <section className={s['projects-hero']}>
      <Container>
        <Heading className={s.heading}>
          My Projects
        </Heading>
        <ProjectsList projects={PROJECTS} className={s.list} />
      </Container>
    </section>
  );
}
export default ProjectsHero;