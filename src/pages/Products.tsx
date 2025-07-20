import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/1dc75ebf-2122-469b-bb97-854d2a5e286c.png')",
          filter: "blur(8px)",
          transform: "scale(1.1)"
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Back Button */}
        <Link 
          to="/" 
          className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg font-medium">Back to Home</span>
        </Link>
        
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Store Opens
            <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Soon...
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We're expanding our services to bring you premium electrical products. 
            Stay tuned for an amazing shopping experience!
          </p>
          
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-white font-medium">Something Amazing is Coming</span>
          </div>
          
          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center space-x-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center animation-delay-200">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center animation-delay-400">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Text */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-400 text-sm">
            Amalodhbhavi Electricals - Expanding Horizons
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;