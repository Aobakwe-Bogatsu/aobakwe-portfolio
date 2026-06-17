import React from 'react';
import { ThemeProvider } from '../lib/ThemeContext';
import Navbar from '../components/portfolio/Navbar';
import HeroSection from '../components/portfolio/HeroSection';
import AboutSection from '../components/portfolio/AboutSection';
import SkillsSection from '../components/portfolio/SkillsSection';
import ProjectsSection from '../components/portfolio/ProjectsSection';
import ExperienceSection from '../components/portfolio/ExperienceSection';
import EducationSection from '../components/portfolio/EducationSection';
import ContactSection from '../components/portfolio/ContactSection';
import Footer from '../components/portfolio/Footer';
import CursorGlow from '../components/portfolio/CursorGlow';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-background text-foreground noise-overlay">
        <CursorGlow />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}