import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Blogs } from './components/sections/Blogs';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg font-body text-dark selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="container mx-auto px-4">
        <Hero />
      </main>

      <Skills />

      <main className="container mx-auto px-4">
        <Projects />
      </main>

      <Blogs />

      <main className="container mx-auto px-4">
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
