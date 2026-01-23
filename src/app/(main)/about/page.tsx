import Certificates from '@/components/layout/certificates/certificates';
import Skills from '@/components/layout/skills/skills';
import AboutHero from '@/components/sections/about-hero/about-hero';
import Container from '@/components/shared/container/container';
import { SKILLS_EXPANDED } from '@/data/skills';
import { Metadata } from 'next';

// #======================== AboutPage ========================# //

export const metadata: Metadata = {
  title: 'Portfolio - About',
};

function Page(): React.JSX.Element {
  return (
    <main>
      <AboutHero />

      <section>
        <Container>
          <Skills data={SKILLS_EXPANDED} />
        </Container>
      </section>

      <section>
        <Container>
          <Certificates />
        </Container>
      </section>
    </main >
  );
}
export default Page;