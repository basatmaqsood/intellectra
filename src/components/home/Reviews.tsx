import type React from "react"
import ReviewCard from "./ReviewCard"

interface ReviewsSectionProps {
    className?: string
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ className = "" }) => {
    const reviewsData = [
        {
            companyType: "Construction Group",
            rating: 4,
            review: "INTELLECTRA's MEP estimates were spot-on — helped us win two key tenders back-to-back.",
            reviewerName: "Annie Timmins",
            reviewerTitle: "Project Lead",
            reviewerAvatar: "/images/reviewers/client-1.jpg"
        },
        {
            companyType: "Urban BuildCo", 
            rating: 4,
            review: "They deliver exactly what a site team needs — clear shop drawings, no confusion.",
            reviewerName: "James Hill",
            reviewerTitle: "Development Manager",
            reviewerAvatar: "/images/reviewers/client-3.jpg"
        },
        {
            companyType: "HVAC Firm",
            rating: 4,
            review: "INTELLECTRA brought clarity and precision to our Sol on Park high-rise — a complex senior living project with 229 units, a health center, and landscaped terraces. Their MEP and IT estimates were spot on, aligning perfectly with our scope and budget needs. What really stood out? Their team felt like true partners — not just vendors. Their engineering docs were sharp, shop drawings field-ready, and timelines always met. With INTELLECTRA on board, we avoided costly redesigns and hit key milestones with confidence.",
            reviewerName: "Asif Raza",
            reviewerTitle: "Site Engineer",
            reviewerAvatar: "/images/reviewers/client-2.jpg"
        }
    ]

    return (
        <section className={`relative overflow-hidden w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 ${className}`}>


      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #F98328 0%, #Fa8f28 10%, #000000 100%)'
             }}>
        </div>
        
        {/* Teal gradient ball - top right */}
        <div className="absolute top-0 right-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full translate-x-3/8 translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #7EC8C4 0%, #7EC8e4 10%, #000000 100%)'
             }}>
        </div>
      </div>


            <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto px-10 sm:px-14 md:px-20 lg:px-28 xl:px-32">
                {/* Section Title */}
                <h2 className="heading-2 text-center text-primary-300 mb-12 sm:mb-16 md:mb-20 lg:mb-24 uppercase font-bold">
                    CLIENT'S REVIEWS
                </h2>

                {/* Reviews Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left Column: Construction Group and Urban BuildCo */}
                    <div className="flex flex-col space-y-6 sm:space-y-8">
                        <ReviewCard
                            companyType={reviewsData[0].companyType}
                            rating={reviewsData[0].rating}
                            review={reviewsData[0].review}
                            reviewerName={reviewsData[0].reviewerName}
                            reviewerTitle={reviewsData[0].reviewerTitle}
                            reviewerAvatar={reviewsData[0].reviewerAvatar}
                        />
                        <ReviewCard
                            companyType={reviewsData[1].companyType}
                            rating={reviewsData[1].rating}
                            review={reviewsData[1].review}
                            reviewerName={reviewsData[1].reviewerName}
                            reviewerTitle={reviewsData[1].reviewerTitle}
                            reviewerAvatar={reviewsData[1].reviewerAvatar}
                        />
                    </div>
                    
                    {/* Right Column: HVAC Firm */}
                    <ReviewCard
                        companyType={reviewsData[2].companyType}
                        rating={reviewsData[2].rating}
                        review={reviewsData[2].review}
                        reviewerName={reviewsData[2].reviewerName}
                        reviewerTitle={reviewsData[2].reviewerTitle}
                        reviewerAvatar={reviewsData[2].reviewerAvatar}
                        className="sm:h-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default ReviewsSection