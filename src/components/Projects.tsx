
import { ExternalLink } from 'lucide-react';

const Projects = () => {
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
    <section id="projects" className="py-20 relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, #4b5563 0%, #6b7280 50%, #9ca3af 100%)'
             }}>
      {/* 3D Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-cyan-500/10 to-green-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text mb-4"
              style={{
                textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                filter: 'drop-shadow(0 4px 20px rgba(59, 130, 246, 0.3))'
              }}>
            Our Recent Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            Take a look at some of our completed electrical projects that showcase our expertise 
            and commitment to quality workmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 border border-white/20"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(147, 51, 234, 0.15)',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                  src={project.image} 
                  alt={project.buildingName}
                  className={`w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ${project.id === 2 ? 'object-top' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.buildingName}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.address}
                </p>
                <a 
                  href={project.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25"
                  style={{
                    boxShadow: '0 8px 25px rgba(147, 51, 234, 0.3)'
                  }}
                >
                  View on Maps
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              {/* 3D Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
