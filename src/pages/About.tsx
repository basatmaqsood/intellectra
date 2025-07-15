import React from 'react'
import HeroSection from '../components/SimpleHero'
import { LinkButton } from '../stories/components/Button'

function About() {

const headlineData = {
    lines: [
      {
        text: "WHERE IT ALL",
        highlightedWords: [
          { word: "BEGAN,", color: "text-primary-300" }
        ],
      }
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

  return (
    <HeroSection headline={headlineData} tagline={taglineData} backgroundImage='/images/hero-bg.png'/>
  )
}

export default About