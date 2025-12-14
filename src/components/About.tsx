import { Award, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const About = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.2 });

  const features = [
    {
      icon: Award,
      title: "Licensed Professional",
      description: "Fully licensed and certified electrical contractor with industry recognition"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Years of experience in residential and commercial electrical work"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time service with quality workmanship guaranteed every time"
    },
    {
      icon: CheckCircle,
      title: "Safety First",
      description: "Committed to the highest safety standards in every project"
    }
  ];

  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "250+", label: "Projects Completed" },
    { value: "100%", label: "Customer Satisfaction" }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-br from-muted/30 via-background to-accent/10">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            About Amalodbhavi Electricals
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-lg">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With years of experience in the electrical industry, Amalodbhavi Electricals has been 
                serving the community with professional, reliable, and safe electrical services. We take 
                pride in our workmanship and commitment to customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a simple repair, complete rewiring, or electrical installation for your 
                new construction project, our team has the expertise and dedication to get the job done 
                right the first time.
              </p>
            </div>
            
            {/* Stats */}
            <div 
              ref={statsRef as React.RefObject<HTMLDivElement>}
              className={`grid grid-cols-3 gap-4 transition-all duration-700 ${
                statsVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
            >
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-primary text-primary-foreground rounded-xl p-4 md:p-6 text-center hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, index) => {
              const FeatureCard = () => {
                const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
                return (
                  <div 
                    ref={elementRef as React.RefObject<HTMLDivElement>}
                    className={`bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-500 hover-lift group ${
                      isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-teal-400 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              };
              return <FeatureCard key={feature.title} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
