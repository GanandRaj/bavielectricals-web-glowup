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
  return <section id="home" className="relative text-gray-900 pt-32 pb-24 min-h-screen flex items-center overflow-hidden">
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
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text drop-shadow-2xl transform perspective-1000 animate-fade-in">Amalodbhavi Electricals</h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-900 max-w-5xl mx-auto leading-relaxed font-bold transform translate-y-2 animate-fade-in delay-300 drop-shadow-lg">
            Professional electrical services for residential, commercial, and industrial needs. 
            Licensed, insured, and committed to excellence in every project we undertake.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center animate-fade-in delay-500">
            <button onClick={scrollToContact} className="bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg border border-gray-800 hover:border-gray-600">
              Get Free Quote
            </button>
            <button onClick={scrollToContact} className="border-2 border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg bg-white/80 backdrop-blur-sm">
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in delay-700">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 transition-all duration-500 animate-card-lift-1">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">24/7 Emergency Service</h3>
              <p className="text-gray-600 leading-relaxed">Available when you need us most</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 transition-all duration-500 animate-card-lift-2">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Licensed & Insured</h3>
              <p className="text-gray-600 leading-relaxed">Professional and reliable service</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 transition-all duration-500 animate-card-lift-3">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed">Serving the community with pride</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
});
export default Hero;