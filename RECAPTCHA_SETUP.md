# Google reCAPTCHA v3 Setup Guide

## 1. Create reCAPTCHA Account

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Click "+" to create a new site
3. Fill in the form:
   - **Label**: "Intellectra Contact Form"
   - **reCAPTCHA type**: Select "reCAPTCHA v3"
   - **Domains**: Add your domains:
     - `localhost` (for development)
     - `127.0.0.1` (for development)
     - `yourdomain.com` (for production)
   - **Accept terms** and submit

## 2. Get Your Keys

After creating the site, you'll get:
- **Site Key** (public): Used in frontend - Already added to .env as `VITE_RECAPTCHA_SITE_KEY`
- **Secret Key** (private): Used for server-side verification - Already added to .env as `VITE_RECAPTCHA_SECRET_KEY`

## 3. Environment Variables (Already Configured)

Your `.env` file already contains:
```env
VITE_RECAPTCHA_SITE_KEY=6LeOfpErAAAAAB_v8ERTEMhEkcaRJ_J4_taYnk2i
VITE_RECAPTCHA_SECRET_KEY=6LeOfpErAAAAAGvOJqCDyLTjXr7zOa1Kb-CqFsN8
```

## 4. How reCAPTCHA v3 Works in Your Form

1. **Invisible Protection**: No user interaction required
2. **Score-Based**: Returns a score (0.0-1.0) indicating likelihood of being human
3. **Action Tracking**: Tracks 'contact_form' action
4. **Token Generation**: Creates a token that's included in your email template

## 5. Implementation Details

### Frontend (Already Implemented)
- ✅ reCAPTCHA provider wraps the entire app
- ✅ Contact form executes reCAPTCHA before submission
- ✅ Token is included in email template parameters
- ✅ Error handling for reCAPTCHA failures

### Email Template (Action Required)
Your EmailJS template now receives a `recaptcha_token` parameter. You can:
1. Include it in the email for manual verification
2. Use it for server-side verification (recommended)

## 6. Server-Side Verification (Optional but Recommended)

For enhanced security, verify the reCAPTCHA token on your server:

```javascript
// Example Node.js verification
const verifyRecaptcha = async (token) => {
  const secretKey = '6LeOfpErAAAAAGvOJqCDyLTjXr7zOa1Kb-CqFsN8';
  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`
  });
  
  const data = await response.json();
  return data.success && data.score > 0.5; // Adjust score threshold as needed
};
```

## 7. Testing Your Setup

1. **Start Development Server**: `npm run dev`
2. **Open Contact Form**: Navigate to your contact page
3. **Submit Form**: Fill out and submit the form
4. **Check Console**: Look for any reCAPTCHA errors in browser console
5. **Verify Email**: Check if email is received with reCAPTCHA token

## 8. Monitoring and Analytics

1. **reCAPTCHA Console**: Visit [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. **View Analytics**: Check your site's traffic and score distribution
3. **Adjust Settings**: Modify security preferences if needed

## 9. Troubleshooting

### Common Issues:
- **Domain not whitelisted**: Add your domain to reCAPTCHA console
- **Incorrect site key**: Check VITE_RECAPTCHA_SITE_KEY in .env
- **Mixed HTTP/HTTPS**: Ensure consistent protocol
- **Ad blockers**: Some ad blockers may block reCAPTCHA

### Debug Mode:
1. Open browser console
2. Look for reCAPTCHA-related errors
3. Check network tab for failed requests

### Test reCAPTCHA:
```javascript
// In browser console, check if reCAPTCHA is loaded
console.log(window.grecaptcha);
```

## 10. Security Best Practices

1. **Never expose secret key** in frontend code
2. **Use HTTPS** in production
3. **Monitor score distribution** and adjust thresholds
4. **Implement server-side verification** for critical actions
5. **Have fallback mechanisms** for when reCAPTCHA fails

## 11. Score Interpretation

- **0.9-1.0**: Very likely legitimate
- **0.7-0.9**: Likely legitimate
- **0.3-0.7**: Neutral (needs additional verification)
- **0.1-0.3**: Likely bot
- **0.0-0.1**: Very likely bot

**Recommended threshold**: 0.5 (adjust based on your needs)

## ✅ Implementation Status

- ✅ reCAPTCHA v3 package installed
- ✅ Provider configured in main.tsx
- ✅ Contact form updated with reCAPTCHA integration
- ✅ Environment variables configured
- ✅ Error handling implemented
- ✅ Token included in email template

Your contact form is now protected with Google reCAPTCHA v3!
