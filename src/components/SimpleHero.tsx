import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Icons } from "../assets/icons/icons"
import Headline from "./Headline"
import Menubar from "./Menubar"

interface TaglineLine {
  text: string
  highlightedWords?: Array<{ word: string; color: string }>
}

interface HeadlineLine {
  text: string
  highlightedWords?: Array<{ word: string; color: string }>
}

interface HeroSectionProps {
  // Background can be either an image URL or a solid color
  backgroundImage?: string
  backgroundColor?: string
  backgroundAlt?: string // NEW

  // Content props - now supporting multi-line with highlighted words
  headline: {
    lines: HeadlineLine[]
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
  backgroundAlt, // NEW
  headline,
  tagline,
  buttonComponent,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const savedScrollPosition = useRef(0)
  const savedPathname = useRef('')
  
  // Handle scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Consider header scrolled when user scrolls more than 100px
      setIsScrolled(scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Prevent body scroll and layout shift when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Get current scroll position and pathname
      savedScrollPosition.current = window.scrollY
      savedPathname.current = window.location.pathname
      // Prevent body scroll and maintain scroll position
      document.body.style.position = 'fixed'
      document.body.style.top = `-${savedScrollPosition.current}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
      
      // Only restore scroll position if pathname hasn't changed
      if (window.location.pathname === savedPathname.current) {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          window.scrollTo(0, savedScrollPosition.current)
        })
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
  }, [isMenuOpen])  // Create background style based on props
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
      <div className="text-white body-text  leading-relaxed max-w-4xl">
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
    <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={backgroundStyle}>
      {backgroundAlt && (
        <span className="sr-only">{backgroundAlt}</span>
      )}
      {/* Header with logo and hamburger menu - Dynamic positioning with glassmorphism */}
      <header className={`
        ${isScrolled || isMenuOpen ? 'fixed' : 'absolute'} 
        top-0 left-0 right-0 z-50 
        flex justify-between items-center 
        pt-3 sm:pt-5 lg:pt-7.5 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-18
        ${isScrolled && !isMenuOpen ? 'pb-3 sm:pb-4 lg:pb-5' : ''}
        transition-all duration-300 ease-in-out
        ${isScrolled && !isMenuOpen
          ? 'backdrop-blur-md bg-black/20 border-b border-white/10 shadow-lg'
          : isMenuOpen
            ? 'bg-black'
            : ''
        }
      `}>
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
          <div className="relative w-6 h-6 md:w-8 md:h-8">
            <img
              src={Icons.Hamburger || "/placeholder.svg"}
              alt="Menu"
              className={`absolute inset-0 w-full h-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`}
              onError={(e) => {
                // Fallback to CSS hamburger if image fails to load
                const target = e.target as HTMLImageElement
                target.style.display = "none"
                target.nextElementSibling?.classList.remove("hidden")
              }}
            />
            <img
              src={Icons.Close || "/placeholder.svg"}
              alt="Close"
              className={`absolute inset-0 w-full h-full transition-all duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'
              }`}
            />
          </div>
        </button>
      </header>

      {/* Main content - centered on entire screen */}
      <main className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-8 lg:px-12">
        {/* Headline using the standalone component */}
        <Headline
          lines={headline.lines}
          className="heading-2 mb-3 md:mb-2 max-w-7xl"
        />

        {/* Tagline with multi-line support */}
        {renderTagline()}

        {/* Optional Button */}
        {buttonComponent && <div className="mt-15 sm:mt-20 md:mt-15 ">{buttonComponent}</div>}
      </main>

      {/* Menubar Component */}
      <Menubar isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  )
}

export default HeroSection