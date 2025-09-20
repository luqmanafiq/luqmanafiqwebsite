import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import CubeCarousel from './CubeCarousel';
import CardStack3D from './CardStack3D';
import FlipCarousel from './FlipCarousel';
import PerspectiveSlider from './PerspectiveSlider';

import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import CubeCarousel from './CubeCarousel';
import CardStack3D from './CardStack3D';
import FlipCarousel from './FlipCarousel';
import PerspectiveSlider from './PerspectiveSlider';

const projects = [
  {
    id: 'league-nlp',
    title: 'How to win League of Legends',
    description: 'Built a NLP helper for League of Legends using Python, PyTorch, and Flask. Integrated machine learning to analyze trends from large datasets, with a user-friendly dashboard for real-time updates.',
    icon: '🏆⚔️🎮',
    tech: ['PyTorch', 'Gradio', 'NLP', 'Neural Network', 'RiotAPI'],
    category: 'AI/ML',
    color: 'primary'
  },
  {
    id: 'mlops-youtube',
    title: 'MLOps Pipeline – YouTube Viewer Sentiment',
    description: 'Build an end-to-end MLOps pipeline that analyzes YouTube sentiment in real-time through a Chrome extension. Master modern ML tools like MLflow, DVC, Docker, and AWS while developing a complete solution from data collection to deployment.',
    icon: '▶️▶️YouTube🔴🔴▶',
    tech: ['Python', 'AWS', 'Docker', 'MLflow', 'DVC'],
    category: 'MLOps',
    color: 'secondary'
  },
  {
    id: 'health-app',
    title: '4Health Web App',
    description: 'A team-based web app to monitor daily health indicators (steps, sleep, calories, weight). Features interactive graphs and security measures, coordinated via GitHub.',
    icon: '🏥🚑✚🏨',
    tech: ['JavaScript', 'HTML', 'CSS', 'GitHub'],
    category: 'Web App',
    color: 'accent'
  },
  {
    id: 'serverless-bot',
    title: 'AWS Serverless Chatbot',
    description: 'A serverless chatbot built using AWS services for scalable and cost-effective conversational AI solutions.',
    icon: '🤖',
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Serverless'],
    category: 'Cloud',
    color: 'primary'
  },
  {
    id: 'portfolio',
    title: '3D Portfolio Website',
    description: 'This interactive portfolio website featuring stunning 3D sliders and modern design elements built with React and CSS 3D transforms.',
    icon: '🌟',
    tech: ['React', 'TypeScript', 'CSS 3D', 'Tailwind'],
    category: 'Frontend',
    color: 'secondary'
  }
];

const sliderComponents = [CubeCarousel, CardStack3D, FlipCarousel, PerspectiveSlider];

const ProjectsShowcase = () => {
  const [activeSlider, setActiveSlider] = useState(0);
  
  const ActiveSliderComponent = sliderComponents[activeSlider];

  const colorClasses = {
    primary: 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30',
    secondary: 'bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30',
    accent: 'bg-accent/20 text-accent border-accent/30 hover:bg-accent/30'
  };

  return (
    <section id="projects" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my projects through an interactive 3D experience. Each slider showcases different aspects of my work.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* 3D Slider Showcase */}
        <div className="mb-16">
          <ActiveSliderComponent projects={projects} />
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-surface-elevated border border-card-border">
            {['Cube', 'Stack', 'Flip', 'Perspective'].map((name, index) => (
              <Button
                key={name}
                onClick={() => setActiveSlider(index)}
                variant={activeSlider === index ? 'default' : 'ghost'}
                size="sm"
                className={`transition-all duration-300 ${
                  activeSlider === index 
                    ? 'bg-primary text-primary-foreground shadow-glow-primary' 
                    : 'hover:bg-surface'
                }`}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group p-6 rounded-2xl bg-surface-elevated border border-card-border hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-3d-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4 group-hover:animate-float-3d">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${colorClasses[project.color as keyof typeof colorClasses]}`}
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="text-xs bg-muted/20 text-muted-foreground border-muted/30 hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                View Project
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;

const sliderComponents = [CubeCarousel, CardStack3D, FlipCarousel, PerspectiveSlider];

const ProjectsShowcase = () => {
  const [activeSlider, setActiveSlider] = useState(0);
  
  const ActiveSliderComponent = sliderComponents[activeSlider];

  const colorClasses = {
    primary: 'bg-primary/20 text-primary border-primary/30 hover:bg-primary/30',
    secondary: 'bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary/30',
    accent: 'bg-accent/20 text-accent border-accent/30 hover:bg-accent/30'
  };

  return (
    <section id="projects" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my projects through an interactive 3D experience. Each slider showcases different aspects of my work.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* 3D Slider Showcase */}
        <div className="mb-16">
          <ActiveSliderComponent projects={projects} />
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap gap-2 p-2 rounded-2xl bg-surface-elevated border border-card-border">
            {['Cube', 'Stack', 'Flip', 'Perspective'].map((name, index) => (
              <Button
                key={name}
                onClick={() => setActiveSlider(index)}
                variant={activeSlider === index ? 'default' : 'ghost'}
                size="sm"
                className={`transition-all duration-300 ${
                  activeSlider === index 
                    ? 'bg-primary text-primary-foreground shadow-glow-primary' 
                    : 'hover:bg-surface'
                }`}
              >
                {name}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group p-6 rounded-2xl bg-surface-elevated border border-card-border hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-3d-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4 group-hover:animate-float-3d">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${colorClasses[project.color as keyof typeof colorClasses]}`}
                  >
                    {project.category}
                  </Badge>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="text-xs bg-muted/20 text-muted-foreground border-muted/30 hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                View Project
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
