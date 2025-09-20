import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-surface">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-3d" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-3d animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-glow-pulse animation-delay-1000" />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <div className="mb-6">
          <p className="text-lg text-primary mb-2 animate-fade-in">
            Hello World, my name is
          </p>
          <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-scale-in">
            Luqman Afiq
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in animation-delay-500">
            Welcome to my Sanctuary.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12 animate-fade-in animation-delay-1000">
          <p className="text-lg text-muted-foreground mb-6">
            I'm a software engineering grad at Newcastle University, specializing in software development, AI, and love Data. 
            This is the place where I like to store all my projects from freeCodeCamp using AI.
          </p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface-elevated border border-card-border">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse mr-3" />
            <span className="text-sm font-medium">Graduate Software Engineer</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in animation-delay-1500">
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
          >
            Check out my work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          >
            About Me
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;