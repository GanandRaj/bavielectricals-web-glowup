import { useState, memo, useCallback, useEffect } from 'react';
import { Menu, X, LogIn, LogOut, ChevronRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import type { User } from '@supabase/supabase-js';
import aeLogo from '@/assets/ae-logo.png';

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center focus-ring rounded-lg"
          >
            <img 
              src={aeLogo} 
              alt="Amalodbhavi Electricals" 
              className="h-12 md:h-14 w-auto transition-transform hover:scale-105" 
            />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 focus-ring ${
                  isScrolled 
                    ? 'text-foreground hover:bg-muted hover:text-primary' 
                    : 'text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="/products" 
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 focus-ring ${
                isScrolled 
                  ? 'text-foreground hover:bg-muted hover:text-primary' 
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              Products
            </a>
          </nav>

          {/* Desktop Auth Button */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <Button
                onClick={handleSignOut}
                variant={isScrolled ? "outline" : "secondary"}
                size="sm"
                className="font-medium"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={handleSignIn}
                variant={isScrolled ? "default" : "secondary"}
                size="sm"
                className="font-medium"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors focus-ring ${
              isScrolled ? 'text-foreground hover:bg-muted' : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className={`py-4 space-y-1 ${isScrolled ? 'bg-background' : 'bg-primary/95 backdrop-blur-lg'} rounded-b-xl`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:bg-muted' 
                    : 'text-primary-foreground hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
                <ChevronRight className="h-4 w-4 opacity-50" />
              </button>
            ))}
            <a 
              href="/products" 
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:bg-muted' 
                  : 'text-primary-foreground hover:bg-primary-foreground/10'
              }`}
            >
              Products
              <ChevronRight className="h-4 w-4 opacity-50" />
            </a>
            <div className="px-4 pt-4 border-t border-border/20">
              {user ? (
                <Button
                  onClick={handleSignOut}
                  variant={isScrolled ? "outline" : "secondary"}
                  className="w-full font-medium"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              ) : (
                <Button
                  onClick={handleSignIn}
                  variant={isScrolled ? "default" : "secondary"}
                  className="w-full font-medium"
                >
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
});

export default Header;
