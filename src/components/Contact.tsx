import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Contact = () => {
  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'luqmanafiq135.laq@gmail.com',
      action: 'mailto:luqmanafiq135.la@gmail.com',
      color: 'primary'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Connect with me',
      action: 'https://linkedin.com/in/luqmanafiq',
      color: 'secondary'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'View my repositories',
      action: 'https://github.com/luqmanafiq',
      color: 'accent'
    }
  ];

  const skills = [
    'Full-Stack Development',
    'Machine Learning',
    'Data Science',
    'Cloud Computing',
    'MLOps',
    'AI Solutions'
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss opportunities in AI, software engineering, or data science.
            </p>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-surface-elevated border border-card-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Get In Touch</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  or collaborations in AI and software development.
                </p>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-card-border hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary group"
                    >
                      <div className="text-2xl mr-4 group-hover:animate-float-3d">
                        {method.icon}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{method.label}</div>
                        <div className="text-sm text-muted-foreground">{method.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills & Availability */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-surface-elevated border border-card-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Available For</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-all duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="text-2xl font-bold text-primary mb-1">Open</div>
                    <div className="text-xs text-muted-foreground">To Opportunities</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                    <div className="text-2xl font-bold text-secondary mb-1">Ready</div>
                    <div className="text-xs text-muted-foreground">To Collaborate</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('mailto:luqmanafiq@example.com', '_self')}
                >
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
