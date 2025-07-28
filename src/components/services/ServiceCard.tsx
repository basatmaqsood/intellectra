import type React from "react"
import { LinkButton } from "../../stories/components/Button"

interface ServiceCardProps {
    icon: string
    title: string
    description: string
    className?: string
    titleColorClass?: string
    backgroundClass?: string
    featuredText?: string
    buttonText?: string
    buttonPath?: string
    onButtonClick?: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description,
    className = "",
    titleColorClass = "text-primary-300", // Default orange color
    backgroundClass = "bg-gradient-to-b from-black to-[#1e1005]", // Default background gradient
    featuredText,
    buttonText,
    buttonPath,
    onButtonClick
}) => {
    return (
        <div className={`!border-1 !border-white rounded-[26px] py-15 px-5 sm:py-28.5 sm:px-22.5 md:py-30 md:px-28 lg:py-32 lg:px-32 xl:py-34.5 xl:px-37.5 ${backgroundClass} shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
            {/* Mobile: Icon on top of heading (flex-col) */}
            {/* Tablet/Desktop: Heading first, icon at right */}
            <div className="flex flex-col md:flex-row-reverse md:items-center sm:justify-between mb-6 md:mb-8">
                {/* On mobile, icon is on top */}
                <div className="flex justify-center mb-4">
                    <img src={icon} alt={title} className="w-12.5 h-12.5 sm:w-18 sm:h-18 md:w-25 md:h-25 lg:w-25 lg:h-25 xl:w-30 xl:h-30 object-contain" />
                </div>
                
                {/* Title */}
                <h3 className={`heading-3 ${titleColorClass} text-center md:text-left`}>
                    {title}
                </h3>
                

            </div>
            <p className="text-white body-text leading-relaxed text-center md:text-left">
                {description}
            </p>
            
            {/* Featured Text - Optional */}
            {featuredText && (
                <div className="mt-4 md:mt-6">
                    <p className="text-white body-text leading-relaxed text-center md:text-left">
                        {featuredText}
                    </p>
                </div>
            )}
            
            {/* Button - Optional */}
            {buttonText && (buttonPath || onButtonClick) && (
                <div className="mt-6 sm:mt-12  flex justify-center">
                    <LinkButton 
                        variant="tertiary" 
                        showArrow 
                        path={buttonPath || "#"}
                        onClick={onButtonClick}                    >
                        {buttonText}
                    </LinkButton>
                </div>
            )}
        </div>
    )
}

export default ServiceCard