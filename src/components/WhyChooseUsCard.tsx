import type React from "react"

interface WhyChooseUsCardProps {
    icon: string
    title: string
    className?: string
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({ 
    icon, 
    title, 
    className = "" 
}) => {
    return (
        <div className={`flex flex-col items-center text-center ${className}`}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-24 lg:h-24 mb-4 sm:mb-6 md:mb-8 flex items-center justify-center">
                <img 
                    src={icon} 
                    alt={title} 
                    className="h-full object-contain"
                />
            </div>
            <h3 className="text-primary-300 heading-6 ">
                {title}
            </h3>
        </div>
    )
}

export default WhyChooseUsCard
