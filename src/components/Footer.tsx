import type React from "react"
import { Icons } from "../assets/icons/icons"

interface FooterProps {
    className?: string
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
    return (
        <footer className={`w-full bg-[#C47B42] py-8 lg:py-10 ${className}`}>
            <div className="w-full sm:max-w-[85%]  lg:max-w-[75%] mx-auto px-15">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8  md:gap-10 xl:gap-16 mb-12 sm:mb-16 md:mb-20">

                    {/* Company Info */}
                    <div className="col-span-1 flex flex-col gap-3 sm:gap-4 lg:gap-6">
                        <a href="/">
                            <img
                                src="/images/logo.png"
                                alt="INTELLECTRA"
                                className="h-8 sm:h-10 md:h-12  object-contain"
                            />
                        </a>
                        <div className="">
                            <p className="body-text-sm text-white">
                                Estimates that Empower,
                            </p>
                            <p className="body-text-sm text-white">
                                Designs that Inspire
                            </p>
                        </div>
                                            {/* Connect with us */}
                    <div className="col-span-1">

                        <div className="flex items-center gap-3 sm:gap-5">
                            <div className="flex items-center gap-3">
                                <a href="https://www.linkedin.com/" target="_blank" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                <img src={Icons.linkedin} alt="LinkedIn" className="h-6 w-6 lg:h-10 lg:w-10" />
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <a href="https://www.facebook.com/" target="_blank" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    <img src={Icons.facebook} alt="Facebook" className="h-6 w-6 lg:h-10 lg:w-10" />
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <a href="https://www.instagram.com/" target="_blank" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    <img src={Icons.instagram} alt="Instagram" className="h-6 w-6 lg:h-10 lg:w-10" />
                                </a>
                            </div>
                        </div>
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
                            <div>
                                <a href="/case-study/sol-on-park" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    Case Studies
                                </a>
                            </div>
                        </nav>
                    </div>


                    {/* Solutions */}
                    <div className="col-span-1">
                        <h4 className="heading-5 text-white mb-4 sm:mb-6 font-bold">
                            Solutions
                        </h4>
                        <nav className="space-y-3 sm:space-y-4">
                            <div>
                                <a href="#" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    MEP Estimation
                                </a>
                            </div>
                            <div>
                                <a href="#" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    Electric & IT Estimation
                                </a>
                            </div>
                            <div>
                                <a href="#" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    Shop Drawings
                                </a>
                            </div>
                            <div>
                                <a href="#" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    Engineering Documents
                                </a>
                            </div>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1">
                        <h4 className="heading-5 text-white mb-4 sm:mb-6 font-bold">
                            Contact
                        </h4>
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-center gap-3">
                                <a href="/contact" target="_blank" className="body-text-sm text-white hover:text-white/80 transition-colors">
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className=" pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between">
                    <p className="body-text-sm text-white">
                        Copyright © 2025 Intellectra. All Rights Reserved
                    </p>
                    <p className="body-text-sm text-white">
                        Terms of Service | Privacy Policy                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
