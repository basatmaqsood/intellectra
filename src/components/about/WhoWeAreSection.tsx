import React from 'react';

const WhoWeAreSection: React.FC = () => {
  return (
    <section className="relative w-full py-40 sm:py-75 md:py-60 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
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

      <div className="w-full max-w-[90%] sm:max-w-[85%]  md:max-w-[80%] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 lg:gap-6 xl:gap-30">

          {/* Left Side - Title */}
          <div className="flex justify-center lg:w-2/5 xl:w-1/4  flex-shrink-0">
            <h2 className="heading-2 text-primary-300 uppercase leading-tight text-center">
              WHO WE ARE
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col items-center lg:items-start lg:w-3/5 xl:w-3/4">
            <div className="text-center lg:text-left">
              <p className="text-white body-text leading-relaxed">
                Every great structure starts with a solid foundation — and so did we. INTELLECTRA began as a small team of engineers fixing real-world issues—unclear estimates, delayed drawings, and costly setbacks. What started as a side project became a trusted partner for contractors and consultants worldwide. Today, we deliver precise estimation and design solutions that bring clarity to every stage of construction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection; 