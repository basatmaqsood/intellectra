import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <div className="w-full overflow-hidden h-full bg-[url('/images/mission-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-32 2xl:px-60 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 2xl:py-60">
      
      
      {/* Circle - Left Side - Fixed Width */}
      <div className="flex justify-center mb-8 lg:mb-0 lg:w-80 xl:w-96 2xl:w-[400px] lg:flex-shrink-0">
        <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full border-2 border-accent2-300  flex items-center justify-center">
          <h3 className="heading-3 text-accent2-300 uppercase font-bold text-center">
            MISSION
          </h3>
        </div>
      </div>
      
      {/* Content - Right Side - Fixed Width */}
      <div className="flex flex-col items-center justify-center lg:flex-1 lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl text-center">
          <p className="text-white body-text leading-relaxed">
            What started as a response to a problem — today, it's the foundation behind smarter projects across the construction and engineering world.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default MissionSection; 