
import { Zap, Home, Building, Wrench, Shield, Clock } from 'lucide-react';
import { memo, useEffect, useState, useRef } from 'react';

const Services = memo(() => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [showServices, setShowServices] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          // Delay the banner lift to let users see the banner content
          setTimeout(() => {
            setBannerVisible(false);
            setTimeout(() => setShowServices(true), 800); // Services appear after banner lifts
          }, 1200); // 1.2s delay to read banner
        } else if (!entry.isIntersecting) {
          // Reset when leaving the section
          setBannerVisible(true);
          setShowServices(false);
        }
      },
      { threshold: [0, 0.4, 1] }
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
    <section ref={sectionRef} id="services" className="py-20 bg-muted/30 relative overflow-hidden min-h-screen">
      {/* Door-like Banner */}
      <div 
        className={`absolute inset-0 z-50 bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex items-center justify-center transition-transform duration-1000 ease-in-out ${
          bannerVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="text-center px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-6xl md:text-7xl font-poppins font-bold text-white mb-6 tracking-tight">
              Our Services
            </h2>
            <div className="w-40 h-1 bg-white/80 mx-auto rounded-full mb-4"></div>
            <p className="text-white/90 text-xl font-light max-w-md mx-auto">
              Professional electrical solutions for every need
            </p>
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className={`transition-all duration-1000 ease-out ${showServices ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
        <div className="pt-20 pb-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-poppins font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
              What We Offer
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`group bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 ${
                    showServices ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: showServices ? `${index * 0.15}s` : '0s' }}
                >
                  <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
