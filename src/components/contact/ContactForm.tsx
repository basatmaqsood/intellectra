import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { LinkButton } from '../../stories/components/Button';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  isSubmitting: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    isSubmitting: false
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const { executeRecaptcha } = useGoogleReCaptcha();

  // Validation functions
  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return 'Full name is required';
    }
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      return 'Name must contain only letters and spaces';
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters long';
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Email is required';
    }
    // More comprehensive email validation regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid email address';
    }
    // Additional checks for common issues
    if (email.trim().length > 254) {
      return 'Email address is too long';
    }
    if (email.trim().includes('..')) {
      return 'Email address cannot contain consecutive dots';
    }
    if (email.trim().startsWith('.') || email.trim().endsWith('.')) {
      return 'Email address cannot start or end with a dot';
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return 'Phone number is required';
    }
    // Remove any spaces, dashes, or parentheses for validation
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (!/^\d+$/.test(cleanPhone)) {
      return 'Phone number must contain only numbers';
    }
    if (cleanPhone.length < 10) {
      return 'Phone number must be at least 10 digits';
    }
    return undefined;
  };

  const validateMessage = (message: string): string | undefined => {
    if (!message.trim()) {
      return 'Message is required';
    }
    if (message.trim().length < 10) {
      return 'Message must be at least 10 characters long';
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    newErrors.fullName = validateName(formData.fullName);
    newErrors.email = validateEmail(formData.email);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.message = validateMessage(formData.message);

    setErrors(newErrors);

    // Return true if no errors
    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    // Prevent double submission
    if (status.isSubmitting) {
      return;
    }
    
    // Validate form before submission
    if (!validateForm()) {
      // Don't show toast for validation errors, just return
      // Validation errors are already shown inline below each field
      return;
    }

    // Check if reCAPTCHA is available
    if (!executeRecaptcha) {
      toast.error('reCAPTCHA not available. Please refresh the page and try again.', {
        theme: 'dark',
        style: {
          backgroundColor: '#000',
          color: '#ffffff',
          border: '1px solid #ef4444'
        }
      });
      return;
    }

    setStatus({
      isSubmitting: true
    });

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await executeRecaptcha('contact_form');
      
      if (!recaptchaToken) {
        throw new Error('Failed to get reCAPTCHA token');
      }

      // Get Email.js configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Check if all required environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        toast.error('Email service configuration is missing. Please check environment variables.', {
          theme: 'dark',
          style: {
            backgroundColor: '#1f2937',
            color: '#ffffff',
            border: '1px solid #374151'
          }
        });
        setStatus({ isSubmitting: false });
        return;
      }

      // Initialize Email.js with public key
      emailjs.init(publicKey);

      // Prepare template parameters (including reCAPTCHA token)
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Intellectra Team',
        recaptcha_token: recaptchaToken, // Include token for server-side verification
      };

      // Send email using Email.js
      const response = await emailjs.send(serviceId, templateId, templateParams);

      if (response.status === 200) {
        setStatus({
          isSubmitting: false
        });

        toast.success('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', {
          theme: 'dark',
          style: {
            backgroundColor: '#000',
            color: '#ffffff',
            border: '1px solid #F59E0B'
          }
        });

        // Reset form data and errors
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      setStatus({
        isSubmitting: false
      });
      
      toast.error('Failed to send message. Please try again or contact us directly.', {
        theme: 'dark',
        style: {
          backgroundColor: '#000',
          color: '#ffffff',
          border: '1px solid #ef4444'
        }
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col order-2 sm:order-1">
      <form onSubmit={handleSubmit} className="flex flex-col body-text h-full space-y-4">
        {/* Full Name Field */}
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-7 py-3 bg-black border-2 text-white rounded-lg placeholder-primary-300 focus:outline-none transition-colors body-text ${
              errors.fullName 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-primary-300 focus:border-primary-500'
            }`}
            required
            disabled={status.isSubmitting}
          />
          {errors.fullName && (
            <p className="text-red-400 text-sm mt-1 ml-2">{errors.fullName}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-7 py-3 bg-black border-2 rounded-lg text-white placeholder-primary-300 focus:outline-none transition-colors body-text ${
              errors.email 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-primary-300 focus:border-primary-500'
            }`}
            required
            disabled={status.isSubmitting}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1 ml-2">{errors.email}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-7 py-3 bg-black border-2 rounded-lg text-white placeholder-primary-300 focus:outline-none transition-colors body-text ${
              errors.phone 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-primary-300 focus:border-primary-500'
            }`}
            required
            disabled={status.isSubmitting}
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-1 ml-2">{errors.phone}</p>
          )}
        </div>

        {/* Message Field - This will grow to fill remaining space */}
        <div className="flex-1 flex flex-col">
          <textarea
            name="message"
            placeholder="Message*"
            value={formData.message}
            onChange={handleChange}
            className={`w-full flex-1 min-h-[120px] px-7 py-4 bg-black border-2 rounded-lg text-white placeholder-primary-300 focus:outline-none transition-colors resize-none body-text ${
              errors.message 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-primary-300 focus:border-primary-500'
            }`}
            required
            disabled={status.isSubmitting}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1 ml-2">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <LinkButton 
            variant="tertiary" 
            showArrow={!status.isSubmitting}
            className={`py-3 px-16 ${status.isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            onClick={handleSubmit}
          >
            {status.isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full"></span>
                Sending...
              </span>
            ) : (
              'Submit'
            )}
          </LinkButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
