import HeroSection from '../components/SimpleHero'
import Footer from '../components/Footer'
import CTASection from '../components/CTA'
import WhoWeAre from '../components/about/WhoWeAre'
import CoreValue from '../components/about/CoreValue'
import CompanyValues from '../components/about/CompanyValues'

function About() {

  const headlineData = {
    lines: [
      {
        text: "WHERE IT ALL BEGAN",
        highlightedWords: [{ word: "BEGAN", color: "text-primary-300" }],
      }
    ],
  }

  const taglineData = {
    lines: [
      {
        text: "What started as a response to a problem — today, it's the foundation behind smarter projects across the construction and engineering world.",
        highlightedWords: [], // No highlighted words in first line
      }
    ],
  }

  return (
    <>
    <HeroSection headline={headlineData} tagline={taglineData} backgroundImage='/images/hero-bg.png'/>
    <WhoWeAre />
    <CoreValue />
    <CompanyValues />
    <CTASection title="LET'S BUILD WITH CERTAINITY" description_line1="We Believe greate projects start with smart foundation" description_line2="Let INTELLECTRA be the silent force behind your success — with accurate numbers, detailed drawings, and documents you can count on." buttonText="Get Started" buttonPath="/contact" />
    <Footer/>
    </>
  )
}

export default About