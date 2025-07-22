import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LinkButton } from '../stories/components/Button'
import { Icons } from '../assets/icons/icons'

interface MenubarProps {
  isOpen: boolean
  onClose: () => void
}

const Menubar: React.FC<MenubarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ]

  const isCurrentPage = (path: string) => {
    return location.pathname === path
  }

  const handleMenuItemClick = (path: string) => {
    navigate(path)
    onClose()
  }

  return (
    <div className={`overflow-y-auto scrollbar-hide fixed inset-0 bg-black z-40 flex flex-col px-6 md:px-8 lg:pr-12 pb-13 sm:pb-17 md:pb-19 lg:pb-21 xl:pb-25 transition-transform duration-500 ease-in-out ${
      isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      
      {/* Main Menu Container */}
              <div className=" flex-1 flex flex-col justify-start pt-66 sm:pt-37  lg:pt-50 xl:pt-65 pl-14 sm:pl-22 md:pl-28 lg:pl-36 xl:pl-48">
        
        {/* Navigation Items */}
        <nav className="text-left md:flex md:flex-col md:justify-start ">
          {menuItems.map((item) => (
            <div key={item.name} className="mb-7 sm:mb-10 md:mb-4 lg:mb-7 ">
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault()
                  handleMenuItemClick(item.path)
                }}
                className={`heading-2 block w-full text-left ${
                  isCurrentPage(item.path) ? 'text-primary-300' : 'text-white'
                } hover:text-primary-300 transition-colors`}
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        {/* Mobile/Tablet CTA Section */}
        <div className="mt-12 sm:mt-16 mb-16 sm:mb-20 text-left md:hidden">
          <h3 className="text-white heading-4 mb-5 uppercase">
            LET'S GET MOVING
          </h3>
          <LinkButton variant="primary" showArrow path="/contact" onClick={() => handleMenuItemClick('/contact')}>
            Get Started
          </LinkButton>
        </div>

        {/* Mobile/Tablet Social Media Icons */}
        <div className="flex justify-start space-x-6 md:hidden mt-auto">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-400 transition-colors">
            <img src={Icons.instagramColor} alt="Instagram" className="w-7 h-7 sm:w-10 sm:h-10" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-400 transition-colors">
            <img src={Icons.facebookColor} alt="Facebook" className="w-7 h-7 sm:w-10 sm:h-10" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-400 transition-colors">
            <img src={Icons.linkedinColor} alt="LinkedIn" className="w-7 h-7 sm:w-10 sm:h-10" />
          </a>
        </div>
      </div>

      {/* Desktop Bottom Row */}
      <div className="hidden md:flex justify-between items-center  pl-14 sm:pl-22 md:pl-28 lg:pl-36 xl:pl-48">
        {/* Social Media Icons - Left */}
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-400 transition-colors">
            <img src={Icons.instagramColor} alt="Instagram" className="w-17 h-17" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-400 transition-colors">
            <img src={Icons.facebookColor} alt="Facebook" className="w-17 h-17" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-primary-300 hover:text-primary-400 transition-colors">
            <img src={Icons.linkedinColor} alt="LinkedIn" className="w-17 h-17" />
          </a>
        </div>

        {/* CTA Section - Right */}
        <div className="flex items-center space-x-4">
          <h3 className="text-white heading-4 uppercase">
            LET'S GET MOVING
          </h3>
          <div className="border-l border-white h-8 mx-4"></div>
          <LinkButton variant="primary" showArrow path="/contact" onClick={() => handleMenuItemClick('/contact')}>
            Get Started
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

export default Menubar 