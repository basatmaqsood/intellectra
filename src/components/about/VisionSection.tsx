import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 md:gap-12 lg:gap-16 xl:gap-20 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-32 2xl:px-60 py-50 sm:py-75 md:py-60">

            {/* Background Effects */}
            <div className="absolute inset-0 z-[-1] overflow-hidden">
                {/* Orange gradient ball - bottom left */}
                <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-3/4 sm:-translate-x-2/4  -translate-y-2 sm:-translate-y-10 blur-lg"
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

      {/* Circle - Left Side - Fixed Width */}
      <div className="flex justify-center mb-8 lg:mb-0 lg:w-80 xl:w-96 2xl:w-[400px] lg:flex-shrink-0">
        <div className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-84 lg:h-84 xl:w-96 xl:h-96 rounded-full border-2 border-primary-300 bg-black flex items-center justify-center">
          <h3 className="heading-2 text-primary-300 uppercase font-bold text-center">
            VISION
          </h3>
        </div>
      </div>
      
      {/* Content - Right Side - Fixed Width */}
      <div className="flex flex-col items-center justify-center lg:flex-1 lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
        <div className="max-w-lg md:max-w-xl lg:max-w-2xl text-center md:text-left">
          <p className="text-white body-text leading-relaxed">
            To be recognized as a leading partner in project estimation and engineering design. Known for our reliability, quality, and innovation, INTELLECTRA aspires to drive digital transformation across the construction and engineering world.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default VisionSection; 