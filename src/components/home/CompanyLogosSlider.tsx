import type React from "react"
// Import custom styles
import './CompanyLogosSlider.css'

interface CompanyLogosSliderProps {
    className?: string
}

const CompanyLogosSlider: React.FC<CompanyLogosSliderProps> = ({ className = "" }) => {
    // Company logos - replace with actual paths
    const logos = [
        { src: "/images/companies/citibank.png", alt: "Citibank logo" },
        { src: "/images/companies/dominos.png", alt: "Dominos logo" },
        { src: "/images/companies/amazon.png", alt: "Amazon logo" },
        { src: "/images/companies/tesla.png", alt: "Tesla logo" },
        { src: "/images/companies/boa.png", alt: "Bank of America logo" },
        { src: "/images/companies/linkedin.png", alt: "Linkedin logo" },
        { src: "/images/companies/elf.png", alt: "e.l.f logo" }
    ]

    // Create two sets for seamless infinite loop
    const duplicatedLogos = [...logos, ...logos]

    return (
        <div className={`py-8 sm:py-12 md:py-16 ${className}`}>
            <div className=" mx-auto">
                <div className="company-logos-slider">
                    <div className="slider-track">
                        {duplicatedLogos.map((logo, index) => (
                            <div key={index} className="slide">
                                <div className="slide-card">
                                    <img 
                                        src={logo.src} 
                                        alt={logo.alt}
                                        className="slide-image"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyLogosSlider
