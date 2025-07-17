import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StepSection from './StepSection';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: 1,
      title: "Share Your Scope",
      description: "Send us your project drawings or technical needs.",
      imagePath: "/images/steps/step1.png",
      dotColor: "bg-orange-500",
      lineColor: "from-orange-500"
    },
    {
      number: 2,
      title: "Receive a Custom Proposal",
      description: "We'll respond with a clear plan, timeline, and quote.",
      imagePath: "/images/steps/step2.png",
      dotColor: "bg-teal-400",
      lineColor: "via-teal-400"
    },
    {
      number: 3,
      title: "Get Delivery with Confidence",
      description: "Accurate estimates. Quality drawings. On time. Every time.",
      imagePath: "/images/steps/step3.png",
      dotColor: "bg-orange-500",
      lineColor: "to-orange-500"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the timeline line progress with continuous movement
      gsap.fromTo(timelineRef.current, 
        { 
          scaleY: 0,
          transformOrigin: "top"
        },
        {
          scaleY: 1,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.5, // Smoother scrubbing for continuous movement
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden pb-18 sm:pb-14 md:pb-20 lg:pb-28 xl:pb-36  pt-2 md:pt-14 lg:pt-16 xl:pt-20 " ref={containerRef}>
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-[66%] left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
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


        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-[33%] left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #F98328 0%, #Fa8f28 10%, #000000 100%)'
             }}>
        </div>
        
        {/* Teal gradient ball - top right */}
        <div className="absolute top-[33%] right-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full translate-x-5/8 md:translate-x-3/8 translate-y-4 md:translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #7EC8C4 0%, #7EC8e4 10%, #000000 100%)'
             }}>
        </div>


        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #F98328 0%, #Fa8f28 10%, #000000 100%)'
             }}>
        </div>
        
        {/* Teal gradient ball - top right */}
        <div className="absolute top-[66%] right-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full translate-x-5/8 md:translate-x-3/8 translate-y-4 md:translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #7EC8C4 0%, #7EC8e4 10%, #000000 100%)'
             }}>
        </div>
      </div>
      
      
      {/* Main content - centered */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="heading-2 text-orange-500 uppercase tracking-wider">
            HOW IT WORKS
          </h2>
        </div>

        {/* Timeline container - centered with fixed width */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Main timeline structure */}
          <div className="relative max-w-md lg:max-w-none mx-auto">
            {/* Single continuous timeline line with gradient and fading effect */}
            <div className="absolute left-[30px] w-0.5" style={{ top: '15px', bottom: '-50px' }}>
              <div 
                ref={timelineRef}
                className="absolute top-0 w-full h-full"
                style={{
                  background: 'linear-gradient(to bottom, var(--color-primary-300) 0%, var(--color-accent2-300) 50%, var(--color-primary-300) 85%, transparent 100%)'
                }}
              ></div>
            </div>

            {/* Steps */}
            <div className="space-y-0">
              {steps.map((step, index) => (
                <StepSection
                  key={step.number}
                  step={step}
                  index={index}
                  isFirst={index === 0}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;