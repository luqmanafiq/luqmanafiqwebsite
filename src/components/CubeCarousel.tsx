import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  tech: string[];
  category: string;
  color: string;
}

interface CubeCarouselProps {
  projects: Project[];
}

const CubeCarousel: React.FC<CubeCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const colorClasses = {
    primary: 'bg-primary/20 text-primary border-primary/30',
    secondary: 'bg-secondary/20 text-secondary border-secondary/30', 
    accent: 'bg-accent/20 text-accent border-accent/30'
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-surface rounded-3xl overflow-hidden">
      {/* 3D Scene Container */}
      <div 
        className="relative w-80 h-80 transform-gpu"
        style={{ 
          perspective: 'var(--perspective)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* 3D Cube */}
        <div 
          className="relative w-full h-full transform-gpu transition-transform duration-700 ease-3d"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(${-currentIndex * 72}deg)`
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-3d-xl"
              style={{
                transform: `rotateY(${index * 72}deg) translateZ(200px)`,
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-surface-elevated to-background p-6 flex flex-col justify-between">
                {/* Project Header */}
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{project.icon}</div>
                  <div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs mb-2 ${colorClasses[project.color as keyof typeof colorClasses]}`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-muted/20 text-muted-foreground border-muted/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-muted/20 text-muted-foreground">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary/20 hover:border-primary/50 hover:bg-primary/10"
                >
                  View Project
                </Button>
              </div>
              
              {/* Interactive glow border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 hover:border-primary/60 hover:shadow-glow-primary transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface-elevated/80 backdrop-blur-md border border-card-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface-elevated/80 backdrop-blur-md border border-card-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-glow-primary"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary shadow-glow-primary scale-125' 
                : 'bg-muted hover:bg-primary/50 hover:scale-110'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CubeCarousel;