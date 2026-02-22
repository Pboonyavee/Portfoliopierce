import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the scrapbook animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#C0D2D8' }}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
