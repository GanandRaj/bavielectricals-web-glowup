
import { Zap, Home, Building, Wrench, Shield, Clock } from 'lucide-react';
import { memo, useEffect, useState, useRef } from 'react';

const Services = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section ref={sectionRef} id="services" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Animated Banner */}
      <div className={`relative mb-16 ${isVisible ? 'animate-lift-up' : 'translate-y-24 opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="relative z-10 text-center py-8">
          <h2 className="text-5xl md:text-6xl font-poppins font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isVisible ? 'animate-slide-up' : 'translate-y-12 opacity-0'}`}>
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary" />
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
    </section>
  );
});

export default Services;
