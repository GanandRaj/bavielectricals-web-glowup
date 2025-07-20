
import { lazy, Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Lazy load components for better performance
const Services = lazy(() => import('@/components/Services'));
const Projects = lazy(() => import('@/components/Projects'));
const Team = lazy(() => import('@/components/Team'));
const About = lazy(() => import('@/components/About'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Suspense fallback={<div className="h-20 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" />}>
        <Team />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div className="h-20 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
