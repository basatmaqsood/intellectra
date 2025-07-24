import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LinkButton } from '../stories/components/Button'

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
    <div className={` overflow-y-auto scrollbar-hide fixed inset-0 bg-black z-40 flex flex-col  lg:pr-12 transition-transform duration-500 ease-in-out ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}>

      {/* Main Menu Container */}
      <div className="my-auto flex-1 flex flex-col justify-start pl-5 sm:pl-8 lg:pl-18">

        {/* Navigation Items */}
        <nav className="my-auto md:pt3-0 text-left md:flex md:flex-col md:justify-start ">
          {menuItems.map((item) => (
            <div key={item.name} className="mb-7 sm:mb-10 md:mb-4 lg:mb-7 ">
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault()
                  handleMenuItemClick(item.path)
                }}
                className={`heading-3 lg:heading-3 block w-full text-left ${isCurrentPage(item.path) ? 'text-primary-300' : 'text-white'
                  } hover:text-primary-300 transition-colors`}
              >
                {item.name}
              </a>
            </div>
          ))}
                  {/* Mobile/Tablet CTA Section */}
        <div className="mt-5 text-left md:hidden">
          <h3 className="text-white heading-4 mb-5 uppercase">
            LET'S GET MOVING
          </h3>
          <LinkButton variant="primary" showArrow path="/contact" onClick={() => handleMenuItemClick('/contact')}>
            Get Started
          </LinkButton>
        </div>

              {/* Desktop Bottom Row */}
      <div className="hidden md:flex justify-start items-center mt-0 lg:mt-15 xl:mt-20">
        {/* CTA Section - Left */}
        <div className="flex items-center space-x-4">
          <h3 className="text-white heading-4 uppercase">
            LET'S GET MOVING
          </h3>
          <div className="border-3 border-white h-16 mx-6"></div>
          <LinkButton variant="primary" showArrow path="/contact" onClick={() => handleMenuItemClick('/contact')}>
            Get Started
          </LinkButton>
        </div>
      </div>
        </nav>


      </div>


    </div>
  )
}

export default Menubar 