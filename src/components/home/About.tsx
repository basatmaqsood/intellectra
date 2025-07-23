import type React from "react"
import { LinkButton } from "../../stories/components/Button"

interface AboutUsSectionProps {
    className?: string
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ className = "" }) => {
    return (
        <section className={`relative w-full overflow-hidden flex justify-center items-center py-18 sm:py-14 md:py-24 lg:py-28 xl:py-36 ${className}`}>
            {/* Background Effects */}
            <div className="absolute inset-0 z-[-1] overflow-hidden">
                {/* Orange gradient ball - bottom left */}
                <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-3/4 sm:-translate-x-2/4  -translate-y-2 sm:-translate-y-10 blur-lg"
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

            <div className="w-full max-w-[60%] sm:max-w-[50%] md:max-w-[60%] mx-auto px-4 md:px-8
            ">
                {/* Section Title */}
                <h2 className="heading-2 text-[1.8rem] md:text-[4.5rem] text-center text-primary-300 mb-10 md:mb-28 uppercase">
                    About Us
                </h2>

                {/* Grid Container for Top Two Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-7 md:mb-8 ">
                    {/* First Card - We Turn Complexity into Clarity */}
                    <div className=" border border-white rounded-[26px] py-8 md:py-10 lg:py-12 xl:py-15 px-4 sm:px-6 md:px-9 lg:px-12 xl:px-14 transition-shadow duration-300 md:col-span-3">
                        <h3 className="heading-6 text-primary-300 text-center mb-3 sm:mb-6 leading-tight heading-6">
                            Turning Complexity into Clarity
                        </h3>
                        <p className="text-white body-text-sm  leading-relaxed text-center">
                            INTELLECTRA is a specialized estimation and design firm helping builders, engineers, and project managers gain control over cost, time, and execution. With decades of combined technical experience, we deliver project-ready solutions that reduce guesswork and elevate quality.                        </p>
                    </div>

                    {/* Second Card - Smart Project Support */}
                    <div className=" border border-white rounded-[26px] py-8 md:py-10 lg:py-12 xl:py-15 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 md:col-span-2">
                        <h3 className="heading-6 text-center  text-primary-300 mb-3 sm:mb-6 leading-tight heading-6">
                            Smart Project Support
                        </h3>
                        <p className="text-white body-text-sm  text-center">Whether it s a large-scale MEP setup or smart IT system planning, our experts deliver clear, reliable, and tailored estimates and drawings</p>
                    </div>
                </div>


                {/* Bottom Full-Width Card */}
                <div className="border border-white rounded-[26px] px-4 sm:px-10 md:px-14  py-6 sm:py-8 md:py-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <p className="text-white body-text-sm leading-relaxed text-center">
                            Want to learn how we simplify complex projects?
                            </p>
                        <div className="flex justify-center md:justify-end md:flex-shrink-0">
                            <LinkButton variant="tertiary" showArrow path="/about">Explore More</LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection