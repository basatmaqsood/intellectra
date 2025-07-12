import AboutSection from '../components/home/About'
import CTASection from '../components/CTA'
import Footer from '../components/Footer'
import HeroSection from '../components/Hero'
import HowItWorks from '../components/home/HowItWorks'
import ReviewsSection from '../components/home/Reviews'
import ServicesSection from '../components/home/Services'
import TrackRecordSection from '../components/home/TrackRecord'
import WhyChooseUsSection from '../components/home/WhyChooseUs'
import { LinkButton } from '../stories/components/Button'

const headlineData = {
    lines: [
      {
        text: "ESTIMATES THAT EMPOWER,",
        highlightedWords: [{ word: "EMPOWER", color: "text-primary-300" }],
      },
      {
        text: "DESIGNS THAT INSPIRE.",
        highlightedWords: [{ word: "INSPIRE", color: "text-primary-300" }],
      },
    ],
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
    <HeroSection headline={headlineData} tagline={taglineData} backgroundImage='/images/hero-bg.png' buttonComponent = {<LinkButton path='/about' showArrow>Get Started</LinkButton>}/>
    <AboutSection/>
    <ServicesSection/>
    <TrackRecordSection/>
    <WhyChooseUsSection/>
    <HowItWorks/>
    <ReviewsSection/>
    <CTASection/>
    <Footer/>
    </>
  )
}

export default Home