
import { Phone, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative text-white py-24 mt-16 min-h-screen flex items-center overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            rgba(17, 24, 39, 0.95) 0%, 
            rgba(31, 41, 55, 0.9) 50%, 
            rgba(55, 65, 81, 0.85) 100%
          ),
          url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* 3D Perspective Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               transform: 'perspective(1000px) rotateX(60deg)',
               transformOrigin: 'center bottom'
             }}>
        </div>
      </div>
      
      {/* Floating 3D Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl animate-pulse transform rotate-12 shadow-2xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl animate-pulse delay-1000 transform -rotate-12 shadow-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-cyan-500/15 to-blue-500/15 rounded-2xl blur-lg animate-pulse delay-500 transform rotate-45 shadow-xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text drop-shadow-2xl transform perspective-1000 animate-fade-in"
              style={{
                textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(147, 51, 234, 0.3)',
                filter: 'drop-shadow(0 4px 20px rgba(59, 130, 246, 0.4))'
              }}>
            Amalodhbhavi Electricals
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-5xl mx-auto leading-relaxed font-medium transform translate-y-2 animate-fade-in delay-300 backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl">
            Professional electrical services for residential, commercial, and industrial needs. 
            Licensed, insured, and committed to excellence in every project we undertake.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center animate-fade-in delay-500">
            <button 
              onClick={scrollToContact}
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/25 border border-blue-500/30 backdrop-blur-sm"
              style={{
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                filter: 'drop-shadow(0 4px 20px rgba(59, 130, 246, 0.4))'
              }}
            >
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl transform -skew-x-12 scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <button 
              onClick={scrollToContact}
              className="relative border-2 border-blue-400/50 text-white hover:bg-blue-600/20 font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/25 bg-white/10 backdrop-blur-sm"
              style={{
                boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform scale-0 hover:scale-100 transition-transform duration-300"></div>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in delay-700 perspective-1000">
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-y-12"
                 style={{
                   boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.2)',
                   transformStyle: 'preserve-3d'
                 }}>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-z-4"
                   style={{ transformStyle: 'preserve-3d' }}>
                <Phone className="h-10 w-10 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">24/7 Emergency Service</h3>
              <p className="text-gray-300 leading-relaxed">Available when you need us most</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-green-500/25 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-y-12"
                 style={{
                   boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(34, 197, 94, 0.2)',
                   transformStyle: 'preserve-3d'
                 }}>
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-green-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-z-4"
                   style={{ transformStyle: 'preserve-3d' }}>
                <Mail className="h-10 w-10 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Licensed & Insured</h3>
              <p className="text-gray-300 leading-relaxed">Professional and reliable service</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 hover:rotate-y-12"
                 style={{
                   boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(147, 51, 234, 0.2)',
                   transformStyle: 'preserve-3d'
                 }}>
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-z-4"
                   style={{ transformStyle: 'preserve-3d' }}>
                <MapPin className="h-10 w-10 text-white drop-shadow-lg" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Local Expertise</h3>
              <p className="text-gray-300 leading-relaxed">Serving the community with pride</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
