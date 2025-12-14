import { ArrowRight } from 'lucide-react';
import ceoImage from '@/assets/ceo-master-electrician.jpg';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { Button } from './ui/button';

const Team = () => {
  const { elementRef: ceoRef, isVisible: ceoVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: teamRef, isVisible: teamVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 });

  const ceo = {
    name: "Gali Bosu Babu",
    position: "CEO & Master Electrician",
    image: ceoImage,
    message: "Hard work and team effort - that's what makes Amalodhbhavi Electricals successful. Our commitment to excellence and dedication to our craft has built the foundation of trust with our clients. Together, we illuminate every project with precision and passion."
  };

  const employees = [
    { id: 1, name: "Rajesh Kumar", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" },
    { id: 2, name: "Priya Sharma", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" },
    { id: 3, name: "Vikram Singh", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" },
    { id: 4, name: "Suresh Reddy", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face" },
    { id: 5, name: "Anjali Devi", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" },
    { id: 6, name: "Ravi Krishnan", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face" },
    { id: 7, name: "Meera Nair", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face" },
    { id: 8, name: "Kiran Patel", image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&h=200&fit=crop&crop=face" },
    { id: 9, name: "Lakshmi Rao", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face" },
    { id: 10, name: "Arjun Gupta", image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=200&h=200&fit=crop&crop=face" },
    { id: 11, name: "Divya Menon", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face" },
    { id: 12, name: "Sanjay Iyer", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face" },
  ];

  return (
    <section id="team" className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Meet The Experts
          </h2>
        </div>

        {/* Director's Message */}
        <div 
          ref={ceoRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 transition-all duration-700 ${
            ceoVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative bg-card rounded-3xl overflow-hidden border border-border shadow-xl">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary/5 to-transparent rounded-tr-full" />
            
            <div className="relative p-6 md:p-10 lg:p-12">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-3">
                  Director's Message
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  A Word From Our Leader
                </h3>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Image */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-accent to-primary rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                    <img 
                      src={ceo.image} 
                      alt={ceo.name}
                      className="relative w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl border-4 border-card shadow-xl"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{ceo.name}</h4>
                    <p className="text-lg font-medium text-accent">{ceo.position}</p>
                  </div>
                  
                  <blockquote className="relative">
                    <svg className="absolute -top-4 -left-2 w-8 h-8 text-accent/20" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-0.5 3.6-1.3L11 23h4v-5l-1.6-1.1C13.8 16.3 14 15.7 14 15c0-2.2-1.8-4-4-4zm10 0c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-0.5 3.6-1.3L21 23h4v-5l-1.6-1.1c0.4-0.6 0.6-1.2 0.6-1.9 0-2.2-1.8-4-4-4z" />
                    </svg>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed pl-8 italic">
                      "{ceo.message}"
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Employee Grid */}
        <div 
          ref={teamRef as React.RefObject<HTMLDivElement>}
          className="mb-12"
        >
          <h3 className="text-xl md:text-2xl font-bold text-center text-foreground mb-8">Our Skilled Team</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
            {employees.map((employee, index) => (
              <div 
                key={employee.id}
                className={`group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover-lift ${
                  teamVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={employee.image} 
                    alt={employee.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 md:p-3 text-center">
                  <h4 className="text-xs md:text-sm font-medium text-foreground truncate">{employee.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="bg-primary rounded-2xl md:rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 p-8 lg:p-12 flex justify-center">
              <img 
                src="/lovable-uploads/0bee0c4f-19fc-479c-8517-0376bc75f623.png"
                alt="Join our team illustration"
                className="max-w-full max-h-48 md:max-h-64 object-contain animate-float"
              />
            </div>
            
            <div className="lg:w-1/2 p-8 lg:p-12 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Join Our Team
              </h3>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                We're always looking for skilled electricians to join our growing team. 
                If you're passionate about electrical work and committed to excellence, we'd love to hear from you.
              </p>
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 rounded-xl hover-lift"
              >
                Contact Us About Careers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
