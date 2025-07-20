import React from 'react';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';

const ContactHero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #F98328 0%, #Fa8f28 10%, #000000 100%)'
             }}>
        </div>
        
        {/* Teal gradient ball - top right */}
        <div className="absolute top-0 right-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full translate-x-3/8 translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #7EC8C4 0%, #7EC8e4 10%, #000000 100%)'
             }}>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center py-15">
        <div className="container mx-auto py-18 sm:py-0 px-12 xs:px-22 sm:px-28 lg:px-36 xl:px-56">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="heading-2 text-primary-300 mb-4 uppercase tracking-wider">
              CONTACT US
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-16 mx-auto ">
            {/* Contact Form - Left Side */}
              <ContactForm />

            {/* Contact Info Card - Right Side */}
              <ContactInfoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;