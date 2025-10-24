import { Zap, Phone, Mail, MapPin, Award, Shield, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Business Card Style */}
        <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl p-8 overflow-hidden">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
          
          <div className="relative z-10">
            {/* Header Section */}
            <div className="text-center mb-10 pb-8 border-b border-white/10">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Zap className="h-9 w-9 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    Amalodbhavi Electricals
                  </h2>
                  <p className="text-lg text-gray-400 font-medium">Professional Electrical Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-400 max-w-xl mx-auto leading-relaxed text-sm">
                Professional electrical solutions for residential, commercial, and industrial projects since 1997.
              </p>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Phone */}
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-blue-500/30 group">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+919989030669" className="text-white hover:text-blue-400 transition-colors font-semibold text-sm">
                    +91 9989030669
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-green-500/30 group">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:amalodhbhavielectricals@gmail.com" className="text-white hover:text-green-400 transition-colors font-semibold text-xs break-all">
                    amalodhbhavielectricals@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-purple-500/30 group">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <a href="https://maps.app.goo.gl/igNqR2N9pcDcSdqc6" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors font-semibold text-xs">
                    D.No 3-14 Main Road<br/>Opposite CSB Bank, Ravipadu
                  </a>
                </div>
              </div>
            </div>

            {/* Badges and Business Hours */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <div className="flex items-center space-x-1.5 bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-green-500/20">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span className="text-xs text-gray-300 font-medium">Licensed</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-yellow-500/20">
                  <Award className="h-4 w-4 text-yellow-400" />
                  <span className="text-xs text-gray-300 font-medium">24/7 Service</span>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center space-x-1.5">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <div className="text-left">
                    <p className="text-gray-300 font-semibold">Mon - Sat</p>
                    <p className="text-gray-500 text-xs">8 AM - 6 PM</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="h-4 w-4 text-red-400" />
                  <div className="text-left">
                    <p className="text-gray-300 font-semibold">Emergency</p>
                    <p className="text-gray-500 text-xs">24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-xs mb-1">
            © 2025 Amalodbhavi Electricals. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Professional Excellence Since 1997
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;