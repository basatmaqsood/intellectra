import React, { useState, useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';
import { Icons } from '../../assets/icons/icons';
import Menubar from '../Menubar';

const ContactHero: React.FC = () => {
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
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
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
        <button className="text-white" aria-label="Menu" onClick={toggleMenu}>
          <div className="relative w-6 h-6 md:w-10 md:h-10">
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

      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #F98328 0%, #Fa8f28 10%, #000000 100%)'
             }}>
        </div>
        
        {/* Teal gradient ball - top right */}
        <div className="absolute top-0 right-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full translate-x-3/8 translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #7EC8C4 0%, #7EC8e4 10%, #000000 100%)'
             }}>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center py-15">
        <div className="container mx-auto py-18 sm:py-0 px-12 xs:px-22 sm:px-28 lg:px-36 xl:px-56">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="heading-2 text-primary-300 mb-4 uppercase tracking-wider">
              CONTACT US
            </h1>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-16 mx-auto ">
            {/* Contact Form - Left Side */}
              <ContactForm />

            {/* Contact Info Card - Right Side */}
              <ContactInfoCard />
          </div>
        </div>
      </div>

      {/* Menubar Component */}
      <Menubar isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
};

export default ContactHero;