
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
  
];

const WorkSection: React.FC = () => {
  return (
    <section id="Work" className="py-24 bg-mxv-white">
      <div className="container mx-auto px-6 mb-16">
        <TextReveal 
          text="Team" 
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
    </section>
  );
};

export default WorkSection;
