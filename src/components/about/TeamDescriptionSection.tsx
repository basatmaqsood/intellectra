import React, { useState, useEffect } from 'react';

const TeamDescriptionSection: React.FC = () => {
  const words = [
    { 
      text: 'Creative', 
      color: 'text-accent2-300',
      shadow: 'drop-shadow-[15px_15px_8px_rgba(0,255,241,0.35)]'     // Reduced blur for less glow
    },
    { 
      text: 'Reliable', 
      color: 'text-primary-300',
      shadow: 'drop-shadow-[15px_15px_8px_rgba(249,131,40,0.35)]'    // Reduced blur for less glow
    },
    { 
      text: 'Precise', 
      color: 'text-accent2-300',
      shadow: 'drop-shadow-[15px_15px_8px_rgba(0,255,241,0.35)]'     // Reduced blur for less glow
    },
    { 
      text: 'Dynamic', 
      color: 'text-primary-300',
      shadow: 'drop-shadow-[15px_15px_8px_rgba(249,131,40,0.35)]'    // Reduced blur for less glow
    },
    { 
      text: 'Collaborative', 
      color: 'text-accent2-300',
      shadow: 'drop-shadow-[15px_15px_8px_rgba(0,255,241,0.35)]'     // Reduced blur for less glow
    }
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start blur effect
      setIsBlurred(true);
      
      setTimeout(() => {
        // Change word while blurred
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        
        setTimeout(() => {
          // Remove blur effect
          setIsBlurred(false);
        }, 150); // Small delay before unblurring
      }, 200); // Change word after blur starts
    }, 3500); // Change word every 3.5 seconds

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <section className="relative w-full py-16 md:py-20 lg:py-28 xl:py-60  overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-3/4 sm:-translate-x-2/4 -translate-y-2 sm:-translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #F98328 0%, #Fa8f28 10%, #000000 100%)'
             }}>
        </div>
        
        {/* Teal gradient ball - top right */}
        <div className="absolute top-0 right-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full translate-x-5/8 md:translate-x-3/8 translate-y-4 md:translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #7EC8C4 0%, #7EC8e4 10%, #000000 100%)'
             }}>
        </div>
      </div>
      
      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Subtitle */}
          <p className="body-text text-white mb-4 md:mb-6 uppercase tracking-wider">
            How Our Team Describes Us
          </p>
          
          {/* Main Title with Animated Word */}
          <div className="mb-6 md:mb-8 lg:mb-10">
            <h2 className="heading-2 text-white">
              We are
            </h2>
            <h2 
              className={`heading-1 ${words[currentWordIndex].color} ${words[currentWordIndex].shadow} transition-all duration-300 ${
                isBlurred ? 'blur-lg' : 'blur-0'
              }`}
            >
              {words[currentWordIndex].text}
            </h2>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TeamDescriptionSection; 