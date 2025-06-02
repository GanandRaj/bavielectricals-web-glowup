
import { Phone, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Professional Electrical Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Trusted electrical solutions for your home and business. 
            Licensed, insured, and committed to excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Call Now
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Emergency Service</h3>
              <p className="text-blue-100 text-sm">Available when you need us most</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-blue-100 text-sm">Professional and reliable service</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Local Expertise</h3>
              <p className="text-blue-100 text-sm">Serving the community with pride</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
