
import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", once = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const currentRef = document.getElementById("animated-text-" + text.replace(/\s+/g, "-").toLowerCase());
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [text, once]);

  return (
    <div 
      id={`animated-text-${text.replace(/\s+/g, "-").toLowerCase()}`}
      className={`overflow-hidden ${className}`}
    >
      <div
        className={`transition-transform duration-700 ${
          isVisible ? "transform-none" : "translate-y-full"
        }`}
      >
        {text}
      </div>
    </div>
  );
};
