import WorksHero from '@/components/sections/works-hero/works-hero';
import { Metadata } from 'next';

// #======================== WorksPage ========================# //

export const metadata: Metadata = {
  title: "Portfolio - Works",
};

function Page(): React.JSX.Element {
  return (
    <main>
      <WorksHero />
    </main>
  );
}
export default Page;