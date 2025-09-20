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

interface FlipCarouselProps {
  projects: Project[];
}

const FlipCarousel: React.FC<FlipCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextSlide = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setIsFlipping(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setIsFlipping(false);
    }, 300);
  };

  const colorClasses = {
    primary: 'bg-primary/20 text-primary border-primary/30',
    secondary: 'bg-secondary/20 text-secondary border-secondary/30', 
    accent: 'bg-accent/20 text-accent border-accent/30'
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gradient-surface rounded-3xl overflow-hidden">
      <div 
        className="relative w-96 h-80"
        style={{ perspective: 'var(--perspective)' }}
      >
        {/* Main carousel container */}
        <div className="relative w-full h-full transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
          {projects.map((project, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;
            const isNext = index === (currentIndex + 1) % projects.length;
            
            let transform = '';
            let zIndex = 0;
            
            if (isActive) {
              transform = `translateZ(0px) rotateY(${isFlipping ? '90deg' : '0deg'})`;
              zIndex = 20;
            } else if (isPrev) {
              transform = 'translateX(-120%) translateZ(-100px) rotateY(-45deg)';
              zIndex = 10;
            } else if (isNext) {
              transform = 'translateX(120%) translateZ(-100px) rotateY(45deg)';
              zIndex = 10;
            } else {
              transform = 'translateZ(-200px) scale(0.8)';
              zIndex = 5;
            }

            return (
              <div
                key={project.id}
                className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-3d-xl transition-all duration-600 ease-3d ${
                  isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                }`}
                style={{
                  transform,
                  zIndex,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-surface-elevated to-background p-6 flex flex-col justify-between">
                  {/* Project Header */}
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{project.icon}</div>
                    <div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${colorClasses[project.color as keyof typeof colorClasses]}`}
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
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
                
                {/* Interactive border */}
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                  isActive 
                    ? 'border-secondary shadow-glow-secondary' 
                    : 'border-transparent hover:border-secondary/50'
                }`} />
                
                {/* Click area for navigation */}
                {(isPrev || isNext) && (
                  <button
                    onClick={isPrev ? prevSlide : nextSlide}
                    className="absolute inset-0 w-full h-full bg-transparent hover:bg-primary/10 transition-colors duration-300 z-10"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={isFlipping}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-surface-elevated/90 backdrop-blur-md border border-card-border hover:border-secondary/50 text-foreground hover:text-secondary transition-all duration-300 hover:scale-110 hover:shadow-glow-secondary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        disabled={isFlipping}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-surface-elevated/90 backdrop-blur-md border border-card-border hover:border-secondary/50 text-foreground hover:text-secondary transition-all duration-300 hover:scale-110 hover:shadow-glow-secondary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isFlipping) {
                setIsFlipping(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsFlipping(false);
                }, 300);
              }
            }}
            disabled={isFlipping}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-secondary shadow-glow-secondary scale-125' 
                : 'bg-muted hover:bg-secondary/50 hover:scale-110'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FlipCarousel;