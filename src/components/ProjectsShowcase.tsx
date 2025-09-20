import React, { useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import CubeCarousel from './CubeCarousel';
import CardStack3D from './CardStack3D';
import FlipCarousel from './FlipCarousel';
import PerspectiveSlider from './PerspectiveSlider';

const projects = [
  {
    id: 'ai-lol',
    title: 'AI + ML for League of Legends',
    description: 'Analyzed 10k+ matches with Riot API, trained ML models (XGBoost, NN) for real-time win probability prediction and AI coaching with Caedrel-style tips.',
    icon: '🎮🏆⚔️',
    tech: ['Python', 'Scikit-learn', 'PyTorch', 'XGBoost', 'RiotAPI'],
    category: 'AI/ML',
    color: 'primary'
  },
  {
    id: 'mlops-youtube',
    title: 'MLOps – YouTube Sentiment',
    description: 'End-to-end pipeline for YouTube comment sentiment. Integrated AWS (S3, Lambda), MLflow, Docker, DVC with real-time Chrome extension interface.',
    icon: '▶️🔴YT',
    tech: ['Python', 'AWS', 'Docker', 'MLflow', 'DVC'],
    category: 'MLOps',
    color: 'secondary'
  },
  {
    id: '4health',
    title: '4Health Web App',
    description: 'Team-based project to monitor daily health indicators (steps, sleep, calories, weight). Features graphs and authentication.',
    icon: '🏥🚑🏨',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'Web App',
    color: 'accent'
  },
  {
    id: 'aws-chatbot',
    title: 'AWS Serverless Chatbot',
    description: 'A serverless chatbot leveraging AWS Lambda, API Gateway, and DynamoDB for scalable conversational AI.',
    icon: '🤖☁️',
    tech: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
    category: 'Cloud',
    color: 'primary'
  },
  {
    id: 'portfolio',
    title: '3D Portfolio Website',
    description: 'Interactive portfolio site with React, Tailwind, and CSS 3D transforms (cube, flip, stack, perspective).',
    icon: '🌟💻',
    tech: ['React', 'TypeScript', 'CSS 3D', 'Tailwind'],
    category: 'Frontend',
    color: 'secondary'
  },
  {
    id: 'battle-legends',
    title: 'Battle Legends',
    description: 'Multiplayer TypeScript game with real-time mechanics, inspired by classic arena combat.',
    icon: '⚔️👾',
    tech: ['TypeScript', 'WebSockets'],
    category: 'Game',
    color: 'accent'
  },
  {
    id: 'reversi-game',
    title: 'Reversi Game',
    description: 'Java-based implementation of the board game Reversi with an AI opponent.',
    icon: '♟️🕹️',
    tech: ['Java'],
    category: 'Game',
    color: 'primary'
  },
  {
    id: 'student-quiz',
    title: 'Student Quiz System',
    description: 'CLI-based quiz management system for Newcastle College with teacher and student views.',
    icon: '📚📝',
    tech: ['Java'],
    category: 'Backend',
    color: 'secondary'
  },
  {
    id: 'rental-validator',
    title: 'Rental Validator',
    description: 'Python script to validate property rental listings with regex and data validation rules.',
    icon: '🏠🐍',
    tech: ['Python'],
    category: 'Utility',
    color: 'accent'
  },
  {
    id: 'page-rank',
    title: 'PageRank Algorithm',
    description: 'Implemented Google’s PageRank in Python for graph ranking experiments.',
    icon: '🔗📊',
    tech: ['Python'],
    category: 'Algorithms',
    color: 'primary'
  },
  {
    id: 'auction-house',
    title: 'Auction House System',
    description: 'Java system simulating auctions with bidding, persistence, and user management.',
    icon: '💰🔨',
    tech: ['Java'],
    category: 'Backend',
    color: 'secondary'
  },
  {
    id: 'ipc',
    title: 'Inter-Process Communication',
    description: 'Java examples implementing IPC with sockets and shared memory.',
    icon: '💻🔌',
    tech: ['Java'],
    category: 'Systems',
    color: 'accent'
  },
  {
    id: 'walking-panda',
    title: 'Walking Panda 3D',
    description: 'Python-based 3D panda simulation with movement logic.',
    icon: '🐼🎨',
    tech: ['Python'],
    category: 'Graphics',
    color: 'primary'
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
