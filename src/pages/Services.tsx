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
    <HeroSection headline={headlineData} tagline={taglineData} backgroundImage='/images/services-bg.png'/>
    <ServiceCardsContainer />
    <CTASection title="WANT TO LEARN MORE" description_line1="We're proud to have supported over 120+ projects and 150+ winning bids with a 99.7% on-time delivery rate. Our estimators, drafters, and engineers are in-house—real professionals who understand what's at stake." buttonText="Request a Quote" buttonPath="/contact" />
    <Footer />
    </>
    )
}

export default Services