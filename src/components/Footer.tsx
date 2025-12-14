import { Phone, Mail, MapPin } from 'lucide-react';
import aeLogo from '@/assets/ae-logo.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <img src={aeLogo} alt="Amalodbhavi Electricals" className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 leading-relaxed">
              Professional electrical solutions for homes and businesses. 
              Reliable service with expertise and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {['Home', 'Services', 'Projects', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Headquarters</h3>
            <div className="space-y-3">
              <a 
                href="https://maps.app.goo.gl/igNqR2N9pcDcSdqc6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>D.No 3-14 Main Road<br/>Opposite CSB Bank, Ravipadu</span>
              </a>
              
              <a href="tel:+919989030669" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="h-5 w-5 flex-shrink-0" />
                +91 9989030669
              </a>

              <a href="mailto:amalodhbhavielectricals@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors break-all">
                <Mail className="h-5 w-5 flex-shrink-0" />
                amalodhbhavielectricals@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Amalodbhavi Electricals. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
