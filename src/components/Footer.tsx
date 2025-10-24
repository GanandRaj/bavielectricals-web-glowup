import { Zap, Phone, Mail, MapPin, Award, Shield, Clock } from 'lucide-react';
import FooterMap from './FooterMap';
const Footer = () => {
  return <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Amalodbhavi Electricals</span>
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
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <a href="tel:+919989030669" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  +91 9989030669
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <a href="mailto:amalodhbhavielectricals@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm font-medium break-all">
                  amalodhbhavielectricals@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <a href="https://maps.app.goo.gl/igNqR2N9pcDcSdqc6" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm font-medium cursor-pointer pt-2">
                  D.No 3-14 Main Road, Opposite CSB Bank, Ravipadu
                </a>
              </div>
            </div>
            <div className="mt-6">
              <FooterMap />
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
    </footer>;
};
export default Footer;