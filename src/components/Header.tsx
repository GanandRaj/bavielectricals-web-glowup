
import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-2xl fixed w-full top-0 z-50 backdrop-blur-xl border-b border-white/10"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
            }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-white" />
            <span className="text-xl font-bold text-white">Amalodhbhavi Electricals</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-gray-300 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-gray-300 transition-colors font-medium text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-white hover:text-gray-300 transition-colors font-medium text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-white hover:text-gray-300 transition-colors font-medium text-left"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-gray-300 transition-colors font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-gray-300 transition-colors font-medium text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
