import type React from "react"
import { LinkButton } from "../stories/components/Button"

interface CTASectionProps {
    title: string,
    description_line1: string,
    description_line2?: string,
    buttonText: string,
    buttonPath: string,
    className?: string
}

const CTASection: React.FC<CTASectionProps> = ({ title, description_line1, description_line2, buttonText, buttonPath, className = "" }) => {
    return (
        <section className={`w-full bg-[#1e1005] py-14 xs:py-22 sm:py-26  lg:py-24 xl:py-28 ${className}`}>
            <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[82%] mx-auto px-10 sm:px-14 md:px-20 lg:px-28 xl:px-32">
                <div className="text-center">
                    {/* Main Heading */}
                    <h2 className="heading-2 text-primary-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 uppercase font-bold">
                            {title}
                    </h2>
                    
                    {/* Description */}
                    <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                        <p className="body-text text-white mb-2">
                            {description_line1}
                        </p>
                        {
                            description_line2 && (
                                <p className="body-text text-white">
                                    {description_line2} 
                                </p>
                            )
                        }
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-center w-full max-w-md lg:max-w-none mx-auto">
                        <LinkButton  path={buttonPath} variant="tertiary" showArrow className="w-auto">
                            {buttonText}
                        </LinkButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection
