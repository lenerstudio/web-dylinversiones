import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCarousel from './components/ProjectCarousel';
import TargetAudience from './components/TargetAudience';
import Problems from './components/Problems';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import Authority from './components/Authority';
import Guarantee from './components/Guarantee';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="font-sans text-brand-dark bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProjectCarousel />
        <TargetAudience />
        <Problems />
        <Services />
        <Benefits />
        <Offer />
        <Authority />
        <Testimonials />
        <Guarantee />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
