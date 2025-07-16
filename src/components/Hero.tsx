
const Hero = () => {
  return (
    <section id="home" className="bg-gray-100 text-gray-900 py-20 mt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Powering Your
              <br />
              <span className="italic">Spaces</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-md">
              Amalodhbhavi Electricals is your trusted partner for all your electrical needs. From residential to commercial projects, our team of experts delivers exceptional service and quality workmanship.
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/8d607631-d870-4849-ac40-2029aac46744.png" 
              alt="3D House Interior" 
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
