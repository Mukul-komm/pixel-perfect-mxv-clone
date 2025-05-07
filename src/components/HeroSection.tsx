
import React from 'react';
import TextReveal from './TextReveal';

const HeroSection: React.FC = () => {
  return (
    <section id="Hero" className="relative h-screen flex items-center bg-mxv-black text-mxv-white" >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-2"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-mxv-black via-transparent to-mxv-black"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Your partner in building ideas
          </h1>
          
          <div className="h-px w-24 bg-mxv-red mb-8"></div>
          
          <p className="text-xl md:text-2xl max-w-2xl mb-12 text-gray-300">
            <TextReveal 
              text="At MS Arden, we help organization/individual in navigating the deal transaction with right level of quality and timeliness" 
              delay={400}
              tag="p"
            />
          </p>
          
          <a 
            href="#services" 
            className="inline-flex items-center text-lg group hover:text-mxv-red transition-colors duration-300"
          >
            <span className="mr-2">Explore our services</span>
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
