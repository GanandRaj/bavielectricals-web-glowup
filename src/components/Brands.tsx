import { memo } from 'react';

// Import brand logos
import vguardLogo from '@/assets/brands/v-guard-logo.png';
import gmLogo from '@/assets/brands/gm-logo.png';
import anchorLogo from '@/assets/brands/anchor-logo.png';
import romaLogo from '@/assets/brands/roma-logo.png';
import finolexLogo from '@/assets/brands/finolex-logo.png';
import havellsLogo from '@/assets/brands/havells-logo.png';
import polycabLogo from '@/assets/brands/polycab-logo.png';
import cromptonLogo from '@/assets/brands/crompton-logo.png';
import bajajLogo from '@/assets/brands/bajaj-logo.png';
import legrandLogo from '@/assets/brands/legrand-logo.png';

const Brands = memo(() => {
  const brands = [
    { name: 'V-Guard', logo: vguardLogo },
    { name: 'Havells', logo: havellsLogo },
    { name: 'Polycab', logo: polycabLogo },
    { name: 'Anchor', logo: anchorLogo },
    { name: 'Crompton', logo: cromptonLogo },
    { name: 'Bajaj Electricals', logo: bajajLogo },
    { name: 'Legrand', logo: legrandLogo },
    { name: 'GM Modular', logo: gmLogo },
    { name: 'Roma', logo: romaLogo },
    { name: 'Finolex', logo: finolexLogo }
  ];

  // Triple the brands array to create truly seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-['Comic_Neue']">
            Trusted Brand Partners
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            We use high quality materials from the top brands recognized by the Copper Council Authority
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Infinite scroll container */}
        <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-200 overflow-hidden">
          {/* Subtle gradient masks for smooth edge fade */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling brands container */}
          <div className="flex items-center justify-center">
            <div 
              className="flex items-center gap-8"
              style={{
                animation: 'scroll-brands 60s linear infinite'
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 w-44 h-32 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center p-4 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex-1 flex items-center justify-center mb-2">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-16 w-auto h-auto object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-600 group-hover:text-primary transition-colors duration-300 text-center">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional info with better styling */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
          <p className="text-xl font-semibold text-primary mb-3">
            Authorized Dealers & Certified Installers
          </p>
          <p className="text-base text-foreground/80 max-w-3xl mx-auto">
            Premium electrical solutions with manufacturer warranty, technical support, and certified quality from India's leading electrical brands
          </p>
        </div>
      </div>
    </section>
  );
});

export default Brands;