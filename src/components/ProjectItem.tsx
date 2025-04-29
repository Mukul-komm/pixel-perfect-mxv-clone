import React, { useState } from 'react';

// --- CSS for the 3D Flip Effect ---
// NOTE: In a real application, you would typically move these styles
// into your global CSS file (e.g., index.css, globals.css)
// or configure Tailwind CSS (if using) to include custom utilities
// for perspective, transform-style, backface-visibility, and rotateY.
const flipCardStyles = `
  .perspective-1000 { perspective: 1000px; }
  .preserve-3d { transform-style: preserve-3d; }
  .rotate-y-180 { transform: rotateY(180deg); }
  .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }

  /* Ensure the card container is focusable for accessibility */
  .focusable-card:focus {
    outline: 2px solid blue; /* Example focus style */
    outline-offset: 2px;
  }
`;

// --- Founder Card Component ---
// Interface defining the props for the FounderCard
interface FounderCardProps {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
}

// Reusable card component with flip animation
const FounderCard: React.FC<FounderCardProps> = ({ name, title, bio, imageSrc }) => {
  // State to track if the card is flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // Event handlers to toggle the flip state
  const handleFocus = () => setIsFlipped(true);
  const handleBlur = () => setIsFlipped(false);
  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);

  return (
    // Container for the card with perspective and event handlers
    // Added tabIndex for keyboard focus and focus/blur handlers
    <div
      className="perspective-1000 w-full sm:w-72 md:w-80 h-96 relative focusable-card rounded-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0} // Make it focusable via keyboard
      aria-label={`View details for ${name}, ${title}`} // Accessibility label for screen readers
    >
      {/* Inner container that handles the 3D rotation */}
      <div className={
        `w-full h-full transition-transform duration-700 transform preserve-3d relative rounded-xl shadow-lg ${isFlipped ? "rotate-y-180" : ""}`
      }>
        {/* Front side of the card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-gray-200">
          {/* Founder's image */}
          <img
            src={imageSrc}
            alt={`Photo of ${name}, ${title}`} // Descriptive alt text
            className="w-full h-full object-cover"
            // Fallback placeholder image in case the primary source fails
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Prevent infinite loop if placeholder also fails
              // Use placehold.co for a simple text-based placeholder
              target.src = `https://placehold.co/320x384/e2e8f0/64748b?text=${encodeURIComponent(name)}`;
            }}
          />
           {/* Optional overlay on the front to show name/title */}
           <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
             <h3 className="text-white text-xl font-semibold">{name}</h3>
             <p className="text-gray-200 text-sm">{title}</p>
           </div>
        </div>

        {/* Back side of the card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-center p-6 text-center border border-gray-200">
          {/* Founder's details */}
          <h3 className="text-2xl font-bold mb-2 text-gray-800">{name}</h3>
          <p className="text-lg font-medium text-indigo-600 mb-4">{title}</p>
          <p className="text-gray-600 text-sm">{bio}</p>
        </div>
      </div>
    </div>
  );
};


// --- Team Section Component ---
// This component arranges multiple FounderCards into a section
const TeamSection: React.FC = () => {
  // Sample data for team members
  const teamMembers = [
    {
      name: "Mukul",
      title: "Founder & Consultant",
      bio: "With a diverse skillset cultivated in the VC, Consumer, and Tech. Mukul offers expertise spanning Business Valuation, Business Strategy, Investment Analysis, and Data Analysis. His central objective is to drive business growth alongside profitability.",
      imageSrc: "https://i.imgur.com/yqGm9CE.jpeg"
    },
    {
      name: "Aman Saini",
      title: "Co-Founder & Consultant",
      bio: "With an MBA from IIM Visakhapatnam, Aman specializes in FP&A, focusing on budgeting, cash flow, forecasting, and financial strategy. His passion lies in leveraging financial insights to drive business performance and achieve sustainable growth and profitability.",
      imageSrc: "https://i.imgur.com/BQpeYOU.jpeg"
    },
    
  ];

  return (
    // Section container with padding and background color
    <section className="py-16 px-4 bg-gray-50 font-sans"> {/* Using Tailwind's default sans-serif font */}
      {/* Injecting the necessary CSS styles via a style tag */}
      {/* Remember to move this to a global CSS file in a real project */}
      <style>{flipCardStyles}</style>

      {/* Centered content container */}
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The visionaries behind our mission to revolutionize the industry with innovative solutions.
          </p>
        </div>

        {/* Grid layout for the founder cards */}
        {/* Uses flexbox with wrapping for responsiveness */}
        <div className="flex flex-wrap gap-8 md:gap-10 justify-center items-center">
          {/* Map over the teamMembers data to render a FounderCard for each member */}
          {teamMembers.map((member, index) => (
            <FounderCard
              key={index} // Using index as key, consider a unique ID if available
              name={member.name}
              title={member.title}
              bio={member.bio}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>

        {/* Optional footer text for the section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team combines expertise and passion to create a company that puts customers first. Hover over or focus on their images to learn more.
          </p>
        </div>
      </div>
    </section>
  );
};

// Export the TeamSection component as the default export of this file
export default TeamSection;
