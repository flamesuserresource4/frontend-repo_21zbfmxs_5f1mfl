import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#0b1220] antialiased">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
