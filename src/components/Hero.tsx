
import { Phone, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gray-200 text-gray-900 py-20 mt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Amalodhbhavi Electricals
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-4xl mx-auto">
            Professional electrical services for residential, commercial, and industrial needs. 
            Licensed, insured, and committed to excellence in every project we undertake.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-black text-black hover:bg-black hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <Phone className="h-8 w-8 text-black mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600 text-sm">Available when you need us most</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <Mail className="h-8 w-8 text-black mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">Professional and reliable service</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <MapPin className="h-8 w-8 text-black mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">Serving the community with pride</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
