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
    // position: -2, -1, 0, 1, 2 (0 is center)
    const styles: { [key: number]: string } = {
      [-2]: 'translate-x-[-180%] scale-[0.5] opacity-30 z-10 blur-[2px]',
      [-1]: 'translate-x-[-85%] scale-[0.7] opacity-60 z-20',
      [0]: 'translate-x-0 scale-100 opacity-100 z-30',
      [1]: 'translate-x-[85%] scale-[0.7] opacity-60 z-20',
      [2]: 'translate-x-[180%] scale-[0.5] opacity-30 z-10 blur-[2px]',
    };
    return styles[position] || '';
  };

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Title */}
        <div className="relative text-center mb-8">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-slate-700/30 uppercase tracking-widest select-none">
            Our Team
          </h2>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-8 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-8 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label="Next team member"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
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
                    className={`relative overflow-hidden rounded-2xl shadow-2xl ${
                      position === 0 
                        ? 'w-56 h-72 md:w-72 md:h-96 ring-4 ring-white/30' 
                        : 'w-40 h-52 md:w-56 md:h-72'
                    }`}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                    
                    {/* Image */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Decorative border glow for center card */}
                    {position === 0 && (
                      <div className="absolute inset-0 rounded-2xl ring-2 ring-teal-400/50 shadow-[0_0_30px_rgba(20,184,166,0.3)]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Member Info */}
        <div className="text-center mt-4 md:mt-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-teal-400" />
            <h3 className="text-xl md:text-3xl font-bold text-white">
              {teamMembers[currentIndex].name}
            </h3>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-teal-400" />
          </div>
          <p className="text-sm md:text-lg text-teal-400 uppercase tracking-widest font-medium">
            {teamMembers[currentIndex].role}
          </p>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 md:gap-3 mt-8">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-6 md:w-8 h-2 md:h-3 bg-teal-400'
                  : 'w-2 md:w-3 h-2 md:h-3 bg-white/30 hover:bg-white/50'
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
