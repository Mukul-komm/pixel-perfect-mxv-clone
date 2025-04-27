
import React from 'react';
import ProjectItem from './ProjectItem';
import TextReveal from './TextReveal';

const projects = [
  {
    title: "Atlas Digital Platform",
    category: "Web Design & Development",
    year: "2024",
    image: "/placeholder.svg",
    link: "/work/atlas-digital-platform"
  },
  {
    title: "Nova Brand Identity",
    category: "Branding",
    year: "2024",
    image: "/placeholder.svg",
    link: "/work/nova-brand-identity"
  },
  {
    title: "Pulse E-commerce",
    category: "UX Design & Development",
    year: "2023",
    image: "/placeholder.svg",
    link: "/work/pulse-ecommerce"
  },
  {
    title: "Horizon Mobile App",
    category: "App Design & Development",
    year: "2023",
    image: "/placeholder.svg",
    link: "/work/horizon-mobile-app"
  }
];

const WorkSection: React.FC = () => {
  return (
    <section id="Work" className="py-24 bg-mxv-white">
      <div className="container mx-auto px-6 mb-16">
        <TextReveal 
          text="Selected Work" 
          className="text-4xl md:text-5xl font-heading font-bold mb-4"
          tag="h2"
        />
        <div className="h-px w-16 bg-mxv-red"></div>
      </div>
      
      <div className="mb-16">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <a 
          href="/work" 
          className="inline-flex items-center text-lg font-medium hover:text-mxv-red transition-colors duration-300"
        >
          <span className="mr-2">View all projects</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default WorkSection;
