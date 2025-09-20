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

interface CardStack3DProps {
  projects: Project[];
}

const CardStack3D: React.FC<CardStack3DProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const colorClasses = {
    primary: 'bg-primary/20 text-primary border-primary/30',
    secondary: 'bg-secondary/20 text-secondary border-secondary/30', 
    accent: 'bg-accent/20 text-accent border-accent/30'
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center bg-gradient-surface rounded-3xl overflow-hidden">
      <div 
        className="relative w-96 h-96"
        style={{ perspective: 'var(--perspective)' }}
      >
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          const offset = index - activeIndex;
          
          return (
            <div
              key={project.id}
              className={`absolute inset-0 w-full h-full cursor-pointer transform-gpu transition-all duration-700 ease-3d rounded-2xl overflow-hidden shadow-3d-lg ${
                isActive ? 'z-20' : 'z-10'
              }`}
              style={{
                transform: `
                  translateZ(${isActive ? 0 : -50 * Math.abs(offset)}px)
                  translateY(${offset * 20}px)
                  rotateX(${offset * 5}deg)
                  scale(${isActive ? 1 : 0.9 - Math.abs(offset) * 0.1})
                `,
                opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2,
              }}
              onClick={() => handleCardClick(index)}
            >
              <div className="relative w-full h-full group bg-gradient-to-br from-surface-elevated to-background p-6 flex flex-col">
                
                {/* Project Header */}
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3 group-hover:animate-float-3d">
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
                
                {/* Glow border effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                  isActive 
                    ? 'border-primary shadow-glow-primary' 
                    : 'border-transparent group-hover:border-primary/40 group-hover:shadow-glow-primary'
                }`} />
                
                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-40" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Stack indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col space-y-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? 'bg-primary shadow-glow-primary' 
                : 'bg-muted hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardStack3D;