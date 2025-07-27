import AboutSection from '../components/home/About'
import CTASection from '../components/CTA'
import Footer from '../components/Footer'
import HeroSection from '../components/home/Hero'
import HowItWorks from '../components/home/HowItWorks'
import ReviewsSection from '../components/home/Reviews'
import ServicesSection from '../components/home/Services'
import TrackRecordSection from '../components/home/TrackRecord'
import WhyChooseUsSection from '../components/home/WhyChooseUs'
import { LinkButton } from '../stories/components/Button'

const headlineData = {
    lines: [
      {
        text: "ESTIMATES THAT WORD_PLACEHOLDER",
        highlightedWords: [
          { word: "EMPOWER,", color: "text-primary-300" },
          { word: "DELIVER,", color: "text-primary-300" },
          { word: "CLARIFY,", color: "text-primary-300" },
        ],
      },
      {
        text: " DESIGNS THAT  WORD_PLACEHOLDER",
        highlightedWords: [
          { word: "INSPIRE.", color: "text-primary-300" },
          { word: "ELEVATE.", color: "text-primary-300" },
          { word: "ALIGN.", color: "text-primary-300" },
        ],
      },
    ],
    interval: 3000,          // Time between word changes (3 seconds)
    animationDuration: 0.5   // Duration of each animation (0.5 seconds)
  }

  const taglineData = {
    lines: [
      {
        text: "From cost estimation to construction-ready drawings — we help you plan",
        highlightedWords: [], // No highlighted words in first line
      },
      {
        text: "smarter, build better, and deliver faster.",

      },
    ],
  }


function Home() {
  return (
    <>
    <HeroSection headline={headlineData} tagline={taglineData} backgroundImage='/images/hero-bg.png' buttonComponent = {<LinkButton path='/contact' showArrow>Get Started</LinkButton>}/>
    <AboutSection/>
    <ServicesSection/>
    <TrackRecordSection/>
    <WhyChooseUsSection/>
    <HowItWorks/>
    <ReviewsSection/>
    <CTASection title="READY TO GET STARTED?" description_line1="Let us help you bring certainty to your next project." description_line2="We’ll take care of the numbers and drawings — you focus on building." buttonText="Request a Quote" buttonPath="/contact" />
    <Footer/>
    </>
  )
}

export default Home