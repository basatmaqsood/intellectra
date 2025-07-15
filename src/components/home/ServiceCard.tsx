import type React from "react"

interface ServiceCardProps {
    icon: string
    title: string
    description: string
    className?: string
    isMobile?: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
    icon, 
    title, 
    description, 
    className = "", 
    isMobile = false
}) => {
    const paddingClass = isMobile ? "py-4 px-4" : "py-4 md:py-6 lg:py-12  px-4 md:px-6 lg:px-6"
    const iconMarginClass = isMobile ? "mb-4" : "mb-6"
    const titleMarginClass = isMobile ? "mb-2" : "mb-4"
    const titleSizeClass = isMobile ? "body-text-sm" : ""
    const descriptionSizeClass = isMobile ? "" : ""

    return (
        <div className={`flex flex-col !border-2 !border-white ${paddingClass} bg-black rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 text-center ${className}`}>
            <div className={`flex justify-center lg:min-h-[60px]`}>
                <img src={icon} alt={title} className="w-auto h-auto min-h-[60px]" />
            </div>
            <h3 className={`heading-6 mt-2 mb-2 lg:mb-0 text-primary-300 lg:max-w-[75%] mx-auto text-center lg:min-h-[6rem] ${titleSizeClass}`}>
                {title}
            </h3>
            <p className={`text-white body-text-sm leading-relaxed text-center ${descriptionSizeClass}`}>
                {description}
            </p>
        </div>
    )
}

export default ServiceCard
