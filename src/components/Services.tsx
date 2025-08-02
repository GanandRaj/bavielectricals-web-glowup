
import { Cpu, Smartphone, Wifi, Settings, ShieldCheck, Headphones } from 'lucide-react';
import { memo, useEffect, useState, useRef } from 'react';

const Services = memo(() => {
  const [bannerOpen, setBannerOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setBannerOpen(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: '-100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: "Smart Home Solutions",
      description: "Modern home automation and smart electrical systems for enhanced comfort and efficiency."
    },
    {
      icon: Cpu,
      title: "Advanced Installations",
      description: "High-tech electrical installations using cutting-edge technology and premium components."
    },
    {
      icon: Wifi,
      title: "Network & Connectivity",
      description: "Professional network wiring and connectivity solutions for seamless digital integration."
    },
    {
      icon: Settings,
      title: "System Maintenance",
      description: "Comprehensive maintenance services to keep your electrical systems running optimally."
    },
    {
      icon: ShieldCheck,
      title: "Safety & Compliance",
      description: "Thorough safety inspections and compliance checks to ensure maximum protection."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency services for critical electrical issues."
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-muted/30 relative overflow-hidden min-h-screen">
      
      {/* Door Banner */}
      <div className={`absolute inset-0 z-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 transition-transform duration-1000 ease-in-out ${bannerOpen ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-primary-foreground">
            <h2 className="text-6xl md:text-8xl font-poppins font-bold mb-4">
              Our Services
            </h2>
            <div className="w-32 h-1 bg-primary-foreground/80 mx-auto rounded-full"></div>
            <p className="text-xl mt-8 opacity-80">Scroll to reveal our expertise</p>
          </div>
        </div>
        
        {/* Door Handle */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2">
          <div className="w-6 h-12 bg-primary-foreground/20 rounded-full"></div>
          <div className="w-3 h-3 bg-primary-foreground/40 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Services Content */}
      <div className={`relative z-10 transition-opacity duration-700 ${bannerOpen ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center mb-16 pt-8">
          <h2 className="text-5xl md:text-6xl font-poppins font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Cutting-edge electrical solutions powered by modern technology and innovation
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 ${bannerOpen ? 'animate-slide-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-poppins font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
