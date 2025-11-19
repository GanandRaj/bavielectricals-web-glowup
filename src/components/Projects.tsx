import { ExternalLink, MapPin } from 'lucide-react';
import { memo } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const Projects = memo(() => {
  const projects = [
    {
      id: 1,
      buildingName: "Residential Complex",
      address: "Hyderabad, Telangana",
      mapsLink: "https://maps.google.com/?q=Hyderabad+Telangana",
      image: "/lovable-uploads/c53a0bed-6d69-4571-a17b-44becfb58138.png"
    },
    {
      id: 2,
      buildingName: "Conventions Grand",
      address: "Hyderabad, Telangana", 
      mapsLink: "https://maps.google.com/?q=Hyderabad+Telangana",
      image: "/lovable-uploads/a39b69f5-f455-43d3-9b75-778d21a15bf4.png"
    },
    {
      id: 3,
      buildingName: "Jaihind Enclave",
      address: "Hyderabad, Telangana",
      mapsLink: "https://maps.google.com/?q=Hyderabad+Telangana", 
      image: "/lovable-uploads/faeb2ae0-ef65-4519-8f16-b949d562f4ce.png"
    },
    {
      id: 4,
      buildingName: "Emergency Services Building",
      address: "321 Emergency Lane, City Center",
      mapsLink: "https://maps.google.com/?q=321+Emergency+Lane+City+Center",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop"
    },
    {
      id: 5,
      buildingName: "Smart Home Villa",
      address: "654 Technology Street, Suburb",
      mapsLink: "https://maps.google.com/?q=654+Technology+Street+Suburb",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop"
    },
    {
      id: 6,
      buildingName: "Safety Inspection Center",
      address: "987 Safety Boulevard, Metro Area",
      mapsLink: "https://maps.google.com/?q=987+Safety+Boulevard+Metro+Area",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Fredoka'] font-bold text-foreground mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our completed electrical projects. Each project showcases 
            our commitment to quality, safety, and professional excellence.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const ProjectCard = () => {
              const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
              return (
                <div 
                  ref={elementRef as React.RefObject<HTMLDivElement>}
                  key={project.id}
                  className={`relative rounded-3xl border border-border/40 overflow-hidden transition-all duration-500 ${
                    isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    background: 'radial-gradient(circle at 0% 0%, hsl(var(--primary) / 0.15), transparent 50%), radial-gradient(circle at 100% 100%, hsl(var(--accent) / 0.12), transparent 60%), hsl(var(--card))'
                  }}
                >
                  {/* Top glow line */}
                  <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  
                  {/* Gradient ring */}
                  <div className="absolute w-40 h-40 -left-10 -top-10 bg-primary/30 rounded-full blur-3xl opacity-50 pointer-events-none" />
                  
                  <div className="relative p-6 grid grid-cols-[auto_1fr_auto] gap-5 items-start">
                    {/* Icon */}
                    <div className="flex-shrink-0 rounded-full p-2.5 bg-gradient-to-br from-card/50 to-card border border-primary/20 shadow-lg">
                      <MapPin className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    
                    {/* Text Content */}
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-foreground mb-1.5 tracking-tight">
                        {project.buildingName}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.address}
                      </p>
                    </div>
                    
                    {/* Action Button */}
                    <a
                      href={project.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 text-foreground hover:border-primary/50 hover:bg-primary/15 transition-all duration-300 shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      View
                    </a>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative mx-6 mb-5 h-1.5 rounded-full bg-card/80 border border-card overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/30 opacity-50" />
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-accent shadow-[0_0_12px_rgba(var(--primary),0.4)] relative overflow-hidden"
                      style={{ width: `${Math.min(85 + index * 3, 98)}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  </div>
                </div>
              );
            };
            return <ProjectCard key={project.id} />;
          })}
        </div>
      </div>
    </section>
  );
});

export default Projects;
