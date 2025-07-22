import type React from "react"
import { useState, useEffect } from "react"
import { Icons } from "../../assets/icons/icons"
import Headline from "./AnimatedHeadline"
import Menubar from "../Menubar"

interface TaglineLine {
  text: string
  highlightedWords?: Array<{ word: string; color: string }>
}

interface HeroSectionProps {
  // Background can be either an image URL or a solid color
  backgroundImage?: string
  backgroundColor?: string

  // Content props - now supporting multi-line with highlighted words
  headline: {
    lines: Array<{
      text: string
      highlightedWords: Array<{ word: string; color: string }>
    }>
    interval?: number
    animationDuration?: number
  }
  tagline: {
    lines: TaglineLine[]
  }

  // Optional button component from Storybook
  buttonComponent?: React.ReactNode
}




const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  backgroundColor,
  headline,
  tagline,
  buttonComponent,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Prevent body scroll and layout shift when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Get current scroll position
      const scrollY = window.scrollY
      // Prevent body scroll and maintain scroll position
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    }

    // Cleanup function
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])
  
  // Create background style based on props
  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : { backgroundColor: backgroundColor || "#000" }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const renderTagline = () => {
    const highlightWords = (text: string, highlightedWords?: Array<{ word: string; color: string }>) => {
      if (!highlightedWords || highlightedWords.length === 0) {
        return text
      }

      let processedText = text
      const replacements: Array<{ original: string; replacement: string }> = []

      highlightedWords.forEach((item, index) => {
        const placeholder = `__HIGHLIGHT_${index}__`
        const replacement = `<span class="${item.color}">${item.word}</span>`

        processedText = processedText.replace(new RegExp(item.word, "gi"), placeholder)
        replacements.push({ original: placeholder, replacement })
      })

      replacements.forEach(({ original, replacement }) => {
        processedText = processedText.replace(new RegExp(original, "g"), replacement)
      })

      return processedText
    }

    return (
      <div className="text-white  body-text lg:body-text  leading-relaxed max-w-4xl opacity-90">
        {tagline.lines.map((line, index) => (
          <p key={index}>
            <span
              dangerouslySetInnerHTML={{
                __html: highlightWords(line.text, line.highlightedWords),
              }}
            />
          </p>
        ))}
      </div>
    )
  }

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col" style={backgroundStyle}>
      {/* Header with logo and hamburger menu */}
      <header className={`${isMenuOpen ? 'fixed top-0 left-0 right-0 bg-black' : 'relative'} z-50 flex justify-between items-center pt-12 lg:pt-15  px-5 sm:px-8 md:px-10 lg:px-12 xl:px-18`}>
        {/* Logo */}
        <a href="/" className="text-white text-lg md:text-xl font-bold tracking-wider">
          <img
            src={"/images/logo.png"}
            alt="Logo"
            className="h-8 md:h-10"
            onError={(e) => {
              // Fallback to text if image fails to load
              const target = e.target as HTMLImageElement
              target.style.display = "none"
              target.nextElementSibling?.classList.remove("hidden")
            }}
          />
          <span className="hidden">INTELLECTRA</span>
        </a>

        {/* Hamburger Menu */}
        <button className="text-white p-2" aria-label="Menu" onClick={toggleMenu}>
          <img
            src={Icons.Hamburger || "/placeholder.svg"}
            alt="Menu"
            className="w-6 h-6 md:w-8 md:h-8"
            onError={(e) => {
              // Fallback to CSS hamburger if image fails to load
              const target = e.target as HTMLImageElement
              target.style.display = "none"
              target.nextElementSibling?.classList.remove("hidden")
            }}
          />  
        </button>
      </header>

      {/* Spacer to prevent layout shift when header becomes fixed */}
      {isMenuOpen && (
        <div className="pt-[3.5rem] md:pt-[4rem] xl:pt-[6.5rem] h-[calc(2rem+3.5rem)] md:h-[calc(2.5rem+4rem)] xl:h-[calc(2.5rem+6.5rem)]"></div>
      )}

      {/* Main content - centered */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 md:px-8 lg:px-12 py-[4.5rem]">
        {/* Headline using the standalone component */}
        <Headline
          lines={headline.lines}
          interval={headline.interval}
          animationDuration={headline.animationDuration}
          className="heading-2 mb-3 md:mb-2 max-w-7xl" 
        />

        {/* Tagline with multi-line support */}
        {renderTagline()}

        {/* Optional Button */}
        {buttonComponent && <div className="mt-16 ">{buttonComponent}</div>}
      </main>

      {/* Menubar Component */}
      <Menubar isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  )
}

export default HeroSection
