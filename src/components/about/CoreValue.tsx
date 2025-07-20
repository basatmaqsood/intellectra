import React from 'react';

interface CoreValueProps {
  subtitle?: string;
  title?: React.ReactNode;
}

const CoreValue: React.FC<CoreValueProps> = ({ 
  subtitle = "How Our Team Identifies Us",
  title = <>We are <span className="text-accent2-300">Collaborative</span></>
}) => {
  return (
    <section className="relative w-full bg-black py-16 md:py-20 lg:py-24">
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
          <p className="body-text text-white mb-4 md:mb-6">
            {subtitle}
          </p>
          <h2 className="heading-2 mb-6 md:mb-8 lg:mb-10">
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;