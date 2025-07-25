import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <div className="w-full overflow-hidden h-full bg-[url('/images/mission-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-32 2xl:px-60 py-50 sm:py-75 md:py-60">
      
      
      {/* Circle - Left Side - Fixed Width */}
      <div className="flex justify-center mb-8 lg:mb-0 lg:w-80 xl:w-96 2xl:w-[400px] lg:flex-shrink-0">
        <div className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80  xl:w-96 xl:h-96 rounded-full border-2 border-accent2-300  flex items-center justify-center">
          <h3 className="heading-2 text-accent2-300 uppercase font-bold text-center">
            MISSION
          </h3>
        </div>
      </div>
      
      {/* Content - Right Side - Fixed Width */}
      <div className="flex flex-col items-center justify-center lg:flex-1 lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl text-center lg:text-left">
          <p className="text-white body-text leading-relaxed">
            What started as a response to a problem — today, it's the foundation behind smarter projects across the construction and engineering world.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default MissionSection; 