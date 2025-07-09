import type React from "react"
import { Icons } from "../assets/icons/icons"
import WhyChooseUsCard from "./WhyChooseUsCard"
import CompanyLogosSlider from "./CompanyLogosSlider"

interface WhyChooseUsSectionProps {
    className?: string
}

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ className = "" }) => {
    const whyChooseUsData = [
        {
            icon: Icons.Coins,
            title: "Precision That Saves Money"
        },
        {
            icon: Icons.Documents,
            title: "Documents That Drive Decisions"
        },
        {
            icon: Icons.Transit,
            title: "Fast, Flexible Delivery"
        },
        {
            icon: Icons.Carpenter,
            title: "Built for Builders"
        }
    ]

    return (
        <section className={`w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 ${className}`}>
            <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Title */}
                <h2 className="heading-2 text-center text-primary-300 mb-12 sm:mb-16 md:mb-20 lg:mb-24 uppercase font-bold">
                    Why Choose Us
                </h2>

                {/* Cards Grid */}
                <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28">
                    {/* Mobile: Single column layout */}
                    <div className="grid grid-cols-2 sm:hidden gap-12 max-w-[280px] mx-auto">
                        {whyChooseUsData.map((item, index) => (
                            <WhyChooseUsCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                            />
                        ))}
                    </div>

                    {/* Tablet: 2x2 grid layout */}
                    <div className="hidden sm:grid md:hidden grid-cols-2 gap-x-8 gap-y-12 max-w-[500px] sm:max-w-[600px] mx-auto">
                        {whyChooseUsData.map((item, index) => (
                            <WhyChooseUsCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                            />
                        ))}
                    </div>

                    {/* Desktop: Single row layout */}
                    <div className="hidden md:grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 max-w-[900px] lg:max-w-[1100px] mx-auto">
                        {whyChooseUsData.map((item, index) => (
                            <WhyChooseUsCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Company Logos Slider */}
            <CompanyLogosSlider />
        </section>
    )
}

export default WhyChooseUsSection
