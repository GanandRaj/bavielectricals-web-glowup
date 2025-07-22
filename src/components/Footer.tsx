
import { Zap, Phone, Mail, MapPin, Award, Shield, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Amalodhbhavi Electricals
                </span>
                <p className="text-sm text-gray-400">Professional Electrical Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted partner for comprehensive electrical services. Licensed, insured, 
              and committed to delivering excellence in every project with cutting-edge technology and expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-300">24/7 Emergency</span>
              </div>
            </div>
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
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <a href="tel:+919989030669" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  +91 9989030669
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <a href="mailto:amalodhbhavielectricals@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm font-medium break-all">
                  amalodhbhavielectricals@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-8 h-8 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <a 
                  href="https://www.google.com/maps/place/Amalodbhavi+electricals/@16.2562131,80.0135773,20.88z/data=!4m6!3m5!1s0x3a4a81e0d2761cdb:0x2fca70a5109fa58!8m2!3d16.2561751!4d80.0138303!16s%2Fg%2F11hyx7ys__?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium cursor-pointer"
                >
                  Serving Your Local Area
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Mon - Sat</p>
                  <p className="text-gray-400 text-xs">8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-red-400" />
                <div>
                  <p className="text-gray-300 text-sm font-medium">Emergency</p>
                  <p className="text-gray-400 text-xs">24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Amalodhbhavi Electricals. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <span>Licensed & Insured Electrical Contractor</span>
              <span>•</span>
              <span>Professional Excellence Since 1997</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
