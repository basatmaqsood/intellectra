import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24">
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/who-we-are-bg.jpg)' }}
      ></div>
      
      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col">
          <h2 className="heading-3 text-primary-300 mb-6 md:mb-8 lg:mb-10 uppercase font-bold">
            WHO WE ARE?
          </h2>
          <div className="max-w-3xl">
            <p className="text-white body-text mb-4 md:mb-6">
              From a small team with a vision to a full-service estimation and design firm — we've grown by solving real problems for construction professionals. Our journey began when we noticed how many projects were suffering from inaccurate estimates and incomplete drawings.
            </p>
            <p className="text-white body-text">
              Today, we're proud to have supported over 120+ projects and 45+ winning bids with a 99.7% on-time delivery rate. Our estimators, drafters, and engineers are in-house—real professionals who understand what's at stake when you're bidding and building in today's competitive market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;