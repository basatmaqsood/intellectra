import React from 'react';
import CircleSection from './CircleSection';

const CompanyValues: React.FC = () => {
  const values = [
    {
      title: "MISSION",
      description: "To provide construction professionals with accurate estimates and detailed designs that empower them to bid confidently, build efficiently, and deliver projects on time and within budget.",
      titleColorClass: "text-accent2-300", // Teal color
      backgroundImage: "/images/mission-bg.jpg"
    },
    {
      title: "VISION",
      description: "To become the industry standard for construction estimation and design services, known for our precision, reliability, and commitment to helping our clients succeed in an increasingly competitive market.",
      titleColorClass: "text-primary-300", // Orange color
      backgroundImage: "/images/vision-bg.jpg"
    },
    {
      title: "TEAM",
      description: "Our team consists of experienced estimators, designers, and engineers who bring decades of combined industry experience to every project we undertake.",
      titleColorClass: "text-accent2-300", // Teal color
      backgroundImage: "/images/team-bg.jpg"
    }
  ];

  return (
    <>
      {values.map((value, index) => (
        <CircleSection
          key={index}
          title={value.title}
          description={value.description}
          titleColorClass={value.titleColorClass}
          backgroundImage={value.backgroundImage}
        />
      ))}
    </>
  );
};

export default CompanyValues;