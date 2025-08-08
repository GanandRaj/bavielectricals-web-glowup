
import { Phone, Mail, MapPin } from 'lucide-react';
import { memo, useCallback } from 'react';

const Hero = memo(() => {
  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="home" className="relative text-foreground py-24 mt-16 min-h-screen flex items-center overflow-hidden bg-[radial-gradient(1200px_600px_at_0%_0%,hsl(var(--brand-2)/0.25),transparent),radial-gradient(1000px_500px_at_100%_100%,hsl(var(--brand-3)/0.25),transparent),linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--background)))]">
      <div className="absolute inset-0 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-[hsl(var(--brand-2)/0.15)] rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[hsl(var(--brand-3)/0.15)] rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-gradient-to-r from-[hsl(var(--brand-2))] via-[hsl(var(--brand-3))] to-[hsl(var(--brand-2))] bg-clip-text drop-shadow-2xl transform animate-fade-in">
            Amalodhbhavi Electricals
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-5xl mx-auto leading-relaxed font-medium transform translate-y-2 animate-fade-in delay-300">
            Professional electrical services for residential, commercial, and industrial needs. 
            Licensed, insured, and committed to excellence in every project we undertake.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center animate-fade-in delay-500">
            <button 
              onClick={scrollToContact}
              className="bg-[hsl(var(--brand-2))] hover:bg-[hsl(var(--brand-3))] text-[hsl(var(--primary-foreground))] font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-border"
            >
              Get Free Quote
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-[hsl(var(--brand-2))] text-foreground hover:bg-[hsl(var(--brand-2))] hover:text-[hsl(var(--primary-foreground))] font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg bg-transparent"
            >
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in delay-700">
            <div className="group bg-card/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-gradient-to-br from-[hsl(var(--brand-2))] to-[hsl(var(--brand-3))] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Phone className="h-8 w-8 text-[hsl(var(--primary-foreground))]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">24/7 Emergency Service</h3>
              <p className="text-muted-foreground leading-relaxed">Available when you need us most</p>
            </div>
            
            <div className="group bg-card/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-gradient-to-br from-[hsl(var(--brand-2))] to-[hsl(var(--brand-3))] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Mail className="h-8 w-8 text-[hsl(var(--primary-foreground))]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Licensed & Insured</h3>
              <p className="text-muted-foreground leading-relaxed">Professional and reliable service</p>
            </div>
            
            <div className="group bg-card/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-gradient-to-br from-[hsl(var(--brand-2))] to-[hsl(var(--brand-3))] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <MapPin className="h-8 w-8 text-[hsl(var(--primary-foreground))]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Local Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">Serving the community with pride</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
