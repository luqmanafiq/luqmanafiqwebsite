import React from 'react';
import { Badge } from './ui/badge';

const About = () => {
  const technologies = [
    { name: 'Python & PyTorch', category: 'AI/ML' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML & CSS', category: 'Frontend' },
    { name: 'C & Java', category: 'Backend' },
    { name: 'SQL', category: 'Database' },
    { name: 'AWS & Docker', category: 'Cloud' },
    { name: 'Apache', category: 'Server' },
    { name: 'Neural Network', category: 'AI/ML' },
    { name: 'XGBoost', category: 'AI/ML' },
  ];

  const categoryColors: Record<string, string> = {
    'AI/ML': 'bg-primary/20 text-primary border-primary/30',
    'Frontend': 'bg-secondary/20 text-secondary border-secondary/30',
    'Backend': 'bg-accent/20 text-accent border-accent/30',
    'Database': 'bg-muted/20 text-muted-foreground border-muted/30',
    'Cloud': 'bg-gradient-primary text-primary-foreground border-transparent',
    'Server': 'bg-surface-elevated text-foreground border-card-border',
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-surface-elevated border border-card-border hover:border-primary/30 transition-all duration-300 hover:shadow-3d">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Education & Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I graduated with <span className="text-primary font-semibold">BSc Computer Science (Software Engineering)</span> 
                  from Newcastle University with <span className="text-accent font-semibold">First-Class 1:1 Honours</span>. 
                  I'm passionate about building scalable, user-friendly applications that solve real-world problems.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-elevated border border-card-border hover:border-secondary/30 transition-all duration-300 hover:shadow-3d">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Passion & Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise lies at the intersection of <span className="text-secondary font-semibold">AI</span>, 
                  <span className="text-accent font-semibold"> Data Science</span>, and 
                  <span className="text-primary font-semibold"> Software Engineering</span>. 
                  I love creating intelligent solutions that leverage machine learning and modern web technologies.
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">
                Technologies I've worked with:
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow-primary ${
                      categoryColors[tech.category] || 'bg-muted/20 text-muted-foreground border-muted/30'
                    }`}
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <div className="text-2xl font-bold text-primary mb-1">1:1</div>
                  <div className="text-xs text-muted-foreground">Honours</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                  <div className="text-2xl font-bold text-secondary mb-1">AI/ML</div>
                  <div className="text-xs text-muted-foreground">Specialist</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <div className="text-2xl font-bold text-accent mb-1">Full-Stack</div>
                  <div className="text-xs text-muted-foreground">Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;