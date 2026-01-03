import { memo, useState } from 'react';
import { Home, Building, Wrench, Settings, Shield, AlertTriangle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

// Import service images
import residentialImg from '@/assets/services/residential-electrical.jpg';
import commercialImg from '@/assets/services/commercial-electrical.jpg';
import repairsImg from '@/assets/services/electrical-repairs.jpg';
import installationImg from '@/assets/services/installation-services.jpg';
import safetyImg from '@/assets/services/safety-inspections.jpg';
import emergencyImg from '@/assets/services/emergency-services.jpg';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  color: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Residential Electrical",
    description: "Complete electrical services for your home including wiring, outlets, lighting, and panel upgrades.",
    image: residentialImg,
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Building,
    title: "Commercial Electrical",
    description: "Professional electrical solutions for businesses, offices, and commercial properties.",
    image: commercialImg,
    color: "from-green-500 to-green-600"
  },
  {
    icon: Wrench,
    title: "Electrical Repairs",
    description: "Fast and reliable electrical repair services for all your electrical problems.",
    image: repairsImg,
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Settings,
    title: "Installation Services",
    description: "Expert installation of electrical fixtures, ceiling fans, outlets, and switches.",
    image: installationImg,
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety inspections to ensure your property is up to code.",
    image: safetyImg,
    color: "from-red-500 to-red-600"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Services",
    description: "24/7 emergency electrical services for urgent electrical issues and outages.",
    image: emergencyImg,
    color: "from-indigo-500 to-indigo-600"
  }
];

const Services = memo(() => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div 
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className={cn(
          "text-center mb-10 sm:mb-12 md:mb-16 opacity-0",
          isVisible && 'animate-fade-down'
        )}>
          <span className={cn(
            "inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4 opacity-0",
            isVisible && 'animate-scale-up stagger-1'
          )}>
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Professional electrical solutions tailored to your needs with quality and safety at the forefront
          </p>
        </div>

        {/* Services Layout - Left list, Right image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Service Cards List */}
          <div className={cn(
            "flex flex-col gap-3 sm:gap-4 opacity-0",
            isVisible && 'animate-fade-right'
          )}>
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeIndex === index;
              
              return (
                <div
                  key={service.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    "group relative flex items-center gap-4 p-4 sm:p-5 rounded-2xl cursor-pointer",
                    "border-2 transition-all duration-500 ease-out",
                    isActive 
                      ? "bg-primary/5 border-primary shadow-lg shadow-primary/10 scale-[1.02]" 
                      : "bg-card border-transparent hover:border-primary/30 hover:bg-muted/50"
                  )}
                >
                  {/* Icon */}
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center",
                    "transition-all duration-500",
                    isActive 
                      ? "bg-gradient-to-br " + service.color + " shadow-lg" 
                      : "bg-muted group-hover:bg-primary/10"
                  )}>
                    <Icon className={cn(
                      "w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-500",
                      isActive ? "text-white" : "text-foreground group-hover:text-primary"
                    )} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className={cn(
                      "text-base sm:text-lg font-semibold mb-1 transition-colors duration-300",
                      isActive ? "text-primary" : "text-foreground"
                    )}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                    "transition-all duration-500",
                    isActive 
                      ? "bg-primary text-primary-foreground translate-x-1" 
                      : "bg-muted text-muted-foreground opacity-0 group-hover:opacity-100"
                  )}>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Active indicator bar */}
                  <div className={cn(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full transition-all duration-500",
                    isActive ? "h-2/3 bg-primary" : "h-0 bg-transparent"
                  )} />
                </div>
              );
            })}
          </div>

          {/* Right - Service Image */}
          <div className={cn(
            "relative h-[300px] sm:h-[400px] lg:h-full lg:min-h-[500px] rounded-3xl overflow-hidden opacity-0",
            isVisible && 'animate-fade-left stagger-2'
          )}>
            <div className={cn(
              "absolute -inset-4 rounded-3xl blur-2xl opacity-30 transition-all duration-700",
              "bg-gradient-to-br",
              services[activeIndex].color
            )} />
            
            {/* Image container */}
            <div className="relative h-full rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={cn(
                    "absolute inset-0 transition-all duration-700 ease-out",
                    activeIndex === index 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-105"
                  )}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className={cn(
                      "inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3",
                      "bg-white/20 backdrop-blur-sm border border-white/30"
                    )}>
                      <service.icon className="w-4 h-4 text-white" />
                      <span className="text-sm font-medium text-white">{service.title}</span>
                    </div>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-md">
                      {service.description}
                    </p>
                    
                    {/* Learn more button */}
                    <button 
                      onClick={() => {
                        const contact = document.getElementById('contact');
                        contact?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={cn(
                        "mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl",
                        "bg-white/10 backdrop-blur-sm border border-white/30",
                        "text-white font-medium text-sm",
                        "hover:bg-white/20 transition-all duration-300",
                        "group"
                      )}
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-10 sm:mt-12 md:mt-16 opacity-0",
          isVisible && 'animate-fade-up stagger-4'
        )}>
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Need a service not listed? We've got you covered!
          </p>
          <button 
            onClick={() => {
              const contact = document.getElementById('contact');
              contact?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={cn(
              "inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4",
              "bg-primary text-primary-foreground rounded-xl",
              "font-medium text-sm sm:text-base",
              "hover:shadow-xl hover:shadow-primary/25 hover:scale-105",
              "active:scale-95",
              "transition-all duration-300"
            )}
          >
            Contact Us Today
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
});

Services.displayName = 'Services';

export default Services;