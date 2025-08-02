import { Zap, Home, Building, Wrench, Shield, Clock, ChevronUp, Lightbulb, Settings, CheckCircle } from 'lucide-react';
import { memo, useEffect, useState, useRef } from 'react';

const Services = memo(() => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          // Delay the banner lift to let users see the banner content
          setTimeout(() => {
            setBannerVisible(false);
          }, 1200); // 1.2s delay to read banner
        } else if (!entry.isIntersecting) {
          // Reset when leaving the section
          setBannerVisible(true);
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
      icon: Lightbulb,
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
      icon: CheckCircle,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure your property is up to code.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      hoverBg: "group-hover:bg-red-500/20"
    },
    {
      icon: Clock,
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
          className={`absolute inset-0 z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center transition-transform duration-1000 ease-in-out ${
            bannerVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="text-center px-8">
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm rounded-3xl p-12 border border-primary/30 shadow-2xl">
              <h2 className="text-6xl md:text-7xl font-poppins font-bold text-white mb-6 tracking-tight">
                Our Services
              </h2>
              <div className="w-40 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mb-4"></div>
              <p className="text-white/90 text-xl font-light max-w-md mx-auto">
                Professional electrical solutions for every need
              </p>
            </div>
          </div>
        </div>

        {/* Services Content */}
        <div className="relative z-0">
          <div className="pt-20 pb-10">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-poppins font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4">
                What We Offer
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="group bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 cursor-pointer"
                  >
                    <div className={`${service.bgColor} ${service.hoverBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                      <service.icon className={`h-6 w-6 text-2xl`} style={{
                        background: `linear-gradient(135deg, ${service.color.includes('from-') ? service.color.split(' ')[0].replace('from-', '') : service.color.split(' ')[0]}, ${service.color.includes('to-') ? service.color.split(' ')[2]?.replace('to-', '') || service.color.split(' ')[1] : service.color.split(' ')[1]})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }} />
                    </div>
                    <h3 className="text-lg font-poppins font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors duration-300">
                      {service.description}
                    </p>
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