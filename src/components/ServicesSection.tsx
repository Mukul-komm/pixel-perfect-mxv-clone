
import React from 'react';
import TextReveal from './TextReveal';

const services = [
  {
    title: "Transactions",
    items: ["Business Valuation", "Financial Due Diligence", "Operational Due Dilligence", "Deal Negotiations"]
  },
  {
    title: "Corporate Finance",
    items: ["Financial Planning and Analysis", "Budgeting", "Cashflows", "Compliance"]
  },
  {
    title: "Management Consulting",
    items: ["Go-To-Market Strategy", "Strategic Partnership", "Business Model Innovation", "Market Research"]
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-mxv-light-gray">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <TextReveal 
            text="Our Services" 
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
            tag="h2"
          />
          <div className="h-px w-16 bg-mxv-red mb-8"></div>
          <TextReveal 
            text="Partner with us for comprehensive consulting be it Buy And Sell-Side, we can help ease the roadblock as a reliable partner" 
            className="text-xl max-w-3xl"
            tag="p"
            delay={200}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default ServicesSection;
