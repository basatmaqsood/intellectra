import type React from "react"
import { LinkButton } from "../stories/components/Button"

interface AboutUsSectionProps {
    className?: string
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ className = "" }) => {
    return (
        <section className={`w-full bg-black md:bg-[url('/images/about-bg.png')] md:bg-no-repeat md:bg-cover h-auto md:h-[994px] flex justify-center items-center py-14 lg:py-32 md:py-0 ${className}`}>
            <div className="w-full max-w-[90%] sm:max-w-[50%] mx-auto px-4 md:px-8">
                {/* Section Title */}
                <h2 className="heading-2 text-[1.8rem] md:text-[4.5rem] text-center text-primary-300 mb-10 md:mb-28 uppercase">
                    About Us
                </h2>

                {/* Grid Container for Top Two Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 mb-4 md:mb-10">
                    {/* First Card - We Turn Complexity into Clarity */}
                    <div className=" border border-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-3">
                        <h3 className="heading-6 text-primary-300 text-center sm:text-start mb-6">
                            Turning Complexity into Clarity
                        </h3>
                        <p className="text-white body-text-sm  leading-relaxed text-center">
INTELLECTRA is a specialized estimation and design firm helping builders, engineers, and project managers gain control over cost, time, and execution. With decades of combined technical experience, we deliver project-ready solutions that reduce guesswork and elevate quality.                        </p>
                    </div>

                    {/* Second Card - Smart Project Support */}
                    <div className=" border border-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2">
                        <h6 className="heading-6 text-primary-300 mb-6 leading-tight heading-6">
                            Smart Project Support
                        </h6>
                        <p className="text-white body-text-sm  text-center">Whether it s a large-scale MEP setup or smart IT system planning, our experts deliver clear, reliable, and tailored estimates and drawings</p>
                    </div>
                </div>


                {/* Bottom Full-Width Card */}
                <div className="border border-white rounded-3xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <p className="text-white body-text-sm leading-relaxed text-center">
                            Discover how we simplify complex projects with precision and expertise.
                        </p>
                        <div className="hidden md:flex md:flex-shrink-0">
                            <LinkButton variant="tertiary" showArrow path="/about">Explore More</LinkButton>
                        </div>
                    </div>
                </div>

                                {/* Mobile Button - appears only on mobile */}
                <div className="md:hidden mt-10">
                    <div className="flex justify-center">
                        <LinkButton variant="primary" showArrow path="/about">Explore More</LinkButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection