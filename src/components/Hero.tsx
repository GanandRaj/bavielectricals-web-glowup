
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
    <section id="home" className="relative bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-900 py-24 mt-16 min-h-screen flex items-center overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text drop-shadow-2xl transform perspective-1000 animate-fade-in">
            Amalodhbhavi Electricals
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium transform translate-y-2 animate-fade-in delay-300">
            Professional electrical services for residential, commercial, and industrial needs. 
            Licensed, insured, and committed to excellence in every project we undertake.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center animate-fade-in delay-500">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg border border-gray-800 hover:border-gray-600"
            >
              Get Free Quote
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg bg-white/80 backdrop-blur-sm"
            >
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in delay-700">
            <div className="group bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">24/7 Emergency Service</h3>
              <p className="text-gray-600 leading-relaxed">Available when you need us most</p>
            </div>
            
            <div className="group bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Licensed & Insured</h3>
              <p className="text-gray-600 leading-relaxed">Professional and reliable service</p>
            </div>
            
            <div className="group bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed">Serving the community with pride</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
