import AboutSection from '@/components/sections/about-section/about-section';
import WorksSection from '@/components/sections/works-section/works-section';
import { Metadata } from 'next';
import HeroSection from '../components/sections/hero-section/hero-section';

// #======================== HomePage ========================# //

export const metadata: Metadata = {
  title: "Portfolio Alex Kis",
};

export default function Page() {
  return (
    <main>
      <HeroSection />
        <AboutSection />
        <WorksSection />
      {/* <section className='sections-wrapper'>
      </section> */}
    </main>
  );
}
