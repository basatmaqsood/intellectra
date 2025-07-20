import React, { useState, useEffect } from 'react';

const CaseStudyChangingText: React.FC = () => {
  const challenges = [
    "Financial\nConstraints",
    "Complex\nProgram", 
    "Stakeholder\nIntegration"
  ];

  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start animation
      setIsAnimating(true);
      
      setTimeout(() => {
        // Change text while animated
        setCurrentChallengeIndex((prevIndex) => (prevIndex + 1) % challenges.length);
        
        setTimeout(() => {
          // End animation
          setIsAnimating(false);
        }, 150); // Small delay before removing animation
      }, 250); // Change text after animation starts
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, [challenges.length]);

  const currentChallenge = challenges[currentChallengeIndex];

  return (
    <div className="bg-[url('/images/casestudy/casestudy-3-4.png')] bg-cover bg-center text-white p-8 rounded-[40px] flex items-center justify-center h-full">
      <div className="text-center">
        <p 
          className={`heading-5 font-bold whitespace-pre-line leading-tight transition-all duration-500 ease-in-out transform ${
            isAnimating 
              ? 'opacity-0 blur-sm scale-95' 
              : 'opacity-100 blur-0 scale-100'
          }`}
        >
          {currentChallenge}
        </p>
      </div>
    </div>
  );
};

export default CaseStudyChangingText; 