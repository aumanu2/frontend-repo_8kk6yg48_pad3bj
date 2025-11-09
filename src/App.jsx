import React from 'react';
import Hero from './components/Hero';
import Chapters from './components/Chapters';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7efe7] via-[#f8f1ee] to-[#e9f4f3] text-zinc-900">
      <Hero />
      <Chapters />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
