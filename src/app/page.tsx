import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SkillsGalaxy from '@/components/SkillsGalaxy';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsGalaxy />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
