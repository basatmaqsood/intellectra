import type React from "react"
import { Icons } from "../../assets/icons/icons";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
    className?: string
}

const servicesData = [
    {
        icon: Icons.MEP,
        title: "M&P Estimation",
        description: "End-to-end cost forecasting for mechanical, electrical, and plumbing systems, backed by codes and construction realities."
    },
    {
        icon: Icons.IT,
        title: "IT Estimation", 
        description: "Detailed planning for smart infrastructure, networking systems, and tech-based building integrations."
    },
    {
        icon: Icons.Electrical,
        title: "Electrical Estimation",
        description: "Accurate pricing for wiring, panels, load calculations, lighting, and power distribution systems."
    },
    {
        icon: Icons.Drawing,
        title: "Shop Drawings",
        description: "Professional, construction-ready drawings for MEP and architectural scopes — coordinated, compliant, and field-friendly."
    },
    {
        icon: Icons.Engineering,
        title: "Engineering Documents",
        description: "BOQs, specifications, and technical documentation that meet local regulations and project standards."
    }
]

const ServicesSection: React.FC<ServicesSectionProps> = ({ className = "" }) => {
    return (
        <section className={`relative overflow-hidden w-full  pb-18 sm:py-14 md:py-20 lg:py-28 xl:py-36 h-auto flex justify-center items-center ${className}`}>

      {/* Background Effects */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #F98328 0%, #Fa8f28 10%, #000000 100%)'
             }}>
        </div>
        
        {/* Teal gradient ball - top right */}
        <div className="absolute top-0 right-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full translate-x-5/8 md:translate-x-3/8 translate-y-4 md:translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #7EC8C4 0%, #7EC8e4 10%, #000000 100%)'
             }}>
        </div>
      </div>

            <div className="w-full max-w-[90%] md:max-w-[80%] mx-auto px-4 md:px-8">
                {/* Section Title */}
                <h2 className="heading-2 text-[1.8rem] md:text-[4.5rem] text-center text-primary-300 mb-20 md:mb-48 uppercase">
                    What We Do Best
                </h2>

                {/* Services Grid */}
                <div className="">
                    {/* Single responsive grid for all breakpoints */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 place-items-center">
                        {servicesData.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                className={`w-full h-full max-w-[50%] sm:max-w-sm ${
                                    index === 4 ? 'sm:col-start-1 sm:col-end-3 sm:justify-self-center sm:max-w-xs lg:col-start-auto lg:col-end-auto lg:max-w-sm' : ''
                                }`}
                                isMobile={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
