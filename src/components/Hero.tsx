import { Phone, Shield, MapPin, ArrowRight, Zap } from 'lucide-react';
import { memo, useCallback, useState, useEffect } from 'react';
import { Button } from './ui/button';

const Hero = memo(() => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/hero-backgrounds/electrician-service-1.jpg',
    '/hero-backgrounds/electrician-service-2.jpg',
    '/hero-backgrounds/electrician-service-3.jpg',
    '/hero-backgrounds/electrician-service-4.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToServices = useCallback(() => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const features = [
    {
      icon: Phone,
      title: "24/7 Emergency",
      description: "Available round the clock",
      gradient: "from-secondary to-amber-400"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Professional & reliable",
      gradient: "from-accent to-teal-400"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Serving your community",
      gradient: "from-primary to-blue-400"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: index === currentImageIndex ? 'zoomIn 4s ease-out' : 'none',
            }}
          />
        ))}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-primary/50" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float hidden lg:block" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float hidden lg:block" style={{ animationDelay: '1s' }} />
      
      <div className="relative container-wide section-padding z-10 pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-primary-foreground text-sm font-medium mb-6 animate-fade-in">
            <Zap className="h-4 w-4 text-secondary" />
            <span>Professional Electrical Services</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-asimovian text-primary-foreground mb-6 animate-fade-in tracking-wide leading-tight">
            Amalodbhavi
            <span className="block text-secondary">Electricals</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-10 animate-fade-in leading-relaxed stagger-2 px-4">
            Professional electrical services for residential, commercial, and industrial needs. 
            Licensed, insured, and committed to excellence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in stagger-3 px-4">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl hover-lift group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg rounded-xl hover-lift"
            >
              Our Services
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`glass-dark rounded-2xl p-6 hover-lift animate-fade-in animate-card-lift-${index + 1}`}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-primary-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
});

export default Hero;
