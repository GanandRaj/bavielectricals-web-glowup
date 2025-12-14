import { ExternalLink } from 'lucide-react';
import { memo, useState } from 'react';
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
    <section id="projects" className="py-16 bg-gradient-to-br from-background to-muted/30">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ProjectCard = () => {
              const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
              return (
                <div 
                  ref={elementRef as React.RefObject<HTMLDivElement>}
                  key={project.id}
                  className={`group bg-card/90 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-3 hover:rotate-1 cursor-pointer ${
                    isVisible ? 'animate-fade-in animate-scale-in opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    transition: 'var(--transition-smooth)',
                    animationDelay: `${index * 150}ms`
                  }}
                >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.buildingName}
                  className={`w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 ${project.id === 2 ? 'object-top' : ''}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 relative">
                <h3 className="text-xl font-['Fredoka'] font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.buildingName}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-card-foreground/80 transition-colors duration-300">
                  {project.address}
                </p>
                <a 
                  href={project.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors duration-300 group-hover:translate-x-1"
                >
                  View on Maps
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </a>
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-transparent transition-all duration-500"></div>
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
