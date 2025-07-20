import React from 'react';
import MissionSection from './MissionSection';
import VisionSection from './VisionSection';
import TeamSection from './TeamSection';

const ValuesSection: React.FC = () => {

  return (      
          <>
          {/* Mission Section */}
          <MissionSection />
          
          {/* Vision Section */}
          <VisionSection />
          
          {/* Team Section */}
          <TeamSection />
          </>
          
  );
};

export default ValuesSection; 