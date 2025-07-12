import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Step {
  number: number;
  title: string;
  description: string;
  imagePath: string;
  dotColor: string;
  lineColor: string;
}

interface StepSectionProps {
  step: Step;
  index: number;
  isFirst: boolean;
  isLast: boolean;
}

const StepSection = ({ step, index, isFirst, isLast }: StepSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(contentRef.current, { 
        opacity: 0, 
        x: 20
      });
      
      gsap.set(imageRef.current, { 
        opacity: 0, 
        scale: 0.9
      });

      gsap.set(dotRef.current, { 
        scale: 0.6,
        opacity: 0.6
      });

      // Animate content on scroll
      gsap.to(contentRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate image on scroll
      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 45%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate timeline dot
      gsap.to(dotRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [index]);

  // Get border color based on step number
  const getBorderStyle = () => {
    if (step.number === 1 || step.number === 3) {
      return { borderColor: 'var(--color-primary-300)' }; // Orange for steps 1 and 3
    } else if (step.number === 2) {
      return { borderColor: 'var(--color-accent2-300)' }; // Teal for step 2
    }
    return {};
  };

  // Get text color based on step number
  const getTextColor = () => {
    if (step.number === 1 || step.number === 3) {
      return 'text-orange-500'; // Orange for steps 1 and 3
    } else if (step.number === 2) {
      return 'text-teal-400'; // Teal for step 2
    }
    return 'text-orange-500';
  };

  return (
    <div 
      ref={sectionRef}
      className="relative min-h-[250px] sm:min-h-[350px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] mb-24 md:mb-32 last:mb-0"
      style={{ height: 'auto' }}
    >

      {/* Background Effects */}


      {/* Timeline dot with outline */}
      <div 
        ref={dotRef}
        className="timeline-dot-outer absolute left-[30px] transform -translate-x-1/2 z-20"
        style={{ top: '0' }}
      >
        <div 
          className="w-[30px] h-[30px] rounded-full flex items-center justify-center border-2" 
          style={{ 
            background: '#000', 
            ...getBorderStyle() 
          }}
        >
          <div className={`w-[18px] h-[18px] rounded-full ${step.dotColor}`}></div>
        </div>
      </div>

      {/* Content layout with proper spacing */}
      <div className="flex flex-col md:flex-row pl-16 ">
        {/* Text content - spans 2/3 width */}
        <div 
          ref={contentRef}
          className="w-full md:w-2/3 mb-8 md:mb-0 pr-0 md:pr-4"
        >
          <h3 className={`heading-3 ${getTextColor()} mb-2 mt-[-5px]`}>
            Step {step.number}: {step.title}
          </h3>
          <p className="body-text-sm text-white max-w-md">
            {step.description}
          </p>
        </div>

        {/* Image - spans 1/3 width */}
        <div 
          ref={imageRef}
          className="w-full md:w-1/3 flex justify-center md:justify-end items-start"
        >
          <img 
            src={step.imagePath} 
            alt={`Step ${step.number}: ${step.title}`} 
            className="w-28 h-28 md:w-32 md:h-32 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default StepSection;