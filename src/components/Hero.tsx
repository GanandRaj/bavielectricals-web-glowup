import { Phone, Mail, MapPin } from 'lucide-react';
import { memo, useCallback, useState, useEffect } from 'react';
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
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const scrollToContact = useCallback(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, []);
  return <section id="home" className="relative text-gray-900 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Images */}
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
              animation: index === currentImageIndex ? 'zoomIn 3s ease-out' : 'none',
            }}
          />
        ))}
        {/* Lighter blur overlay for better image visibility */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-white/20 via-white/30 to-white/40"></div>
      </div>
      
      {/* Decorative Elements - Hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-20 left-10 w-24 md:w-32 h-24 md:h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-32 md:w-40 h-32 md:h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-asimovian mb-4 sm:mb-6 md:mb-8 text-gray-900 drop-shadow-2xl transform perspective-1000 animate-fade-in tracking-wide">Amalodbhavi Electricals</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-gray-900 max-w-5xl mx-auto leading-relaxed font-bold transform translate-y-2 animate-fade-in delay-300 drop-shadow-lg px-2">
            Professional electrical services for residential, commercial, and industrial needs. 
            Licensed, insured, and committed to excellence in every project we undertake.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16 justify-center animate-fade-in delay-500 px-4 sm:px-0">
            <button onClick={scrollToContact} className="bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl shadow-lg border border-gray-800 hover:border-gray-600 text-sm sm:text-base">
              Get Free Quote
            </button>
            <button onClick={scrollToContact} className="border-2 border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl shadow-lg bg-white/80 backdrop-blur-sm text-sm sm:text-base">
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto animate-fade-in delay-700 px-2 sm:px-0">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border border-white/20 transition-all duration-500 animate-card-lift-1 hover:scale-105 active:scale-95">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-900">24/7 Emergency Service</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Available when you need us most</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border border-white/20 transition-all duration-500 animate-card-lift-2 hover:scale-105 active:scale-95">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-900">Licensed & Insured</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Professional and reliable service</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-5 sm:p-6 md:p-8 shadow-2xl border border-white/20 transition-all duration-500 animate-card-lift-3 hover:scale-105 active:scale-95 sm:col-span-2 md:col-span-1 sm:max-w-sm sm:mx-auto md:max-w-none">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-gray-900">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Serving the community with pride</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
});
export default Hero;