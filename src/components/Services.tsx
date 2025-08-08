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
          // Delay the banner lift to let users see the banner content
          setTimeout(() => {
            setBannerVisible(false);
          }, 3600); // 3.6s delay to read banner
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
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      hoverBg: "group-hover:bg-blue-500/20"
    },
    {
      icon: Building,
      title: "Commercial Electrical",
      description: "Professional electrical solutions for businesses, offices, and commercial properties.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      hoverBg: "group-hover:bg-green-500/20"
    },
    {
      icon: Wrench,
      title: "Electrical Repairs",
      description: "Fast and reliable electrical repair services for all your electrical problems.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      hoverBg: "group-hover:bg-yellow-500/20"
    },
    {
      icon: Settings,
      title: "Installation Services",
      description: "Expert installation of electrical fixtures, ceiling fans, outlets, and switches.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      hoverBg: "group-hover:bg-purple-500/20"
    },
    {
      icon: Shield,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure your property is up to code.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      hoverBg: "group-hover:bg-red-500/20"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Services",
      description: "24/7 emergency electrical services for urgent electrical issues and outages.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      hoverBg: "group-hover:bg-indigo-500/20"
    }
  ];

  return (
    <>
      <section ref={sectionRef} id="services" className="py-20 bg-muted/30 relative overflow-hidden min-h-screen">
        {/* Door-like Banner */}
        <div 
          className={`absolute inset-0 z-10 bg-[#3c2a39] flex items-center justify-center transition-transform duration-1000 ease-in-out ${
            bannerVisible ? 'translate-y-0' : '-translate-y-full'
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
              <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl animate-pulse hover:animate-none transform hover:scale-105 transition-all duration-500">
                <h2 className="text-6xl md:text-7xl font-['Fredoka'] font-bold text-white mb-6 tracking-tight animate-bounce cursor-default">
                  Our Services
                </h2>
                <div className="w-40 h-1 bg-gradient-to-r from-white to-white/50 mx-auto rounded-full mb-4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Content */}
        <div className="relative z-0">
          <div className="pt-20 pb-10">
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
                    className="group bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm rounded-xl p-4 border-2 border-border/50 hover:border-[#3c2a39]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#3c2a39]/20 hover:-translate-y-2 cursor-pointer transform hover:rotate-1"
                  >
                    <div className={`${service.bgColor} ${service.hoverBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-lg`}>
                      <service.icon className="h-6 w-6 text-foreground group-hover:text-[#3c2a39] transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-['Fredoka'] font-bold text-foreground mb-4 group-hover:text-[#3c2a39] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {service.description}
                    </p>
                    <div className="mt-4 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-[#3c2a39] to-transparent transition-all duration-500"></div>
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