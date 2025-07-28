import { Helmet } from 'react-helmet-async';
import CTASection from "../components/CTA"
import Footer from "../components/Footer"
import HeroSection from "../components/SimpleHero"
import ServiceCardsContainer from "../components/services/ServiceCardsContainer"

function Services() {

  const headlineData = {
    lines: [
      {
        text: "ESTIMATION AND DESIGN",
        highlightedWords: [{ word: "SERVICES", color: "text-primary-300" }],
      },
      {
        text: "SERVICES",
        highlightedWords: [{ word: "SERVICES", color: "text-primary-300" }],
      },
    ],
  }

  const taglineData = {
    lines: [
      {
        text: "Technical Precision. Practical Solutions",
        highlightedWords: [], // No highlighted words in first line
      }
    ],
  }


  return (
    <>
    <Helmet>
      <title>Services | INTELLECTRA</title>
      <meta name="description" content="Explore INTELLECTRA’s expert Estimation & Design services — from MEP and IT estimation to shop drawings and engineering documents built for real-world execution." />
    </Helmet>
    <HeroSection 
      headline={headlineData} 
      tagline={taglineData} 
      backgroundImage='/images/services-bg.png'
      backgroundAlt="Close-up of professionals collaborating over architectural blueprints, showcasing INTELLECTRA's expertise in estimation and design services with a focus on precision and practicality."
    />
    <ServiceCardsContainer />
    <CTASection title="WANT TO LEARN MORE" description_line1="We're proud to have supported over 120+ projects and 150+ winning bids with a 99.7% on-time delivery rate. Our estimators, drafters, and engineers are in-house—real professionals who understand what's at stake." buttonText="Request a Quote" buttonPath="/contact" />
    <Footer />
    </>
  )
}

export default Services