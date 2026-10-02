import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetaBar } from './components/MetaBar';
import { About } from './components/About';
import { DrivenResult } from './components/DrivenResult';
import { Showcase } from './components/Showcase';
import { SelectedWorks } from './components/SelectedWorks';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Clients } from './components/Clients';
import { Approach } from './components/Approach';
import { Awards } from './components/Awards';
import { Blogs } from './components/Blogs';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingBadge } from './components/FloatingBadge';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#0e0e0e', minHeight: '100vh', position: 'relative' }}>
      <Navbar />
      <main>
        <Hero />
        <MetaBar />
        <About />
        <DrivenResult />
        <Showcase />
        <SelectedWorks />
        <Services />
        <Testimonials />
        <Clients />
        <Approach />
        <Awards />
        <Blogs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingBadge />
    </div>
  );
};

export default App;
