import { Zap, Home, Building, Wrench, Shield, Clock, ChevronUp, Power, Settings, AlertTriangle } from 'lucide-react';
import { memo, useEffect, useState, useRef } from 'react';

const Services = memo(() => {
  // Force rebuild to clear cache
  const [bannerVisible, setBannerVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          // Minimal delay for better UX
          setTimeout(() => {
            setBannerVisible(false);
          }, 1500); // 1.5s delay - much faster
        } else if (entry.intersectionRatio < 0.1) {
          // Reset when mostly leaving the section
          setBannerVisible(true);
        }
      },
      { 
        threshold: [0, 0.1, 0.3, 0.5, 1],
        rootMargin: '-10px 0px -10px 0px'
      }
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
      description: "Complete electrical services for your home including wiring, outlets, lighting, and panel upgrades.",
      iconBg: "bg-blue-100"
    },
    {
      icon: Building,
      title: "Commercial Electrical",
      description: "Professional electrical solutions for businesses, offices, and commercial properties.",
      iconBg: "bg-green-100"
    },
    {
      icon: Wrench,
      title: "Electrical Repairs",
      description: "Fast and reliable electrical repair services for all your electrical problems.",
      iconBg: "bg-orange-100"
    },
    {
      icon: Settings,
      title: "Installation Services",
      description: "Expert installation of electrical fixtures, ceiling fans, outlets, and switches.",
      iconBg: "bg-purple-100"
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure your property is up to code.",
      iconBg: "bg-red-100"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Services",
      description: "24/7 emergency electrical services for urgent electrical issues and outages.",
      iconBg: "bg-indigo-100"
    }
  ];

  return (
    <>
      <section ref={sectionRef} id="services" className="py-20 bg-muted/30 relative overflow-hidden min-h-screen">
        {/* Door-like Banner */}
        <div 
          className={`absolute inset-0 z-10 bg-gradient-to-br from-[#d9c1a6] via-[#d9c1a6] to-[#b8a081] flex items-center justify-center transition-all duration-700 ease-out transform ${
            bannerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-8">
            {/* Gearbox Animation */}
            <div className="gearbox">
              <div className="overlay"></div>
              <div className="gear one">
                <div className="gear-inner">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
              <div className="gear two">
                <div className="gear-inner">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
              <div className="gear three">
                <div className="gear-inner">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
              <div className="gear four large">
                <div className="gear-inner">
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 border border-white/30 shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-500 hover:bg-white/30 animate-fade-in">
                <h2 className="text-6xl md:text-7xl font-['Fredoka'] font-bold text-[#3c2a39] mb-6 tracking-tight cursor-default hover:animate-pulse">
                  Our Services
                </h2>
                <div className="w-40 h-1 bg-gradient-to-r from-[#3c2a39] to-[#3c2a39]/50 mx-auto rounded-full mb-4 hover:animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Content */}
        <div className="relative z-0">
          <div className="pt-8 pb-10">
            <div className="text-center mb-16">
              <p className="text-2xl md:text-3xl font-['Fredoka'] font-medium text-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
                From simple repairs to complex installations, we provide comprehensive electrical services with the highest standards of safety and quality
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-[#3c2a39] to-[#3c2a39]/50 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="group bg-card backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl ${service.iconBg}`}>
                      <service.icon className="h-7 w-7 text-muted-foreground transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                    <h3 className="text-xl font-['Fredoka'] font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 text-sm">
                      {service.description}
                    </p>
                    <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-transparent transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5 group-hover:animate-bounce" />
      </button>
    </>
  );
});

export default Services;