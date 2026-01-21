import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const TeamCarousel = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const teamMembers: TeamMember[] = [
    { id: 1, name: "Rajesh Kumar", role: "Senior Electrician", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" },
    { id: 2, name: "Priya Sharma", role: "Project Manager", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face" },
    { id: 3, name: "Vikram Singh", role: "Lead Technician", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face" },
    { id: 4, name: "Suresh Reddy", role: "Electrical Engineer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face" },
    { id: 5, name: "Anjali Devi", role: "Safety Inspector", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face" },
    { id: 6, name: "Ravi Krishnan", role: "Installation Expert", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face" },
  ];

  const getVisibleMembers = useCallback(() => {
    const total = teamMembers.length;
    const indices = [];
    for (let i = -2; i <= 2; i++) {
      indices.push((currentIndex + i + total) % total);
    }
    return indices;
  }, [currentIndex, teamMembers.length]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, teamMembers.length]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, teamMembers.length]);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, currentIndex]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [handleNext, isAnimating]);

  const visibleIndices = getVisibleMembers();

  const getCardStyle = (position: number) => {
    // position: -2, -1, 0, 1, 2 (0 is center) - tighter spacing like reference
    const styles: { [key: number]: string } = {
      [-2]: 'translate-x-[-130%] md:translate-x-[-140%] scale-[0.55] opacity-40 z-10 grayscale',
      [-1]: 'translate-x-[-55%] md:translate-x-[-60%] scale-[0.75] opacity-70 z-20 grayscale',
      [0]: 'translate-x-0 scale-100 opacity-100 z-30',
      [1]: 'translate-x-[55%] md:translate-x-[60%] scale-[0.75] opacity-70 z-20 grayscale',
      [2]: 'translate-x-[130%] md:translate-x-[140%] scale-[0.55] opacity-40 z-10 grayscale',
    };
    return styles[position] || '';
  };

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-12 md:py-20 bg-gradient-to-b from-stone-100 via-stone-50 to-white overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Title */}
        <div className="relative text-center mb-4 md:mb-8">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-slate-300/50 uppercase tracking-widest select-none">
            Our Team
          </h2>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[320px] sm:h-[380px] md:h-[450px] flex items-center justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:left-4 md:left-8 z-40 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 flex items-center justify-center text-white hover:bg-slate-700 transition-all duration-300 hover:scale-110"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 sm:right-4 md:right-8 z-40 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 flex items-center justify-center text-white hover:bg-slate-700 transition-all duration-300 hover:scale-110"
            aria-label="Next team member"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center perspective-1000">
            {visibleIndices.map((memberIndex, i) => {
              const position = i - 2; // Convert to -2, -1, 0, 1, 2
              const member = teamMembers[memberIndex];
              
              return (
                <div
                  key={member.id}
                  className={`absolute transition-all duration-500 ease-out ${getCardStyle(position)}`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div 
                    className={`relative overflow-hidden rounded-2xl shadow-xl ${
                      position === 0 
                        ? 'w-44 h-56 sm:w-52 sm:h-68 md:w-64 md:h-80 lg:w-72 lg:h-96 ring-4 ring-slate-200/50 shadow-2xl' 
                        : 'w-32 h-44 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72'
                    }`}
                  >
                    {/* Gradient overlay for non-center cards */}
                    {position !== 0 && (
                      <div className="absolute inset-0 bg-slate-200/20 z-10" />
                    )}
                    
                    {/* Image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Member Info */}
        <div className="text-center mt-4 md:mt-8">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-800">
            {teamMembers[currentIndex].name}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-blue-600 uppercase tracking-widest font-medium mt-1">
            {teamMembers[currentIndex].role}
          </p>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-1.5 sm:gap-2 md:gap-3 mt-6 md:mt-8">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-5 sm:w-6 md:w-8 h-1.5 sm:h-2 md:h-2.5 bg-blue-600'
                  : 'w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
