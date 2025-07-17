import type React from "react"

interface ServiceCardProps {
    icon: string
    title: string
    description: string
    className?: string
    titleColorClass?: string
    backgroundClass?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description,
    className = "",
    titleColorClass = "text-primary-300", // Default orange color
    backgroundClass = "bg-gradient-to-b from-black to-[#1e1005]" // Default background gradient
}) => {
    return (
        <div className={`!border-1 !border-white rounded-[40px] py-28 px-12 sm:py-28.5 sm:px-22.5 md:py-30 md:px-28 lg:py-32 lg:px-32 xl:py-34.5 xl:px-37.5 ${backgroundClass} shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
            {/* Mobile: Icon on top of heading (flex-col) */}
            {/* Tablet/Desktop: Heading first, icon at right */}
            <div className="flex flex-col sm:flex-row-reverse sm:items-center sm:justify-between mb-6 md:mb-8">
                {/* On mobile, icon is on top */}
                <div className="flex justify-center mb-4">
                    <img src={icon} alt={title} className="" />
                </div>
                
                {/* Title */}
                <h3 className={`heading-3 ${titleColorClass} text-center sm:text-left`}>
                    {title}
                </h3>
                

            </div>
            <p className="text-white body-text leading-relaxed text-center sm:text-left">
                {description}
            </p>
        </div>
    )
}

export default ServiceCard