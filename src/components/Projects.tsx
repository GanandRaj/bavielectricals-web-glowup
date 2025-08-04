
import { ExternalLink, MapPin, Calendar, Award } from 'lucide-react';
import { memo } from 'react';
import { LazyImage } from './LazyImage';

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
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-['Fredoka'] font-bold text-foreground mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing our commitment to excellence through quality electrical installations 
            and innovative solutions across residential and commercial properties.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-card rounded-2xl shadow-lg border border-border/50 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <LazyImage
                  src={project.image} 
                  alt={project.buildingName}
                  className={`w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 ${project.id === 2 ? 'object-top' : ''}`}
                  placeholder="Loading..."
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-primary-foreground">Completed</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-['Fredoka'] font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.buildingName}
                  </h3>
                  <Calendar className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">
                    {project.address}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-300 group/link"
                  >
                    View Location
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-xs font-bold text-primary">#{project.id}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
