import { Phone, Mail, MapPin } from 'lucide-react';
import { AnimatedLocationMap } from './AnimatedLocationMap';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Left Column - Company Info & Contact */}
          <div className="space-y-8">
            {/* Company Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Amalodbhavi Electricals</h2>
              <p className="text-gray-300 leading-relaxed">
                We provide quality electrical solutions for homes and businesses. 
                Our team delivers reliable service with professional expertise and care.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Headquarters</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                  <a 
                    href="https://maps.app.goo.gl/6upJrEdmRy9KDEkX6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    D.No 3-14 Main Road<br/>Opposite CSB Bank, Ravipadu
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <a 
                    href="tel:+919989030669" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 9989030669
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  <a 
                    href="mailto:amalodhbhavielectricals@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors break-all"
                  >
                    amalodhbhavielectricals@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Animated Map */}
          <div>
            <AnimatedLocationMap
              mapUrl="https://maps.app.goo.gl/6upJrEdmRy9KDEkX6"
              title="Amalodbhavi Electricals"
              lines={[
                "D.No 3-14 Main Road",
                "Opposite CSB Bank, Ravipadu"
              ]}
              markerLeftPct={55}
              markerTopPct={45}
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © Copyright © Amalodbhavi Electricals. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
