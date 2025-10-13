import WorksList from '@/components/layout/works-list/works-list';
import Container from '@/components/shared/container/container';
import Heading from '@/components/ui/heading/heading';
import { WORKS } from '@/data/works';
import s from './works-hero.module.scss';

// @======================== WorksHero ========================@ //

function WorksHero(): React.JSX.Element {
  return (
    <section className={s.works_hero}>
      <Container>
        <Heading className={s.heading}>
          My Works
        </Heading>
        <WorksList worksList={WORKS} />
      </Container>
    </section>
  );
}
export default WorksHero;