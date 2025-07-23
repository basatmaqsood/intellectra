import type React from "react"

interface ReviewCardProps {
    companyType: string
    rating: number
    review: string
    reviewerName: string
    reviewerTitle: string
    reviewerAvatar?: string
    className?: string
}

const ReviewCard: React.FC<ReviewCardProps> = ({
    companyType,
    rating,
    review,
    reviewerName,
    reviewerTitle,
    reviewerAvatar,
    className = ""
}) => {
    const renderStars = () => {
        return Array.from({ length: rating }, (_, index) => (
            <span
                key={index}
                className="text-lg leading-none text-primary-300"
            >
                ★
            </span>
        ))
    }

    // Fallback avatar with initials
    const getInitials = (name: string) => {
        return name.split(' ').map(word => word[0]).join('').toUpperCase()
    }

    return (
        <div className={` bg-transparent border border-white rounded-[26px] px-7 py-8 sm:px-9 sm:py-9 md:px-11 md:py-10 lg:px-13 lg:py-11 xl:px-14 h-full flex flex-col ${className}`}>
            {/* Company Type and Rating */}
            <div className="flex items-start justify-between mb-4 sm:mb-5">
                <h3 className="text-primary-300 heading-6">
                    {companyType}
                </h3>
                <div className="flex items-center space-x-0.5 ml-4 flex-shrink-0">
                    {renderStars()}
                </div>
            </div>

            {/* Review Text */}
            <div className="flex-grow flex items-center mb-6 sm:mb-7">
                <p className="text-white body-text-sm">
                    "{review}"
                </p>
            </div>

            {/* Reviewer Info */}
            <div className="flex items-center mt-auto">
                {reviewerAvatar ? (
                    <img
                        src={reviewerAvatar}
                        alt={reviewerName}
                        className="w-12 h-12 sm:w-18 sm:h-18 rounded-full border-[2px] border-primary-300 mr-4 object-cover flex-shrink-0"
                    />
                ) : (
                    <div className="w-12 h-12 sm:w-18 sm:h-18 rounded-full mr-4 bg-primary-300 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold text-sm sm:text-base">
                            {getInitials(reviewerName)}
                        </span>
                    </div>
                )}
                <div className="min-w-0">
                    <h4 className="text-primary-300 heading-6">
                        {reviewerName}
                    </h4>
                    <p className="text-gray-300 body-text-sm">
                        {reviewerTitle}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard
