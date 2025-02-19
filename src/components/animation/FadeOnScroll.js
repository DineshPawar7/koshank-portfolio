import { useState, useEffect, useRef } from 'react';

const FadeOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current; // Store the current element in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentElement) {
      observer.observe(currentElement);  // Use the stored element reference
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);  // Use the stored element reference for cleanup
      }
    };
  }, []);  // Empty dependency array to run only on mount and unmount

  return (
    <div
      ref={elementRef}
      className={`transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transition: 'opacity 1s ease-in-out' }}
    >
      {children}
    </div>
  );
};

export default FadeOnScroll;
