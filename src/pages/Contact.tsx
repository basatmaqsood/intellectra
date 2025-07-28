import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ContactHero from '../components/contact/ContactHero'
import Footer from '../components/Footer'

function Contact() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}>
      <ContactHero />
      <Footer />
    </GoogleReCaptchaProvider>
  )
}

export default Contact