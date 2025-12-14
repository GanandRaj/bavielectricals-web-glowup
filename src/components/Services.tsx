import { Zap, Home, Building, Wrench, Shield, AlertTriangle, ChevronUp, ArrowRight } from 'lucide-react';
import { memo, useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from './ui/button';

const Services = memo(() => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          setTimeout(() => setBannerVisible(false), 3000);
        } else if (entry.intersectionRatio < 0.1) {
          setBannerVisible(true);
        }
      },
      { threshold: [0, 0.1, 0.3, 0.5, 1], rootMargin: '-10px 0px -10px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Home,
      title: "Residential Electrical",
      description: "Complete electrical services for your home including wiring, outlets, lighting, and panel upgrades.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Building,
      title: "Commercial Electrical",
      description: "Professional electrical solutions for businesses, offices, and commercial properties.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Wrench,
      title: "Electrical Repairs",
      description: "Fast and reliable electrical repair services for all your electrical problems.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Installation Services",
      description: "Expert installation of electrical fixtures, ceiling fans, outlets, and switches.",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure your property is up to code.",
      color: "from-rose-500 to-red-600",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Services",
      description: "24/7 emergency electrical services for urgent electrical issues and outages.",
      color: "from-cyan-500 to-teal-600",
    }
  ];

  return (
    <>
      <section ref={sectionRef} id="services" className="relative min-h-screen bg-muted/30 overflow-hidden">
        {/* Animated Banner */}
        <div 
          className={`absolute inset-0 z-10 flex items-center justify-center transition-transform duration-1000 ease-out ${
            bannerVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ backgroundColor: '#1e3a5f' }}
        >
          <div className="flex flex-col items-center justify-center gap-6 px-4 text-center">
            <div className="w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
              <img 
                src="/lovable-uploads/6e356e31-f9f6-463b-b6ca-4472f5dd4a83.png" 
                alt="Our Services" 
                className="max-w-full max-h-full object-contain animate-float"
              />
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-primary-foreground tracking-tight">
              Our Services
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-md">
              Scroll to explore our comprehensive electrical solutions
            </p>
          </div>
        </div>

        {/* Services Content */}
        <div className="relative z-0 section-padding">
          {/* Section Header */}
          <div 
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 transition-all duration-700 ${
              headerVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Comprehensive Electrical Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From simple repairs to complex installations, we provide end-to-end electrical services 
              with the highest standards of safety and quality
            </p>
          </div>

          {/* Services Grid */}
          <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => {
                const ServiceCard = () => {
                  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
                  return (
                    <div 
                      ref={elementRef as React.RefObject<HTMLDivElement>}
                      className={`group relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-all duration-500 hover-lift ${
                        isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm">Learn more</span>
                        <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  );
                };
                return <ServiceCard key={index} />;
              })}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-xl hover-lift"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus-ring"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </>
  );
});

export default Services;
