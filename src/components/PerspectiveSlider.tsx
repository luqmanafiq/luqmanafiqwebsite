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

interface PerspectiveSliderProps {
  projects: Project[];
}

const PerspectiveSlider: React.FC<PerspectiveSliderProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(projects.length / 2)); // Start in middle

  const handleSlideClick = (index: number) => {
    setCurrentIndex(index);
  };

  const colorClasses = {
    primary: 'bg-primary/20 text-primary border-primary/30',
    secondary: 'bg-secondary/20 text-secondary border-secondary/30', 
    accent: 'bg-accent/20 text-accent border-accent/30'
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-gradient-surface rounded-3xl overflow-hidden">
      <div 
        className="relative w-full h-96 flex items-center justify-center"
        style={{ perspective: '1500px' }}
      >
        {projects.map((project, index) => {
          const offset = index - currentIndex;
          const isActive = index === currentIndex;
          
          // Calculate position and rotation based on offset
          const translateX = offset * 200;
          const translateZ = -Math.abs(offset) * 100;
          const rotateY = offset * 15;
          const scale = isActive ? 1 : 0.8 - Math.abs(offset) * 0.1;
          const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2;

          return (
            <div
              key={project.id}
              className={`absolute w-72 h-80 cursor-pointer transform-gpu transition-all duration-700 ease-3d rounded-2xl overflow-hidden shadow-3d-lg ${
                isActive ? 'z-20' : 'z-10'
              }`}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
              }}
              onClick={() => handleSlideClick(index)}
            >
              <div className="relative w-full h-full group bg-gradient-to-br from-surface-elevated to-background p-6 flex flex-col">
                
                {/* Project Header */}
                <div className="flex items-center mb-3">
                  <div className="text-2xl mr-3 group-hover:animate-float-3d">
                    {project.icon}
                  </div>
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
                <div className="flex-1 mb-3">
                  <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 2).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs bg-muted/20 text-muted-foreground border-muted/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 2 && (
                      <Badge variant="outline" className="text-xs bg-muted/20 text-muted-foreground">
                        +{project.tech.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-xs border-primary/20 hover:border-primary/50 hover:bg-primary/10"
                >
                  View Project
                </Button>
                
                {/* Dynamic gradient overlay based on position */}
                <div 
                  className="absolute inset-0 transition-opacity duration-700 rounded-2xl"
                  style={{
                    background: `linear-gradient(${offset > 0 ? '90deg' : offset < 0 ? '270deg' : '0deg'}, 
                      transparent 0%, 
                      ${isActive ? 'transparent' : 'hsl(var(--background) / 0.3)'} 70%, 
                      ${isActive ? 'transparent' : 'hsl(var(--background) / 0.6)'} 100%)`
                  }}
                />
                
                {/* Interactive border */}
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                  isActive 
                    ? 'border-accent shadow-glow-accent' 
                    : 'border-transparent group-hover:border-accent/40'
                }`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-accent shadow-glow-accent scale-125' 
                : 'bg-muted hover:bg-accent/50 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Side navigation */}
      <button
        onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
        disabled={currentIndex === 0}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-surface-elevated/80 backdrop-blur-md border border-card-border hover:border-accent/50 text-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:shadow-glow-accent disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentIndex(Math.min(projects.length - 1, currentIndex + 1))}
        disabled={currentIndex === projects.length - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-surface-elevated/80 backdrop-blur-md border border-card-border hover:border-accent/50 text-foreground hover:text-accent transition-all duration-300 hover:scale-110 hover:shadow-glow-accent disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default PerspectiveSlider;