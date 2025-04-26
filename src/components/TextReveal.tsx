
import React, { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  once?: boolean; 
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const TextReveal: React.FC<TextRevealProps> = ({ 
  text, 
  delay = 0, 
  className = '', 
  once = true,
  tag: Tag = 'div'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (once && textRef.current) {
            observer.unobserve(textRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay, once]);

  return (
    <div ref={textRef} className="reveal-container">
      <Tag 
        className={`reveal-text ${isVisible ? 'reveal-text-visible' : 'reveal-text-initial'} ${className}`}
      >
        {text}
      </Tag>
    </div>
  );
};

export default TextReveal;
