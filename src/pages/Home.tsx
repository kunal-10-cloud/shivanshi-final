import React from 'react';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <Contact />
    </main>
  );
};

export default Home; 