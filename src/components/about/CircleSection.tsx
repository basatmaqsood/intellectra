import React from 'react';

interface GradientBall {
  position: string; // e.g., "bottom-0 left-0", "top-0 right-0"
  translate: string; // e.g., "-translate-x-3/4 -translate-y-10"
  color: 'orange' | 'teal'; // Color of the gradient ball
}

interface CircleSectionProps {
  title: string;
  description: string;
  titleColorClass?: string;
  backgroundImage?: string;
  gradientBalls?: GradientBall[];
}

const CircleSection: React.FC<CircleSectionProps> = ({ 
  title, 
  description,
  titleColorClass = "text-accent2-300", // Default teal color
  backgroundImage,
  gradientBalls
}) => {
  return (
    <div className="relative w-full py-16 md:py-20 lg:py-24 flex flex-col items-center">
      {/* Background Image (if provided) */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-[-1] bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      )}
      
      {/* Gradient Balls (if provided) */}
      {gradientBalls && gradientBalls.length > 0 && (
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          {gradientBalls.map((ball, index) => (
            <div 
              key={index}
              className={`absolute ${ball.position} w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full ${ball.translate} blur-lg`}
              style={{
                background: ball.color === 'orange' 
                  ? 'radial-gradient(circle at center, #F98328 0%, #Fa8f28 10%, #000000 100%)'
                  : 'radial-gradient(circle at center, #7EC8C4 0%, #7EC8e4 10%, #000000 100%)'
              }}
            ></div>
          ))}
        </div>
      )}
      
      {/* Circle and Content */}
      <div className={`relative w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full border-2 border-white flex items-center justify-center mb-8 md:mb-10 lg:mb-12`}>
        <h3 className={`heading-4 ${titleColorClass} uppercase font-bold`}>
          {title}
        </h3>
      </div>
      <p className="text-white body-text text-center max-w-xl mx-auto px-4">
        {description}
      </p>
    </div>
  );
};

export default CircleSection;