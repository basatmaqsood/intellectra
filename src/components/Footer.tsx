import type React from "react"
import { Icons } from "../assets/icons/icons"

interface FooterProps {
    className?: string
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
    return (
        <footer className={`w-full bg-[#f98328] py-13 sm:py-13 lg:py-10 ${className}`}>
            <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto px-10 sm:px-10 md:px-20 lg:px-28 xl:px-32">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 xl:gap-16 mb-12 sm:mb-16 md:mb-20">
                    
                    {/* Company Info */}
                    <div className="col-span-1">
                        <img 
                            src="/images/logo.png" 
                            alt="INTELLECTRA" 
                            className="h-8 sm:h-10 md:h-12 mb-4 sm:mb-6 object-contain"
                        />
                        <div className="space-y-2">
                            <p className="body-text-sm text-white">
                                Estimates that Empower,
                            </p>
                            <p className="body-text-sm text-white">
                                Designs that Inspire
                            </p>
                        </div>
                    </div>
                    
                    {/* Navigation */}
                    <div className="col-span-1">
                        <h4 className="heading-5 text-white mb-4 sm:mb-6 font-bold">
                            Navigation
                        </h4>
                        <nav className="space-y-3 sm:space-y-4">
                            <div>
                                <a href="/" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    Home
                                </a>
                            </div>
                            <div>
                                <a href="/about" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    About Us
                                </a>
                            </div>
                            <div>
                                <a href="/services" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    Services
                                </a>
                            </div>
                        </nav>
                    </div>
                    
                    {/* Connect with us */}
                    <div className="col-span-1">
                        <h4 className="heading-5 text-white mb-4 sm:mb-6 font-bold">
                            Connect with us
                        </h4>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center gap-3">
                                <img src={Icons.linkedin} alt="LinkedIn" className="w-5 h-5" />
                                <a href="#" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    LinkedIn
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src={Icons.facebook} alt="Facebook" className="w-5 h-5" />
                                <a href="#" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    Facebook
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src={Icons.instagram} alt="Instagram" className="w-5 h-5" />
                                <a href="#" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
                    <p className="body-text-sm text-white">
                        Copyright © 2025 LantroTech. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
