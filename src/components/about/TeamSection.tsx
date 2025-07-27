import React from 'react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Hassan Rehman",
      title: "Drafting Engineer",
      image: "/images/team/team1.png"
    },
    {
      name: "Fatima Naveed",
      title: "Estimation Coordinator",
      image: "/images/team/team2.png"
    },
    {
      name: "Arshad Khan",
      title: "Estimation Engineer",
      image: "/images/team/team3.png"
    }
  ];

  return (
    <div className="bg-[url('/images/team-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col lg:flex-row md:items-center md:justify-center gap-8 md:gap-16 lg:gap-16 xl:gap-20 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-32 2xl:px-60 py-50 sm:py-75 md:py-60">
      

      
      {/* Circle - Left Side - Fixed Width */}
      <div className="flex justify-center mb-8 lg:mb-0 lg:w-84 xl:w-96 2xl:w-[400px] lg:flex-shrink-0">
        <div className="relative w-48 h-48 sm:w-72 sm:h-72 lg:w-84 lg:h-84 xl:w-96 xl:h-96 rounded-full border-2 border-accent2-300 flex items-center justify-center">
          <h3 className="heading-2 text-accent2-300 uppercase font-bold text-center">
            TEAM
          </h3>
        </div>
      </div>
      
      {/* Content - Right Side - Fixed Width */}
      <div className="flex flex-col items-center justify-center lg:flex-1 lg:max-w-md xl:max-w-lg 2xl:max-w-xl">
        <div className="flex flex-row  lg:flex-col gap-3 space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 w-full max-w-sm md:max-w-md">
          {teamMembers.map((member, memberIndex) => (
            <div key={memberIndex} className="flex flex-col  text-wrap lg:flex-row items-center gap-4 lg:gap-6 justify-start">
              {/* Profile Image */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden flex-shrink-0 bg-gray-600 border border-teal-400">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23666'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='white' font-size='14'%3E" + member.name.split(' ').map(n => n[0]).join('') + "%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              {/* Member Info */}
              <div className="flex flex-col text-center  min-w-0 lg:text-left ">
                <h4 className="heading-5 text-white font-bold mb-1 leading-tight min-h-10 md:min-h-min">
                  {member.name}
                </h4>
                <p className="body-text-sm text-gray-300 leading-relaxed">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default TeamSection; 