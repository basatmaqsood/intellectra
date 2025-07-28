import React from 'react'
import { Helmet } from 'react-helmet-async';
import ContactHero from '../components/contact/ContactHero'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | INTELLECTRA</title>
        <meta name="description" content="Get in touch with INTELLECTRA for expert estimation and design support. Request a quote, book a consultation, or ask a question—we’re here to help." />
      </Helmet>
      <ContactHero />
      <Footer />
    </>
  )
}

export default Contact