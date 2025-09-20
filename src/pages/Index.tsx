import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsShowcase from '../components/ProjectsShowcase';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <About />
        
        <ProjectsShowcase />
        
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-card-border bg-surface py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Luqman Afiq. Crafted with ❤️ using React, TypeScript & CSS 3D transforms.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
