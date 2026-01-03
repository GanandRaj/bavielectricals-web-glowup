import { memo } from 'react';
import { Home, Building, Wrench, Settings, Shield, AlertTriangle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  color: string;
  bgColor: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Residential Electrical",
    description: "Complete electrical services for your home including wiring, outlets, lighting, and panel upgrades.",
    image: "/hero-backgrounds/electrical-wiring.jpg",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500"
  },
  {
    icon: Building,
    title: "Commercial Electrical",
    description: "Professional electrical solutions for businesses, offices, and commercial properties.",
    image: "/hero-backgrounds/electrical-panel.jpg",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500"
  },
  {
    icon: Wrench,
    title: "Electrical Repairs",
    description: "Fast and reliable electrical repair services for all your electrical problems.",
    image: "/hero-backgrounds/electrical-work.jpg",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500"
  },
  {
    icon: Settings,
    title: "Installation Services",
    description: "Expert installation of electrical fixtures, ceiling fans, outlets, and switches.",
    image: "/hero-backgrounds/lighting-installation.jpg",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500"
  },
  {
    icon: Shield,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety inspections to ensure your property is up to code.",
    image: "/hero-backgrounds/electrician-service-1.jpg",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Services",
    description: "24/7 emergency electrical services for urgent electrical issues and outages.",
    image: "/hero-backgrounds/electrician-service-2.jpg",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-500"
  }
];

const ServiceCard = memo(({ service, index }: { service: Service; index: number }) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const Icon = service.icon;

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn(
        "group relative h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer",
        "transform transition-all duration-500",
        "hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20",
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Background Image - Hidden by default, shown on hover */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out scale-100 group-hover:scale-110"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      
      {/* Gradient Overlay - Changes on hover */}
      <div className={cn(
        "absolute inset-0 transition-all duration-500",
        "bg-gradient-to-br",
        service.color,
        "opacity-95 group-hover:opacity-20"
      )} />
      
      {/* Dark overlay for text readability on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between p-5 sm:p-6 md:p-8 z-10">
        {/* Top Section - Icon */}
        <div className={cn(
          "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center",
          "bg-white/20 backdrop-blur-sm",
          "group-hover:bg-white group-hover:shadow-xl",
          "transition-all duration-500 transform group-hover:scale-110"
        )}>
          <Icon className={cn(
            "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white",
            "group-hover:text-gray-900",
            "transition-colors duration-500"
          )} />
        </div>

        {/* Bottom Section - Text */}
        <div className="transform transition-all duration-500 group-hover:translate-y-0">
          <h3 className={cn(
            "text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3",
            "drop-shadow-lg group-hover:drop-shadow-2xl",
            "transition-all duration-300"
          )}>
            {service.title}
          </h3>
          <p className={cn(
            "text-white/90 text-sm sm:text-base leading-relaxed",
            "line-clamp-2 sm:line-clamp-3",
            "group-hover:text-white",
            "transition-all duration-300"
          )}>
            {service.description}
          </p>
          
          {/* Learn More - Appears on hover */}
          <div className={cn(
            "mt-3 sm:mt-4 flex items-center gap-2",
            "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0",
            "transition-all duration-500 delay-100"
          )}>
            <span className="text-white font-medium text-sm sm:text-base">Learn More</span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg 
                className="w-3 h-3 sm:w-4 sm:h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Shimmer Effect on Hover */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100",
        "bg-gradient-to-r from-transparent via-white/10 to-transparent",
        "transform -translate-x-full group-hover:translate-x-full",
        "transition-all duration-1000 ease-out"
      )} />
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const Services = memo(() => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div 
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className={cn(
          "text-center mb-10 sm:mb-12 md:mb-16",
          "transition-all duration-700",
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Professional electrical solutions tailored to your needs with quality and safety at the forefront
          </p>
        </div>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={cn(
          "text-center mt-10 sm:mt-12 md:mt-16",
          "transition-all duration-700 delay-500",
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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
