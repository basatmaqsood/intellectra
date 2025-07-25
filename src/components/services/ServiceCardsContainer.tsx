import React from "react";
import ServiceCard from "./ServiceCard";
import { Icons } from "../../assets/icons/icons";

interface ServiceData {
    icon: string;
    title: string;
    description: string;
    featuredText?: string;
    buttonText?: string;
    buttonPath?: string;
}

const ServiceCardsContainer: React.FC = () => {
    const services: ServiceData[] = [
        {
            icon: Icons.MEPColor,
            title: "MEP ESTIMATION",
            description: "We provide accurate Mechanical, Electrical, and Plumbing (MEP) estimates for a variety of sectors—residential, commercial, and industrial. Our reports support competitive bidding, design coordination, and efficient budgeting."
        },
        {
            icon: Icons.ITColor,
            title: "IT ESTIMATION",
            description: "From structured cabling to smart security systems, our IT estimates give you a clear cost breakdown of your building's digital backbone. Ideal for contractors and developers integrating modern technologies into physical spaces."
        },
        {
            icon: Icons.DrawingColor,
            title: "SHOP DRAWINGS",
            description: "We develop detailed, compliance-ready shop drawings for MEP, architectural, and structural systems. Each drawing is designed to support field coordination and fast-track approvals."
        },
        {
            icon: Icons.ElectricalColor,
            title: "ELECTRICAL ESTIMATION",
            description: "We deliver standards-aligned electrical estimates including load calculations, equipment lists, and labor projections. Perfect for teams managing power systems, lighting layouts, or full electrical distribution."        },
        {
            icon: Icons.EngineeringColor,
            title: "ENGINEERING DOCUMENTS",
            description: "From BOQs and specifications to detailed scope documentation, our engineering documents are clean, compliant, and contractor-ready. We ensure your paperwork supports the flow of procurement, approvals, and execution."
        },
        {
            icon: Icons.CaseStudyColor,
            title: "CASE STUDIES",
            description: "See how INTELLECTRA has helped contractors and consultants win bids and deliver with confidence.",
            featuredText: "Featured project: Sol on Park – Senior Living High Rise",
            buttonText: "Read More",
            buttonPath: "/case-study/sol-on-park"
        }
    ];

    return (
        <section className="relative overflow-hidden w-full  py-54.5 sm:py-52 md:60 lg:py-70  xl:py-79">
            
                  {/* Background Effects */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-[75%] left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
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


        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-[50%] left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #F98328 0%, #Fa8f28 10%, #000000 100%)'
             }}>
        </div>
        
        {/* Teal gradient ball - top right */}
        <div className="absolute top-[25%] right-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full translate-x-5/8 md:translate-x-3/8 translate-y-4 md:translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #7EC8C4 0%, #7EC8e4 10%, #000000 100%)'
             }}>
        </div>


        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-[25%] left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #F98328 0%, #Fa8f28 10%, #000000 100%)'
             }}>
        </div>
        
        {/* Teal gradient ball - top right */}
        <div className="absolute top-[50%] right-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full translate-x-5/8 md:translate-x-3/8 translate-y-4 md:translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #7EC8C4 0%, #7EC8e4 10%, #000000 100%)'
             }}>
        </div>


        {/* Orange gradient ball - bottom left */}
        <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full -translate-x-2/4 -translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #F98328 0%, #Fa8f28 10%, #000000 100%)'
             }}>
        </div>
        
        {/* Teal gradient ball - top right */}
        <div className="absolute top-[75%] right-0 w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-84 xl:h-84 rounded-full translate-x-5/8 md:translate-x-3/8 translate-y-4 md:translate-y-10 blur-lg"
             style={{
               background: 'radial-gradient(circle at center, #7EC8C4 0%, #7EC8e4 10%, #000000 100%)'
             }}>
        </div>
      </div>


            <div className="w-full max-w-[67%] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
                    {services.map((service, index) => {
                        // Determine background and title color based on service type
                        let titleColorClass = "text-primary-300"; // Default orange
                        let backgroundClass = ""; // Default dark brown gradient with 66% black
                        
                        if (service.title === "SHOP DRAWINGS" || service.title === "MEP ESTIMATION" || service.title === "ENGINEERING DOCUMENTATION") {
                            titleColorClass = "text-accent2-300"; // Teal color
                            backgroundClass = ""; // Teal gradient with 66% black
                        } 
                        
                        return (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                titleColorClass={titleColorClass}
                                backgroundClass={backgroundClass}
                                featuredText={service.featuredText}
                                buttonText={service.buttonText}
                                buttonPath={service.buttonPath}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServiceCardsContainer;