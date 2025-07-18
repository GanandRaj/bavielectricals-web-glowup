
import { Zap, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)'
            }}>
      {/* 3D Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-cyan-500/5 to-green-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-500"
               style={{
                 boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 30px rgba(59, 130, 246, 0.1)'
               }}>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-white" />
              <span className="text-xl font-bold">అమలోధ్‌బావి ఎలక్ట్రికల్స్</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional electrical services you can trust. Licensed, insured, 
              and committed to excellence in every project.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-gray-300">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white" />
                <span className="text-gray-300">contact@amalodhbavielectricals.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-gray-300">Serving Your Local Area</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 అమలోధ్‌బావి ఎలక్ట్రికల్స్. All rights reserved. Licensed & Insured Electrical Contractor.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
