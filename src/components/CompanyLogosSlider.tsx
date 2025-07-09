import type React from "react"
// Import custom styles
import './CompanyLogosSlider.css'

interface CompanyLogosSliderProps {
    className?: string
}

const CompanyLogosSlider: React.FC<CompanyLogosSliderProps> = ({ className = "" }) => {
    // Company logos - replace with actual paths
    const logos = [
        "/images/companies/citibank.png",
        "/images/companies/dominos.png",
        "/images/companies/amazon.png",
        "/images/companies/tesla.png",
        "/images/companies/boa.png",
        "/images/companies/linkedin.png",
        "/images/companies/elf.png"
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
                                        src={logo} 
                                        alt={`Company logo ${(index % logos.length) + 1}`}
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
