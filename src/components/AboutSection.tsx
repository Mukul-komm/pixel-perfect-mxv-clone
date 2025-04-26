
import React from 'react';
import TextReveal from './TextReveal';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-mxv-black text-mxv-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <TextReveal 
              text="About Us" 
              className="text-6xl md:text-7xl font-heading font-bold mb-4"
              tag="h2"
            />
          </div>
          
          <div className="md:col-span-8 space-y-8">
            <TextReveal 
              text="We are a dynamic and energetic consulting firm based in India, passionately dedicated to fueling startup growth. Our core mission is to help you scale your business effectively, ensuring profitability remains paramount every step of the way."
              className="text-2xl md:text-3xl font-light leading-relaxed"
              tag="p"
              delay={200}
            />
            
            <div >
                <TextReveal 
                text="We go beyond traditional consulting; we partner with you. We focus on making your company investment-ready while acting as dedicated guides alongside your founding team. Your vision becomes our vision."
                className="text-2xl md:text-3xl font-light leading-relaxed"
                tag="p"
                delay={400}
                />
                
                <TextReveal 
                text="Delivering practical, actionable solutions isn't just a goal, it's our commitment. We thrive on challenges and are relentlessly dedicated to your success, remaining by your side until your objectives are achieved." className="text-2xl md:text-3xl font-light leading-relaxed mb-8"
                className="text-2xl md:text-3xl font-light leading-relaxed"
                tag="p"
                delay={600}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
