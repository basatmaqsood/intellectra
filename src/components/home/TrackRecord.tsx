import type React from "react"
import TrackRecordCard from "./TrackRecordCard"

interface TrackRecordSectionProps {
    className?: string
}

const TrackRecordSection: React.FC<TrackRecordSectionProps> = ({ className = "" }) => {
    const trackRecordData = [
        { number: "120+", description: "Projects Delivered", numberColor: "text-accent2-400" },
        { number: "150+", description: "Winning Bids Secured", numberColor: "text-accent1-400" },
        { number: "99.7%", description: "On-Time Delivery Rate", numberColor: "text-accent1-500" },
        { number: "35+", description: "In-House Engineers & Drafters", numberColor: "text-primary-300" }
    ]

    return (
        <section className={`relative overflow-hidden w-full pb-18 sm:py-14 md:py-20 lg:py-28 xl:py-36  h-auto flex justify-center items-center${className}`}>


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

            <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[70%] mx-auto px-4 sm:px-6 md:px-8">
                {/* Section Title */}
                <h2 className="heading-2 text-primary-300 md:text-[3.5rem] lg:text-[4.5rem] text-center mb-12 sm:mb-16 md:mb-20 lg:mb-28 uppercase font-bold">
                    Our Track Record
                </h2>

                {/* Track Record Grid */}
                <div className="">
                    {/* Mobile: Single column layout (xs to sm) */}
                    <div className="flex flex-col sm:hidden space-y-6 max-w-[180px] mx-auto">
                        {trackRecordData.map((item, index) => (
                            <TrackRecordCard
                                key={index}
                                number={item.number}
                                description={item.description}
                                numberColor={item.numberColor}
                                numberSizeClass="text-3xl sm:text-4xl"
                                descriptionSizeClass="body-text-sm"
                                marginBottomClass="mb-3"
                                className="py-8 px-6"
                            />
                        ))}
                    </div>

                    {/* Tablet: 2x2 grid layout (sm to md) */}
                    <div className="hidden sm:grid md:hidden sm:grid-cols-2 sm:gap-6 sm:max-w-[500px] sm:mx-auto">
                        {trackRecordData.map((item, index) => (
                            <TrackRecordCard
                                key={index}
                                number={item.number}
                                description={item.description}
                                numberColor={item.numberColor}
                                numberSizeClass="text-4xl"
                                descriptionSizeClass="body-text-sm"
                                marginBottomClass="mb-4"
                                className="px-6 py-12"
                            />
                        ))}
                    </div>

                    {/* Desktop: 2x2 grid layout (md and up) */}
                    <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:max-w-[750px] lg:max-w-[900px] md:mx-auto">
                        {trackRecordData.map((item, index) => (
                            <TrackRecordCard
                                key={index}
                                number={item.number}
                                description={item.description}
                                numberColor={item.numberColor}
                                numberSizeClass="text-5xl lg:text-6xl"
                                descriptionSizeClass="text-base lg:text-lg"
                                marginBottomClass="mb-4 lg:mb-6"
                                className="px-12 py-12 lg:py-16"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrackRecordSection
