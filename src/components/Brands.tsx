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
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-['Comic_Neue']">
            Trusted Brand Partners
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We use high quality materials from the top brands recognized by the Copper Council Authority
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Infinite scroll container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
          
          {/* Scrolling brands container */}
          <div className="flex items-center">
            <div 
              className="flex items-center gap-16 animate-scroll-brands"
              style={{
                animation: 'scroll-brands 30s linear infinite'
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-xl shadow-md border border-gray-200 flex items-center justify-center p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-sm text-foreground/60">
            Authorized dealers and certified installers for premium electrical solutions
          </p>
        </div>
      </div>
    </section>
  );
});

export default Brands;