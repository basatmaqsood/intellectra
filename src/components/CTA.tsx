import type React from "react"
import { LinkButton } from "../stories/components/Button"

interface CTASectionProps {
    className?: string
}

const CTASection: React.FC<CTASectionProps> = ({ className = "" }) => {
    return (
        <section className={`w-full bg-[#1e1005]  py-16 sm:py-20 md:py-24 lg:py-32 ${className}`}>
            <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto px-10 sm:px-14 md:px-20 lg:px-28 xl:px-32">
                <div className="text-center">
                    {/* Main Heading */}
                    <h2 className="heading-2 text-primary-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 uppercase font-bold">
                        READY TO GET STARTED?
                    </h2>
                    
                    {/* Description */}
                    <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
                        <p className="body-text-sm text-white mb-2">
                            Let us help you bring certainty to your next project.
                        </p>
                        <p className="body-text-sm text-white">
                            We'll take care of the numbers and drawings — you focus on building.
                        </p>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-center w-full max-w-md lg:max-w-none mx-auto">
                        <LinkButton  variant="tertiary" showArrow className="w-full lg:w-auto">
                            Request a Quote
                        </LinkButton>
                        <LinkButton  variant="tertiary" showArrow className="w-full lg:w-auto">
                            Schedule Consultation
                        </LinkButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection
