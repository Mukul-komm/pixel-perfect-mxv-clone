
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-mxv-black text-mxv-white border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="/" 
              className="font-heading text-2xl font-bold tracking-tighter bg-mxv-red px-3 py-1 rounded inline-block"
            >
              <span className="text-white">M.S Arden</span>
              <span className="text-white text-sm block -mt-1">Consulting</span>
            </a>
            <p className="mt-2 text-sm text-gray-400">
              Creating exceptional financial experiences since 2020
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-mxv-red transition-colors">Home</a></li>
                <li><a href="/work" className="hover:text-mxv-red transition-colors">Work</a></li>
                <li><a href="/services" className="hover:text-mxv-red transition-colors">Services</a></li>
                <li><a href="/about" className="hover:text-mxv-red transition-colors">About</a></li>
                <li><a href="/contact" className="hover:text-mxv-red transition-colors">Contact</a></li>
              </ul>
            </nav>
            
            <div className="h-6 border-l border-gray-700 hidden md:block"></div>
            
            <div className="flex space-x-4">
              <a href="#" className="hover:text-mxv-red transition-colors">
                <span className="sr-only">Instagram</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C9.284 2 8.944 2.01 7.877 2.06c-1.066.05-1.8.217-2.437.465a4.901 4.901 0 00-1.77 1.151 4.901 4.901 0 00-1.15 1.77c-.25.637-.416 1.37-.465 2.437C2.01 8.944 2 9.284 2 12s.01 3.057.06 4.123c.05 1.066.217 1.8.465 2.437a4.901 4.901 0 001.151 1.77 4.901 4.901 0 001.77 1.15c.637.25 1.37.416 2.437.465 1.067.05 1.407.06 4.123.06s3.057-.01 4.123-.06c1.066-.05 1.8-.217 2.437-.465a4.901 4.901 0 001.77-1.151 4.901 4.901 0 001.15-1.77c.25-.637.416-1.37.465-2.437.05-1.066.06-1.407.06-4.123s-.01-3.056-.06-4.123c-.05-1.066-.217-1.8-.465-2.437a4.901 4.901 0 00-1.151-1.77 4.901 4.901 0 00-1.77-1.15c-.637-.25-1.37-.416-2.437-.465C15.056 2.01 14.716 2 12 2zm0 1.8c2.67 0 2.987.01 4.042.059.976.044 1.504.207 1.857.344.467.18.8.397 1.15.748.35.35.566.683.747 1.15.137.353.3.882.344 1.857.048 1.055.059 1.37.059 4.042 0 2.67-.01 2.987-.059 4.042-.044.976-.207 1.504-.344 1.857-.18.467-.397.8-.748 1.15-.35.35-.682.566-1.15.747-.352.137-.88.3-1.856.344-1.055.048-1.37.059-4.042.059-2.67 0-2.987-.01-4.042-.059-.976-.044-1.504-.207-1.857-.344a3.098 3.098 0 01-1.15-.748 3.098 3.098 0 01-.747-1.15c-.137-.352-.3-.88-.344-1.856-.048-1.055-.059-1.37-.059-4.042 0-2.67.01-2.987.059-4.042.044-.976.207-1.504.344-1.857.18-.467.397-.8.748-1.15.35-.35.682-.566 1.15-.747.352-.137.88-.3 1.856-.344C9.013 3.81 9.329 3.8 12 3.8zm0 3.065A5.135 5.135 0 1017.135 12 5.135 5.135 0 0012 6.865zm0 8.468A3.333 3.333 0 1115.333 12 3.333 3.333 0 0112 15.333zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-mxv-red transition-colors">
                <span className="sr-only">Twitter</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-mxv-red transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>© 2025 MXV. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-mxv-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-mxv-red transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
