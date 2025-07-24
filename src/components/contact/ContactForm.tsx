import React, { useState } from 'react';
import { LinkButton } from '../../stories/components/Button';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full h-full flex flex-col order-2 sm:order-1">
      <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-4">
        {/* Full Name Field */}
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-7 py-4 bg-transparent border-2 text-white border-primary-300 rounded-lg  placeholder-primary-300 focus:outline-none focus:border-primary-500 transition-colors heading-6"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-7 py-4 bg-transparent border-2 border-primary-300 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-primary-500 transition-colors heading-6"
            required
          />
        </div>

        {/* Phone Field */}
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-7 py-4 bg-transparent border-2 border-primary-300 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-primary-500 transition-colors heading-6"
            required
          />
        </div>

        {/* Message Field - This will grow to fill remaining space */}
        <div className="flex-1 flex flex-col">
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            className="w-full flex-1 min-h-[120px] px-7 py-4 bg-transparent border-2 border-primary-300 rounded-lg text-white placeholder-primary-300 focus:outline-none focus:border-primary-500 transition-colors resize-none heading-6 "
            required
          />
        </div>

        {/* Submit Button */}
        <div className="mt-4">
            <LinkButton variant='tertiary' showArrow className='py-3 px-16'>Submit</LinkButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
