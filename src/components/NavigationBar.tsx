
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-mxv-black bg-opacity-90 backdrop-blur-sm' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="font-heading text-2xl font-bold tracking-tighter text-mxv-white">
            MXV
          </a>
          
          <button 
            className="text-mxv-white hover:text-mxv-red transition-colors z-50" 
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 bg-mxv-black flex flex-col justify-center items-center z-40 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className="text-center">
          <ul className="space-y-8">
            {[
              { name: 'Home', url: '/' },
              { name: 'Work', url: '/work' },
              { name: 'Services', url: '/services' },
              { name: 'About', url: '/about' },
              { name: 'Contact', url: '/contact' },
            ].map((item) => (
              <li key={item.name} className="overflow-hidden">
                <a 
                  href={item.url} 
                  className="inline-block text-4xl md:text-6xl font-heading font-bold text-mxv-white hover:text-mxv-red transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  <span className="inline-block relative">
                    {item.name}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-mxv-red transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-10 left-0 right-0 text-center text-mxv-white">
          <p className="mb-2 text-sm font-mono">© 2025 MXV. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-mxv-red transition-colors">Instagram</a>
            <a href="#" className="hover:text-mxv-red transition-colors">Twitter</a>
            <a href="#" className="hover:text-mxv-red transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
