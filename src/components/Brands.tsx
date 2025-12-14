import { memo } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

import vguardLogo from '@/assets/brands/v-guard-logo.png';
import gmLogo from '@/assets/brands/gm-logo.png';
import anchorLogo from '@/assets/brands/anchor-logo.png';
import romaLogo from '@/assets/brands/roma-logo.png';
import finolexLogo from '@/assets/brands/finolex-logo.png';
import havellsLogo from '@/assets/brands/havells-logo.png';
import polycabLogo from '@/assets/brands/polycab-logo.png';
import cromptonLogo from '@/assets/brands/crompton-logo.png';
import legrandLogo from '@/assets/brands/legrand-logo.png';
import norisysLogo from '@/assets/brands/norisys-logo.png';
import goldmedalLogo from '@/assets/brands/goldmedal-logo.png';
import schneiderLogo from '@/assets/brands/schneider-logo.png';
import rrKabelLogo from '@/assets/brands/rr-kabel-logo.png';

const Brands = memo(() => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const brands = [
    { name: 'V-Guard', logo: vguardLogo },
    { name: 'Havells', logo: havellsLogo },
    { name: 'Polycab', logo: polycabLogo },
    { name: 'Anchor', logo: anchorLogo },
    { name: 'Crompton', logo: cromptonLogo },
    { name: 'Legrand', logo: legrandLogo },
    { name: 'Norisys', logo: norisysLogo },
    { name: 'Goldmedal', logo: goldmedalLogo },
    { name: 'Schneider Electric', logo: schneiderLogo },
    { name: 'RR Kabel', logo: rrKabelLogo },
    { name: 'GM Modular', logo: gmLogo },
    { name: 'Roma', logo: romaLogo },
    { name: 'Finolex', logo: finolexLogo }
  ];

  const logoBoost: Record<string, string> = {
    'Norisys': 'scale-[1.2]',
    'Roma': 'scale-[1.3]',
    'Finolex': 'scale-[1.2]'
  };

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`section-padding bg-card border-y border-border transition-all duration-700 ${
        isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-wide">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Trusted Brand Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We use high quality materials from the top brands recognized by the Copper Council Authority
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative bg-muted/30 rounded-2xl p-6 overflow-hidden border border-border">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
          
          <div className="flex items-center overflow-hidden">
            <div className="flex items-center gap-8 animate-marquee">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 w-36 h-24 bg-card rounded-xl border border-border flex flex-col items-center justify-center p-4 hover:border-primary/30 transition-all duration-300 group"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className={cn(
                      "max-w-full max-h-14 w-auto h-auto object-contain",
                      logoBoost[brand.name] || ""
                    )}
                    loading="lazy"
                  />
                  <span className="text-xs font-medium text-muted-foreground mt-2 group-hover:text-primary transition-colors">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
          <p className="text-lg font-semibold text-primary mb-2">
            Authorized Dealers & Certified Installers
          </p>
          <p className="text-muted-foreground">
            Premium electrical solutions with manufacturer warranty and technical support
          </p>
        </div>
      </div>
    </section>
  );
});

export default Brands;
