
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isLinkHover, setIsLinkHover] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleLinkHover = () => setIsLinkHover(true);
    const handleLinkLeave = () => setIsLinkHover(false);

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', () => setIsVisible(false));
    window.addEventListener('mouseenter', () => setIsVisible(true));

    // Add event listeners to links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleLinkHover);
      element.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', () => setIsVisible(false));
      window.removeEventListener('mouseenter', () => setIsVisible(true));
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleLinkHover);
        element.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  useEffect(() => {
    // This runs on component mount and whenever DOM might change
    const addEventListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, .interactive');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => setIsLinkHover(true));
        element.addEventListener('mouseleave', () => setIsLinkHover(false));
      });
    };

    // Initial setup
    addEventListeners();

    // Setup a mutation observer to detect DOM changes
    const observer = new MutationObserver(addEventListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className={`cursor-follow ${isVisible ? 'cursor-active' : ''} ${isClicking ? 'scale-75' : ''} ${isLinkHover ? 'scale-150' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`
      }}
    />
  );
};

export default CustomCursor;
