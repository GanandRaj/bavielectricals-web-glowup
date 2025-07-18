
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)'
             }}>
      {/* 3D Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-green-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text"
              style={{
                textShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                filter: 'drop-shadow(0 4px 20px rgba(59, 130, 246, 0.3))'
              }}>
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            Ready to start your electrical project? Contact us today for a free consultation 
            and quote. We're here to help with all your electrical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          <div className="group text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.1)'
               }}>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-110">
              <Phone className="h-8 w-8 text-white drop-shadow-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">Call Us</h3>
            <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
              (123) 456-7890
            </a>
          </div>

          <div className="group text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 hover:shadow-green-500/25 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(34, 197, 94, 0.1)'
               }}>
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-green-500/50 transition-all duration-300 transform group-hover:scale-110">
              <Mail className="h-8 w-8 text-white drop-shadow-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-green-300 transition-colors duration-300">Email Us</h3>
            <a href="mailto:contact@amalodhbavielectricals.com" className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium">
              contact@amalodhbavielectricals.com
            </a>
          </div>

          <div className="group text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 hover:shadow-purple-500/25 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(147, 51, 234, 0.1)'
               }}>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300 transform group-hover:scale-110">
              <MapPin className="h-8 w-8 text-white drop-shadow-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">Location</h3>
            <p className="text-gray-300 font-medium">
              Serving Your Local Area
            </p>
          </div>

          <div className="group text-center p-8 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 hover:shadow-cyan-500/25 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(6, 182, 212, 0.1)'
               }}>
            <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-300 transform group-hover:scale-110">
              <Clock className="h-8 w-8 text-white drop-shadow-lg" />
            </div>
            <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">Hours</h3>
            <p className="text-gray-300 font-medium">
              Mon-Fri: 8AM-6PM<br />
              24/7 Emergency Service
            </p>
          </div>
        </div>

        <div className="mt-16 text-center perspective-1000">
          <div className="bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white py-8 px-12 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-xl transform hover:scale-105 transition-all duration-500 inline-block"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(220, 38, 38, 0.4), 0 0 40px rgba(234, 88, 12, 0.3)'
               }}>
            <h3 className="text-2xl font-bold mb-3 text-transparent bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text"
                style={{
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.8)'
                }}>Emergency Service Available</h3>
            <p className="text-lg mb-4 text-yellow-100">Call now for immediate electrical assistance</p>
            <a href="tel:+1234567890" className="text-3xl font-bold block text-white hover:text-yellow-200 transition-colors duration-300"
               style={{
                 textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
               }}>
              (123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
