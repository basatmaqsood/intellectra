import type React from "react"

interface TrackRecordSectionProps {
    className?: string
}

const TrackRecordSection: React.FC<TrackRecordSectionProps> = ({ className = "" }) => {
    return (
        <section className={`w-full bg-black md:bg-[url('/images/about-bg.png')] md:bg-no-repeat md:bg-cover h-auto md:h-[994px] flex justify-center items-center py-32 md:py-0 ${className}`}>
            <div className="w-full max-w-[95%] md:max-w-[80%] mx-auto px-2 md:px-8">
                {/* Section Title */}
                <h2 className="heading-2 text-[1.8rem] md:text-[4.5rem] text-center text-orange-500 mb-20 md:mb-28 uppercase">
                    Our Track Record
                </h2>

                {/* Track Record Grid */}
                <div className="mb-10">
                    {/* Mobile: Single column layout */}
                    <div className="flex flex-col md:hidden space-y-4 max-w-[200px] mx-auto">
                        {/* Projects Delivered */}
                        <div className="border-2 border-gray-400 rounded-lg py-8 px-4 text-center">
                            <div className="text-4xl font-bold text-white mb-2">120+</div>
                            <div className="text-gray-300 text-sm">Projects Delivered</div>
                        </div>

                        {/* Bid Won */}
                        <div className="border-2 border-gray-400 rounded-lg py-8 px-4 text-center">
                            <div className="text-4xl font-bold text-white mb-2">45+</div>
                            <div className="text-gray-300 text-sm">Bid Won</div>
                        </div>

                        {/* On-Time Delivery Rate */}
                        <div className="border-2 border-blue-500 rounded-lg py-8 px-4 text-center">
                            <div className="text-4xl font-bold text-white mb-2">99.7%</div>
                            <div className="text-gray-300 text-sm">On-Time Delivery Rate</div>
                        </div>

                        {/* In-House Engineers */}
                        <div className="border-2 border-gray-400 rounded-lg py-8 px-4 text-center">
                            <div className="text-4xl font-bold text-white mb-2">15+</div>
                            <div className="text-gray-300 text-sm">In-House Engineers & Drafters</div>
                        </div>
                    </div>

                    {/* Desktop: 2x2 grid layout */}
                    <div className="hidden md:grid md:grid-cols-2 md:gap-6 md:max-w-3xl md:mx-auto">
                        {/* Projects Delivered */}
                        <div className="border-2 border-gray-400 rounded-lg px-8 py-10 text-center">
                            <div className="text-5xl font-bold text-white mb-3">120+</div>
                            <div className="text-gray-300">Projects Delivered</div>
                        </div>

                        {/* Bid Won */}
                        <div className="border-2 border-gray-400 rounded-lg px-8 py-10 text-center">
                            <div className="text-5xl font-bold text-white mb-3">45+</div>
                            <div className="text-gray-300">Bid Won</div>
                        </div>

                        {/* On-Time Delivery Rate */}
                        <div className="border-2 border-blue-500 rounded-lg px-8 py-10 text-center">
                            <div className="text-5xl font-bold text-white mb-3">99.7%</div>
                            <div className="text-gray-300">On-Time Delivery Rate</div>
                        </div>

                        {/* In-House Engineers */}
                        <div className="border-2 border-gray-400 rounded-lg px-8 py-10 text-center">
                            <div className="text-5xl font-bold text-white mb-3">15+</div>
                            <div className="text-gray-300">In-House Engineers & Drafters</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrackRecordSection
