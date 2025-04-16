import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get('section');

  useEffect(() => {
    if (section) {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        const element = document.getElementById(section === 'book-table' ? 'contact' : section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, [section]);

  return (
    <main>
      <Hero />
      <Menu />
      <About />
      <Contact />
    </main>
  );
};

export default Home; 