import type React from "react"
import { Icons } from "../assets/icons/icons";
import ServiceCard from "./ServiceCard";

interface ServicesSectionProps {
    className?: string
}

const servicesData = [
    {
        icon: Icons.MEP,
        title: "MEP Estimation",
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
        <section className={`w-full bg-black pb-0 md:bg-[url('/images/about-bg.png')] md:bg-no-repeat md:bg-cover h-auto md:h-[994px] flex justify-center items-center py-32 md:py-0 ${className}`}>
            <div className="w-full max-w-[90%] md:max-w-[80%] mx-auto px-4 md:px-8">
                {/* Section Title */}
                <h2 className="heading-2 text-[1.8rem] md:text-[4.5rem] text-center text-primary-300 mb-20 md:mb-48 uppercase">
                    What We Do Best
                </h2>

                {/* Services Grid */}
                <div className="mb-10">
                    {/* Mobile: 2x2 grid for first 4 cards */}
                    <div className="grid grid-cols-2 md:hidden mb-0 gap-8">
                        {servicesData.slice(0, 4).map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                isMobile={true}
                            />
                        ))}
                    </div>

                    {/* Mobile: Centered 5th card */}
                    <div className="md:hidden mt-8">
                        <ServiceCard
                            icon={servicesData[4].icon}
                            title={servicesData[4].title}
                            description={servicesData[4].description}
                            className="mx-auto max-w-[50%]"
                            isMobile={true}
                        />
                    </div>

                    {/* Desktop: All 5 cards in single row */}
                    <div className="hidden md:grid md:grid-cols-5 gap-0">
                        {servicesData.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
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
