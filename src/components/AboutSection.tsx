
import React from 'react';
import TextReveal from './TextReveal';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-mxv-black text-mxv-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <TextReveal 
              text="About MXV" 
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
              tag="h2"
            />
            <div className="h-px w-16 bg-mxv-red mb-8"></div>
            
            <div className="space-y-6 text-gray-300">
              <TextReveal 
                text="MXV is a creative studio focused on designing and developing exceptional digital experiences that drive results." 
                tag="p"
                delay={200}
              />
              <TextReveal 
                text="Founded in 2020, we've collaborated with startups and established brands alike to create memorable digital products and brand identities." 
                tag="p"
                delay={300}
              />
              <TextReveal 
                text="Our multidisciplinary team brings together expertise in strategy, design, and development to deliver cohesive solutions that meet our clients' unique needs." 
                tag="p"
                delay={400}
              />
            </div>
          </div>
          
          <div>
            <TextReveal 
              text="Our Approach" 
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
              tag="h2"
            />
            <div className="h-px w-16 bg-mxv-red mb-8"></div>
            
            <div className="space-y-8">
              {[
                {
                  number: "01",
                  title: "Strategy",
                  description: "We begin with research and planning to understand your goals and audience."
                },
                {
                  number: "02",
                  title: "Design",
                  description: "We create intuitive, engaging experiences through thoughtful design."
                },
                {
                  number: "03",
                  title: "Development",
                  description: "We build scalable, high-performance digital products using modern technologies."
                },
                {
                  number: "04",
                  title: "Optimization",
                  description: "We measure results and continuously improve to maximize impact."
                }
              ].map((step, index) => (
                <div key={index} className="flex">
                  <div className="text-mxv-red font-mono text-lg mr-6">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
