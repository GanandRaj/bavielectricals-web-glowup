import { useState, memo, useCallback, useEffect } from 'react';
import { Menu, X, LogIn, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import type { User } from '@supabase/supabase-js';
import aeLogo from '@/assets/ae-logo.png';
import { cn } from '@/lib/utils';

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

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5" 
          : "bg-white/30 backdrop-blur-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center py-1">
          <div className="flex items-center">
            <img src={aeLogo} alt="Amalodbhavi Electricals" className="h-14 md:h-16 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className={cn(
            "hidden md:flex space-x-1 items-center absolute left-1/2 transform -translate-x-1/2",
            "px-2 py-1.5 rounded-2xl",
            "bg-white/50 backdrop-blur-lg border border-white/40 shadow-lg shadow-black/5"
          )}>
            {[
              { id: 'home', label: 'Home' },
              { id: 'projects', label: 'Projects' },
              { id: 'team', label: 'Team' },
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                  "text-gray-700 hover:text-gray-900",
                  "hover:bg-white/60 hover:shadow-sm"
                )}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="/products" 
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                "text-gray-700 hover:text-gray-900",
                "hover:bg-white/60 hover:shadow-sm"
              )}
            >
              Products
            </a>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                "text-gray-700 hover:text-gray-900",
                "hover:bg-white/60 hover:shadow-sm"
              )}
            >
              Contact
            </button>
          </nav>

          {/* Auth buttons on the right */}
          <div className="hidden md:flex items-center">
            {user ? (
              <Button
                onClick={handleSignOut}
                variant="ghost"
                size="sm"
                className={cn(
                  "rounded-xl transition-all duration-300",
                  "bg-white/50 backdrop-blur-sm border border-white/40",
                  "hover:bg-white/70 hover:shadow-md",
                  "text-gray-700 hover:text-gray-900"
                )}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={handleSignIn}
                variant="ghost"
                size="sm"
                className={cn(
                  "rounded-xl transition-all duration-300",
                  "bg-white/50 backdrop-blur-sm border border-white/40",
                  "hover:bg-white/70 hover:shadow-md",
                  "text-gray-700 hover:text-gray-900"
                )}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={cn(
              "md:hidden p-2 rounded-xl transition-all duration-300",
              "bg-white/50 backdrop-blur-sm border border-white/40",
              "hover:bg-white/70",
              "text-gray-700"
            )} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={cn(
            "md:hidden py-4 mt-2 rounded-2xl",
            "bg-white/70 backdrop-blur-xl border border-white/40",
            "shadow-lg shadow-black/10"
          )}>
            <nav className="flex flex-col space-y-1 px-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'projects', label: 'Projects' },
                { id: 'team', label: 'Team' },
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className={cn(
                    "px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300",
                    "text-gray-700 hover:text-gray-900",
                    "hover:bg-white/60"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="/products" 
                className={cn(
                  "px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300",
                  "text-gray-700 hover:text-gray-900",
                  "hover:bg-white/60"
                )}
              >
                Products
              </a>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={cn(
                  "px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300",
                  "text-gray-700 hover:text-gray-900",
                  "hover:bg-white/60"
                )}
              >
                Contact
              </button>
              
              <div className="pt-2 border-t border-white/30 mt-2">
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300",
                      "text-gray-700 hover:text-gray-900",
                      "hover:bg-white/60 flex items-center"
                    )}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </button>
                ) : (
                  <button
                    onClick={handleSignIn}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300",
                      "text-gray-700 hover:text-gray-900",
                      "hover:bg-white/60 flex items-center"
                    )}
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Sign In
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;