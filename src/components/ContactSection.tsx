
import React from 'react';
import TextReveal from './TextReveal';

const ContactSection: React.FC = () => {
  return (
    <section id="Contact" className="py-24 bg-mxv-black text-mxv-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <TextReveal 
              text="Get in Touch" 
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
              tag="h2"
            />
            <div className="h-px w-16 bg-mxv-red mb-8"></div>
            
            <TextReveal 
              text="Let's discuss how we can help bring your ideas to life. Reach out and we will get back to you within 12 hours." 
              className="text-xl mb-8 text-gray-300"
              tag="p"
              delay={200}
            />
            
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-mono text-sm text-gray-400 mb-1">Email</p>
                <a href="mailto:info@msarden.in" className="text-lg hover:text-mxv-red transition-colors">info@msarden.in</a>
              </div>
              <div>
                <p className="font-mono text-sm text-gray-400 mb-1">Office</p>
                <address className="text-lg not-italic">
                The Platina Survey, <br />
                  Gachibowli Rd, Gachibowli, <br />
                  Hyderabad 500032
                </address>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-mxv-red transition-colors">Instagram</a>
              <a href="#" className="hover:text-mxv-red transition-colors">Twitter</a>
              <a href="#" className="hover:text-mxv-red transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div className="bg-mxv-dark-gray p-8 md:p-12">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block font-mono text-sm text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-mxv-red outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block font-mono text-sm text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-mxv-red outline-none transition-colors"
                  placeholder="Your email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block font-mono text-sm text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-mxv-red outline-none transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="mt-6 inline-flex items-center bg-mxv-red text-white py-3 px-8 font-medium hover:bg-mxv-dark-gray hover:text-mxv-red border border-mxv-red transition-colors duration-300"
              >
                Send Message
                <svg className="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
