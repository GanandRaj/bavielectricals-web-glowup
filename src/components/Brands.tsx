import { memo } from 'react';

// Import brand logos
import vguardLogo from '@/assets/brands/v-guard-logo.png';
import gmLogo from '@/assets/brands/gm-logo.png';
import anchorLogo from '@/assets/brands/anchor-logo.png';
import romaLogo from '@/assets/brands/roma-logo.png';
import finolexLogo from '@/assets/brands/finolex-logo.png';
import rrKabelLogo from '@/assets/brands/rr-kabel-logo.png';

const Brands = memo(() => {
  const brands = [
    { name: 'V-Guard', logo: vguardLogo },
    { name: 'GM Modular', logo: gmLogo },
    { name: 'Anchor', logo: anchorLogo },
    { name: 'Roma', logo: romaLogo },
    { name: 'Finolex', logo: finolexLogo },
    { name: 'RR Kabel', logo: rrKabelLogo }
  ];

  // Duplicate the brands array to create seamless loop
  const duplicatedBrands = [...brands, ...brands];

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
        <div className="relative bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl p-8 shadow-inner">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 rounded-l-2xl"></div>
          <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 rounded-r-2xl"></div>
          
          {/* Scrolling brands container */}
          <div className="flex items-center">
            <div 
              className="flex items-center gap-12 animate-scroll-brands"
              style={{
                animation: 'scroll-brands 40s linear infinite'
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 w-48 h-28 bg-white rounded-xl shadow-lg border-2 border-gray-100 flex items-center justify-center p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-16 object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                      loading="lazy"
                    />
                    <span className="text-xs font-semibold text-foreground/60 mt-2 group-hover:text-primary transition-colors duration-300">
                      {brand.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional info with better styling */}
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20">
          <p className="text-lg font-medium text-primary mb-2">
            Authorized Dealers & Certified Installers
          </p>
          <p className="text-sm text-foreground/70">
            Premium electrical solutions with manufacturer warranty and technical support
          </p>
        </div>
      </div>
    </section>
  );
});

export default Brands;