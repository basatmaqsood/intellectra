import type React from "react"

interface ContentSectionProps {
    heading?: string
    children: React.ReactNode
    headingColor?: string
    textSize?: string
    textColor?: string
    className?: string
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
    heading, 
    children, 
    headingColor = "text-primary-300",
    textColor = "text-white",
    textSize = "body-text",
    className = "mb-7.5  sm:mb-15 md:mb-20 lg:mb-25 xl:mb-30"
}) => {
    return (
        <div className={className}>
            {heading && (
                <h3 className={`heading-3 ${headingColor}  mb-4 sm:mb-6`}>
                    {heading}
                </h3>
            )}
            <div className={`${textSize} ${textColor} leading-relaxed`}>
                {children}
            </div>
        </div>
    )
}

export default ContentSection 