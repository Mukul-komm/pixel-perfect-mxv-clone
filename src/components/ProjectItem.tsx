
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectItemProps {
  title: string;
  category: string;
  year: string;
  image: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, category, year, image, link }) => {
  return (
    <a 
      href={link} 
      className="group project-item block py-8 md:py-12"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex-1">
            <h3 className="text-2xl md:text-4xl font-heading font-bold mb-2 group-hover:text-mxv-red transition-colors duration-300">
              {title}
            </h3>
            <div className="flex text-sm md:text-base font-mono mb-6 md:mb-0">
              <span className="mr-4">{category}</span>
              <span>{year}</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <span className="hidden md:inline-block mr-6 text-mxv-red font-medium">View Project</span>
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-mxv-red rounded-full group-hover:bg-mxv-red transition-colors duration-300">
              <ArrowRight className="w-5 h-5 group-hover:text-mxv-white transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
