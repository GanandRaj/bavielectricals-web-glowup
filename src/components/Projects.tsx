import { ExternalLink, MapPin, ArrowRight } from 'lucide-react';
import { memo } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from './ui/button';

const Projects = memo(() => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  const projects = [
    {
      id: 1,
      buildingName: "Residential Complex",
      address: "Hyderabad, Telangana",
      mapsLink: "https://maps.google.com/?q=Hyderabad+Telangana",
      image: "/lovable-uploads/c53a0bed-6d69-4571-a17b-44becfb58138.png",
      category: "Residential"
    },
    {
      id: 2,
      buildingName: "Conventions Grand",
      address: "Hyderabad, Telangana", 
      mapsLink: "https://maps.google.com/?q=Hyderabad+Telangana",
      image: "/lovable-uploads/a39b69f5-f455-43d3-9b75-778d21a15bf4.png",
      category: "Commercial"
    },
    {
      id: 3,
      buildingName: "Jaihind Enclave",
      address: "Hyderabad, Telangana",
      mapsLink: "https://maps.google.com/?q=Hyderabad+Telangana", 
      image: "/lovable-uploads/faeb2ae0-ef65-4519-8f16-b949d562f4ce.png",
      category: "Residential"
    },
    {
      id: 4,
      buildingName: "Emergency Services Building",
      address: "321 Emergency Lane, City Center",
      mapsLink: "https://maps.google.com/?q=321+Emergency+Lane+City+Center",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      category: "Commercial"
    },
    {
      id: 5,
      buildingName: "Smart Home Villa",
      address: "654 Technology Street, Suburb",
      mapsLink: "https://maps.google.com/?q=654+Technology+Street+Suburb",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop",
      category: "Residential"
    },
    {
      id: 6,
      buildingName: "Safety Inspection Center",
      address: "987 Safety Boulevard, Metro Area",
      mapsLink: "https://maps.google.com/?q=987+Safety+Boulevard+Metro+Area",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=500&h=300&fit=crop",
      category: "Industrial"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Recent Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our completed electrical projects showcasing 
            our commitment to quality, safety, and professional excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const ProjectCard = () => {
              const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
              return (
                <div 
                  ref={elementRef as React.RefObject<HTMLDivElement>}
                  className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover-lift ${
                    isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.buildingName}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        project.id === 2 ? 'object-top' : ''
                      }`}
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                      {project.category}
                    </span>

                    {/* Hover Content */}
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <a 
                        href={project.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-foreground font-medium hover:underline"
                      >
                        <MapPin className="h-4 w-4" />
                        View on Maps
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.buildingName}
                    </h3>
                    <p className="text-muted-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      {project.address}
                    </p>
                  </div>
                </div>
              );
            };
            return <ProjectCard key={project.id} />;
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="font-semibold px-8 py-6 rounded-xl hover-lift"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
});

export default Projects;
