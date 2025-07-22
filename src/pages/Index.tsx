
import { lazy, Suspense, memo } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Enhanced loading skeleton component
const SectionSkeleton = memo(() => (
  <div className="animate-pulse">
    <div className="h-96 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
    </div>
  </div>
));

// Lazy load components with preloading hints
const Services = lazy(() => 
  import('@/components/Services').then(module => ({ default: module.default }))
);
const Projects = lazy(() => 
  import('@/components/Projects').then(module => ({ default: module.default }))
);
const Team = lazy(() => 
  import('@/components/Team').then(module => ({ default: module.default }))
);
const About = lazy(() => 
  import('@/components/About').then(module => ({ default: module.default }))
);
const Contact = lazy(() => 
  import('@/components/Contact').then(module => ({ default: module.default }))
);
const TeamConnect = lazy(() => 
  import('@/components/TeamConnect').then(module => ({ default: module.default }))
);
const Footer = lazy(() => 
  import('@/components/Footer').then(module => ({ default: module.default }))
);

const Index = memo(() => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Team />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TeamConnect />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
});

export default Index;
