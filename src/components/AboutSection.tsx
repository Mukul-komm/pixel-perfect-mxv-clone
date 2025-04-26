
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
              text="We are a dynamic management consulting firm based in India with a global presence. Our fresh approach and customised solutions have allowed us to successfully complete over 300 projects across various sectors."
              className="text-2xl md:text-3xl font-light leading-relaxed"
              tag="p"
              delay={200}
            />
            
            <TextReveal 
              text="We challenge conventions, work intimately in small teams, and deliver practical solutions with speed and agility. We don't rest untill we see results!"
              className="text-2xl md:text-3xl font-light leading-relaxed"
              tag="p"
              delay={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
