
import { Zap, Home, Building, Wrench, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Electrical",
      description: "Complete electrical services for your home including wiring, outlets, lighting, and panel upgrades."
    },
    {
      icon: Building,
      title: "Commercial Electrical",
      description: "Professional electrical solutions for businesses, offices, and commercial properties."
    },
    {
      icon: Zap,
      title: "Electrical Repairs",
      description: "Fast and reliable electrical repair services for all your electrical problems."
    },
    {
      icon: Wrench,
      title: "Installation Services",
      description: "Expert installation of electrical fixtures, ceiling fans, outlets, and switches."
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure your property is up to code."
    },
    {
      icon: Clock,
      title: "Emergency Services",
      description: "24/7 emergency electrical services for urgent electrical issues and outages."
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)'
             }}>
      {/* 3D Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text mb-4"
              style={{
                textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                filter: 'drop-shadow(0 4px 20px rgba(59, 130, 246, 0.3))'
              }}>
            Our Electrical Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            From simple repairs to complex installations, we provide comprehensive electrical services 
            with the highest standards of safety and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 hover:rotate-x-12"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.15)',
                transformStyle: 'preserve-3d',
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  rgba(255, 255, 255, 0.05) 50%, 
                  rgba(255, 255, 255, 0.02) 100%
                )`
              }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-z-4"
                   style={{ transformStyle: 'preserve-3d' }}>
                <service.icon className="h-8 w-8 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
              
              {/* 3D Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
