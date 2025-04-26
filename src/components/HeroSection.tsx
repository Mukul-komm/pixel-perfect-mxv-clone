
import React, { useEffect, useState } from 'react';
import TextReveal from './TextReveal';

const headlines = [
  "We Create Digital Experiences",
  "We Design With Purpose",
  "We Build The Future"
];

const HeroSection: React.FC = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentHeadline((prev) => (prev + 1) % headlines.length);
        setIsAnimating(false);
      }, 600); // Duration of fade-out animation
      
    }, 4000); // Change headline every 4 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center bg-mxv-black text-mxv-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-mxv-black via-transparent to-mxv-black"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-6 h-24 md:h-32">
            <div className={`transition-opacity duration-600 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {headlines[currentHeadline]}
            </div>
          </h1>
          
          <div className="h-px w-24 bg-mxv-red mb-8"></div>
          
          <p className="text-xl md:text-2xl max-w-2xl mb-12 text-gray-300">
            <TextReveal 
              text="MXV is a creative studio specializing in digital experiences, branding, and strategic design solutions for forward-thinking clients." 
              delay={400}
              tag="p"
            />
          </p>
          
          <a 
            href="#work" 
            className="inline-flex items-center text-lg group hover:text-mxv-red transition-colors duration-300"
          >
            <span className="mr-2">Explore our work</span>
            <span className="w-10 h-10 rounded-full border border-white group-hover:border-mxv-red group-hover:bg-mxv-red flex items-center justify-center transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
