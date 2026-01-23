import ProjectsHero from '@/components/sections/projects-hero/projects-hero';
import { Metadata } from 'next';

// #======================== WorksPage ========================# //

export const metadata: Metadata = {
  title: "Portfolio - Works",
};

function Page(): React.JSX.Element {
  return (
    <main>
      <ProjectsHero />
    </main>
  );
}
export default Page;