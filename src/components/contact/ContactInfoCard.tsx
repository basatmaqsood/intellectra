import React from 'react';

const ContactInfoCard: React.FC = () => {
  return (
    <div className="order-1 sm:order-2 w-full h-full bg-[#251305] backdrop-blur-sm border-2 border-primary-300 rounded-2xl p-7 sm:p-10 md:p-15 lg:p-20  xl:p-36 flex flex-col">
      <div className="flex-1 flex flex-col justify-center space-y-6">
        {/* Header */}
        <div>
          <h3 className="heading-3 text-primary-300 mb-4 text-center">
            Start with Clarity
          </h3>

          {/* Content */}
          <div className="space-y-4 text-center  text-gray-300 body-text-sm leading-relaxed">
            <p>
              Discover if <span className="text-primary-300">INTELLECTRA</span> is the right partner for your project with a clear breakdown of our services, pricing, and timelines. Share your project scope to receive tailored insights and technical advice on estimation accuracy or drawing requirements. Learn how we’ve helped contractors win bids and stay on budget — and start a conversation with us today. No pressure, just clarity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
