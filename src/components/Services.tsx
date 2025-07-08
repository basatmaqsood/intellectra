import type React from "react"
import { Icons } from "../assets/icons/icons";

interface ServicesSectionProps {
    className?: string
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ className = "" }) => {
    return (
        <section className={`w-full bg-black md:bg-[url('/images/about-bg.png')] md:bg-no-repeat md:bg-cover h-auto md:h-[994px] flex justify-center items-center py-32 md:py-0 ${className}`}>
            <div className="w-full max-w-[90%] md:max-w-[80%] mx-auto px-4 md:px-8">
                {/* Section Title */}
                <h2 className="heading-2 text-[1.8rem] md:text-[4.5rem] text-center text-orange-500 mb-20 md:mb-28 uppercase">
                    What We Do Best
                </h2>

                {/* Services Grid */}
                <div className="mb-10">
                    {/* Mobile: 2x2 grid for first 4 cards */}
                    <div className="grid grid-cols-2 md:hidden mb-0 gap-2">
                        {/* MEP Estimation */}
                        <div className="border-2 border-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="mb-4 flex justify-center">
                                <img src={Icons.MEP} alt="MEP" />
                            </div>
                            <h3 className="heading-6 text-orange-500 mb-2 text-sm">
                                MEP Estimation
                            </h3>
                            <p className="text-white body-text-sm leading-relaxed text-center text-xs">
                                End-to-end cost forecasting for mechanical, electrical, and plumbing systems, backed by codes and construction realities.
                            </p>
                        </div>

                        {/* IT Estimation */}
                        <div className="border-2 border-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="mb-4 flex justify-center">
                                <img src={Icons.IT} alt="IT" />
                            </div>
                            <h3 className="heading-6 text-orange-500 mb-2 text-sm">
                                IT Estimation
                            </h3>
                            <p className="text-white body-text-sm leading-relaxed text-center text-xs">
                                Detailed planning for smart infrastructure, networking systems, and tech-based building integrations.
                            </p>
                        </div>

                        {/* Electrical Estimation */}
                        <div className="border-2 border-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="mb-4 flex justify-center">
                                <img src={Icons.Electrical} alt="Electrical" />
                            </div>
                            <h3 className="heading-6 text-orange-500 mb-2 text-sm">
                                Electrical Estimation
                            </h3>
                            <p className="text-white body-text-sm leading-relaxed text-center text-xs">
                                Accurate pricing for wiring, panels, load calculations, lighting, and power distribution systems.
                            </p>
                        </div>

                        {/* Shop Drawings */}
                        <div className="border-2 border-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="mb-4 flex justify-center">
                                <img src={Icons.Drawing} alt="Drawing" />
                            </div>
                            <h3 className="heading-6 text-orange-500 mb-2 text-sm">
                                Shop Drawings
                            </h3>
                            <p className="text-white body-text-sm leading-relaxed text-center text-xs">
                                Professional, construction-ready drawings for MEP and architectural scopes — coordinated, compliant, and field-friendly.
                            </p>
                        </div>
                    </div>

                    {/* Mobile: Centered 5th card */}
                    <div className="md:hidden mt-2">
                        <div className="border-2 border-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center mx-auto max-w-[50%]">
                            <div className="mb-4 flex justify-center">
                                <img src={Icons.Engineering} alt="Engineering" />
                            </div>
                            <h3 className="heading-6 text-orange-500 mb-2 text-sm">
                                Engineering Documents
                            </h3>
                            <p className="text-white body-text-sm leading-relaxed text-center text-xs">
                                BOQs, specifications, and technical documentation that meet local regulations and project standards.
                            </p>
                        </div>
                    </div>

                    {/* Desktop: All 5 cards in single row */}
                    <div className="hidden md:grid md:grid-cols-5">
                        {/* MEP Estimation */}
                        <div className="border-2 border-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="mb-6 flex justify-center">
                                <img src={Icons.MEP} alt="MEP" />
                            </div>
                            <h3 className="heading-6 text-orange-500 mb-4">
                                MEP Estimation
                            </h3>
                            <p className="text-white body-text-sm leading-relaxed text-center">
                                End-to-end cost forecasting for mechanical, electrical, and plumbing systems, backed by codes and construction realities.
                            </p>
                        </div>

                        {/* IT Estimation */}
                        <div className="border-2 border-white border-l-0 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="mb-6 flex justify-center">
                                <img src={Icons.IT} alt="IT" />
                            </div>
                            <h3 className="heading-6 text-orange-500 mb-4">
                                IT Estimation
                            </h3>
                            <p className="text-white body-text-sm leading-relaxed text-center">
                                Detailed planning for smart infrastructure, networking systems, and tech-based building integrations.
                            </p>
                        </div>

                        {/* Electrical Estimation */}
                        <div className="border-2 border-white border-l-0 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="mb-6 flex justify-center">
                                <img src={Icons.Electrical} alt="Electrical" />
                            </div>
                            <h3 className="heading-6 text-orange-500 mb-4">
                                Electrical Estimation
                            </h3>
                            <p className="text-white body-text-sm leading-relaxed text-center">
                                Accurate pricing for wiring, panels, load calculations, lighting, and power distribution systems.
                            </p>
                        </div>

                        {/* Shop Drawings */}
                        <div className="border-2 border-white border-l-0 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="mb-6 flex justify-center">
                                <img src={Icons.Drawing} alt="Drawing" />
                            </div>
                            <h3 className="heading-6 text-orange-500 mb-4">
                                Shop Drawings
                            </h3>
                            <p className="text-white body-text-sm leading-relaxed text-center">
                                Professional, construction-ready drawings for MEP and architectural scopes — coordinated, compliant, and field-friendly.
                            </p>
                        </div>

                        {/* Engineering Documents */}
                        <div className="border-2 border-white border-l-0 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                            <div className="mb-6 flex justify-center">
                                <img src={Icons.Engineering} alt="Engineering" />
                            </div>
                            <h3 className="heading-6 text-orange-500 mb-4">
                                Engineering Documents
                            </h3>
                            <p className="text-white body-text-sm leading-relaxed text-center">
                                BOQs, specifications, and technical documentation that meet local regulations and project standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
