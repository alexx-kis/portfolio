import AboutSection from '@/components/sections/about-section/about-section';
import ProjectsSection from '@/components/sections/projects-section/projects-section';
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
      <ProjectsSection />
    </main>
  );
}
