import HeroSection from '../components/SimpleHero'
import Footer from '../components/Footer'
import CTASection from '../components/CTA'
import WhoWeAreSection from '../components/about/WhoWeAreSection'
import TeamDescriptionSection from '../components/about/TeamDescriptionSection'
import ValuesSection from '../components/about/ValuesSection'
import { Helmet } from 'react-helmet-async';

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
    <Helmet>
      <title>About Us | INTELLECTRA</title>
      <meta name="description" content="Discover how INTELLECTRA grew from a small team into a trusted partner in estimation and design—delivering clarity, accuracy, and smarter project outcomes." />
    </Helmet>
    <HeroSection 
      headline={headlineData} 
      tagline={taglineData} 
      backgroundImage='/images/about-bg.png' 
      backgroundAlt="Team of diverse professionals celebrating a successful project with high-fives in a modern office environment, symbolizing Intellectra’s collaborative foundation and engineering innovation."
    />
    <WhoWeAreSection />
    <TeamDescriptionSection />
    <ValuesSection />
    <CTASection title="LET'S BUILD WITH CERTAiNTY" description_line1="We believe great projects start with smart foundations." description_line2="Let INTELLECTRA be the silent force behind your success — with accurate numbers, detailed drawings, and documents you can count on." buttonText="Request a Quote" buttonPath="/contact" />
    <Footer/>
    </>
  )
}

export default About