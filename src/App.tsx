
import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Courses } from './components/sections/Courses';
import { Blogs } from './components/sections/Blogs';
import { Contact } from './components/sections/Contact';
import { LaptopLoader } from './components/ui/LaptopLoader';

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LaptopLoader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen font-body text-dark selection:bg-primary selection:text-white overflow-x-clip relative">
      {/* Premium Ambient Background Blobs */}
      <div className="fixed top-[10%] left-[-10%] w-[40rem] h-[40rem] bg-sky-200/25 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="fixed bottom-[10%] right-[-15%] w-[45rem] h-[45rem] bg-orange-100/30 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '13s' }} />

      <Navbar />

      <main className="container mx-auto px-6 max-w-7xl pt-28 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Sticky profile overview (Hero) */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28 lg:self-start animate-fade-in">
            <Hero />
          </div>

          {/* Right Column: Scrollable detail sections */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <Projects />
            <Skills />
            <Courses />
            <Blogs />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
