import { useState, memo, useCallback, useEffect } from 'react';
import { Menu, X, Zap, LogIn, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import type { User } from '@supabase/supabase-js';
const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    setIsMenuOpen(false);
  };

  const handleSignIn = () => {
    navigate('/auth');
    setIsMenuOpen(false);
  };

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  }, []);
  return <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <Zap className="h-10 w-10 text-amber-600" />
            <span className="text-3xl md:text-4xl font-asimovian text-gray-900 tracking-wide drop-shadow-lg">Amalodbhavi Electricals</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
              Projects
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
              Team
            </button>
            <a href="/products" className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
              Products
            </a>
            <button onClick={() => scrollToSection('contact')} className="text-gray-900 hover:text-gray-700 transition-colors font-medium">
              Contact
            </button>
            {user ? (
              <Button
                onClick={handleSignOut}
                variant="ghost"
                size="sm"
                className="text-gray-900 hover:text-gray-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={handleSignIn}
                variant="ghost"
                size="sm"
                className="text-gray-900 hover:text-gray-700"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className={`md:hidden py-4 border-t ${isScrolled ? 'border-gray-200' : 'border-gray-300'}`}>
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('team')} className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-left">
                Team
              </button>
              <a href="/products" className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-left">
                Products
              </a>
              <button onClick={() => scrollToSection('contact')} className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-left">
                Contact
              </button>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-left flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="text-gray-900 hover:text-gray-700 transition-colors font-medium text-left flex items-center"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </button>
              )}
            </nav>
          </div>}
      </div>
    </header>;
});
export default Header;