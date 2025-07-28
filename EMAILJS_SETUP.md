# Email.js Integration Setup Guide

## 1. Email.js Account Setup

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create an account
2. Once logged in, you'll need to set up:
   - **Email Service** (Gmail, Outlook, etc.)
   - **Email Template**
   - **Public Key**

## 2. Email Service Configuration

1. Go to **Email Services** in your Email.js dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email account
5. Note down the **Service ID** (e.g., `service_xxxxxxx`)

## 3. Email Template Creation

1. Go to **Email Templates** in your Email.js dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: New Contact Form Submission from {{from_name}}
   
   Hello {{to_name}},
   
   You have received a new message from your website contact form:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   
   Message:
   {{message}}
   
   Best regards,
   Website Contact Form
   ```
4. Save the template and note down the **Template ID** (e.g., `template_xxxxxxx`)

## 4. Public Key Configuration

1. Go to **Account** → **General** in your Email.js dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxx`)

## 5. Environment Variables Setup

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add the following variables with your actual values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```

## 6. Security Considerations

- The public key is safe to expose in client-side code
- Email.js handles rate limiting and spam protection
- Consider adding a captcha for additional security
- Monitor your Email.js usage to prevent abuse

## 7. Testing

1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your configured email for the message
5. Monitor the browser console for any errors

## 8. Production Deployment

- Ensure your environment variables are set in your hosting platform
- For Vercel: Add environment variables in Project Settings
- For Netlify: Add environment variables in Site Settings
- Test the form after deployment

## 9. Troubleshooting

- Check browser console for JavaScript errors
- Verify environment variables are loaded correctly
- Test Email.js configuration in their dashboard
- Ensure email service is properly connected
- Check spam folder for test emails

## 10. Email.js Pricing

- Free tier: 200 emails/month
- Paid plans available for higher volumes
- Monitor usage in Email.js dashboard
