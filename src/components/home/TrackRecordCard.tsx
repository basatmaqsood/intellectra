import type React from "react"

interface TrackRecordCardProps {
    number: string
    description: string
    numberColor: string
    numberSizeClass: string
    descriptionSizeClass: string
    marginBottomClass: string
    className?: string
}

const TrackRecordCard: React.FC<TrackRecordCardProps> = ({ 
    number, 
    description, 
    numberColor, 
    numberSizeClass,
    descriptionSizeClass,
    marginBottomClass,
    className = "" 
}) => {
    return (
        <div className={`border-2 border-white rounded-[40px] text-center bg-black ${className}`}>
            <div className={`font-bold ${numberColor} ${numberSizeClass} ${marginBottomClass}`}>{number}</div>
            <div className={`text-white leading-tight ${descriptionSizeClass}`}>{description}</div>
        </div>
    )
}

export default TrackRecordCard
