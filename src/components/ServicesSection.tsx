
import React from 'react';
import TextReveal from './TextReveal';

const services = [
  {
    title: "Digital Design",
    items: ["Website Design", "UI/UX Design", "Mobile App Design", "Interactive Experiences"]
  },
  {
    title: "Development",
    items: ["Front-end Development", "Back-end Development", "E-commerce", "CMS Integration"]
  },
  {
    title: "Branding",
    items: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Logo Design"]
  },
  {
    title: "Strategy",
    items: ["Digital Strategy", "Content Strategy", "User Research", "Analytics & Optimization"]
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-mxv-light-gray">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <TextReveal 
            text="Our Services" 
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
            tag="h2"
          />
          <div className="h-px w-16 bg-mxv-red mb-8"></div>
          <TextReveal 
            text="We provide a comprehensive range of services to help brands thrive in the digital landscape." 
            className="text-xl max-w-3xl"
            tag="p"
            delay={200}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 border-b-2 border-transparent hover:border-mxv-red transition-all duration-300"
            >
              <h3 className="text-2xl font-heading font-bold mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-mxv-red rounded-full mr-3"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="/services" 
            className="inline-flex items-center text-lg font-medium hover:text-mxv-red transition-colors duration-300"
          >
            <span className="mr-2">Learn more about our services</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
