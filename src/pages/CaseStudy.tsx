import HeroSection from '../components/SimpleHero'
import Footer from '../components/Footer'
import CTASection from '../components/CTA'
import ContentSection from '../components/ContentSection'
import BlogGradientBackground from '../components/Blog-gradient-bg'
import CaseStudyGradient from '../components/CaseStudyGradient'
import CaseStudyChangingText from '../components/CaseStudyChangingText'
import { Helmet } from 'react-helmet-async';

function CaseStudy() {
    const headlineData = {
        lines: [
            {
                text: "CASE STUDY",
                highlightedWords: [],
            },
            {
                text: "SOL ON PARK",
                highlightedWords: [{ word: "SOL ON PARK", color: "text-primary-300" }],
            },
        ],
    }

    const taglineData = {
        lines: [
            {
                text: "Explore how INTELLECTRA's estimation and design services help bring complex projects to life — in time, on budget, and with precision.",
                highlightedWords: [],
            }
        ],
    }

    return (
        <>
            <Helmet>
                <title>Case Study | INTELLECTRA</title>
                <meta name="description" content="See how INTELLECTRA helped deliver Sol on Park—a complex senior living high-rise—with precise estimation, shop drawings, and zero cost surprises." />
            </Helmet>
            <HeroSection headline={headlineData} tagline={taglineData} backgroundImage='/images/casestudy-bg.png' backgroundAlt="Modern residential complex with a luxury poolside area at sunset, representing Intellectra’s precision-driven estimation and smart design services for large-scale construction projects." />

            {/* Case Study Content */}
            <section className="w-full relative py-14 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden">
                <CaseStudyGradient />
                <div className="w-full max-w-[70%] mx-auto ">

                    <div>

                        <ContentSection heading="PROJECT SNAPSHOT">
                            <p><strong>Client Urban:</strong> BuildCo</p>
                            <p><strong>Project Type:</strong> Senior Living High-rise mixed-use</p>
                            <p><strong>Location:</strong> U.S. Urban Center</p>
                            <p><strong>Height:</strong> 18 Stories</p>
                            <p><strong>Units:</strong> 229 Residential Units</p>
                            <p><strong>Amenity Spaces:</strong> United Community Health Center, Gym, Offices, Landscape Terrace</p>
                            <p><strong>INTELLECTRA Services:</strong> Full-scope Estimation & Design Support</p>
                        </ContentSection>

                        {/* Image */}
                        <div className="w-full h-full mb-7.5  sm:mb-15 md:mb-20 lg:mb-25 xl:mb-30">
                            <img src="/images/casestudy/casestudy-1.png" alt="State-of-the-art 18-story residential tower at sunset, showcasing Sol on Park’s mixed-use architectural design and Intellectra’s full-scope estimation and design support for senior living housing." className="w-full rounded-lg" />
                        </div>

                        <ContentSection heading="PROJECT BACKGROUND" className='mb-0'>
                            Sol on Park is a state-of-the-art, 18-story residential tower designed for senior living — integrating private housing with healthcare, recreation, and administrative facilities.
                        </ContentSection>
                        <ContentSection className='mb-0'>
                            With 229 units and multiple program elements, the project presented a unique blend of residential and institutional design. The goal was to provide a seamless user experience while meeting tight cost and regulatory requirements.
                        </ContentSection>
                        <ContentSection >
                            Urban BuildCo engaged INTELLECTRA to bring structure and clarity to the project’s early development phase. Our mandate: ensure every number and drawing submitted was aligned, defensible, and ready for execution — eliminating the cost overruns and delays that often plague large-scale mixed-use projects.
                        </ContentSection>

                        <ContentSection heading="SCOPE OF WORK DELIVERED">
                            INTELLECTRA provided full-scope estimation and design support for the Sol on Park project, covering MEP, electrical, IT systems, shop drawings, and engineering documentation. Our team delivered detailed takeoffs and cost models for HVAC, plumbing, fire protection, and mechanical systems—organized by floor and use-case for accuracy. For electrical systems, we used ConEst to model real-time pricing for lighting layouts, load calculations, and distribution panels, ensuring reliable procurement planning. The IT scope involved structured cabling, telecom infrastructure, and smart automation, with PlanSwift and vendor-based costing used to reduce budget risk and ensure forward-compatible infrastructure. We also developed fully coordinated, construction-ready shop drawings using Bluebeam, enabling faster approvals and reducing field errors. Lastly, we compiled BOQs, scope sheets, and technical specifications in a clear, contractor-ready format, streamlining documentation for smoother bids, approvals, and execution. Through precise tools, collaboration, and layered validation, INTELLECTRA helped bring structure, speed, and certainty to every stage of the project.
                        </ContentSection>

                        {/* Image */}
                        <div className="w-full h-full mb-7.5  sm:mb-15 md:mb-20 lg:mb-25 xl:mb-30">
                            <img src="/images/casestudy/casestudy-2.png" alt="Architectural rendering of a complex mixed-use high-rise with residential, healthcare, and recreational zones, highlighting Intellectra’s technical expertise in project estimation and design integration." className="w-full rounded-lg" />
                        </div>

                        <ContentSection heading="PROJECT CHALLENGES">
                        We faced a highly complex mixed-use design, with each zone—residential, healthcare, and recreational—demanding unique technical solutions. A compressed timeline and strict budget left no room for revisions or cost overruns. Coordinating across multiple stakeholders made precision and alignment critical at every stage.                        </ContentSection>

                        {/* Images Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-7.5  sm:mb-15 md:mb-20 lg:mb-25 xl:mb-30">
                            <img src="/images/casestudy/casestudy-3-1.png" alt="High-rise construction site with cranes under a cloudy sky – representing mixed-use building development challenges" className="w-full h-full rounded-lg" />
                            <img src="/images/casestudy/casestudy-3-2.png" alt="Architectural rendering of mixed-use residential and commercial tower – modern urban infrastructure design" className="w-full h-full rounded-lg" />
                            <img src="/images/casestudy/casestudy-3-3.png" alt="Construction workers installing rooftop solar panels – sustainable energy integration in building projects" className="w-full h-full rounded-lg" />
                            <CaseStudyChangingText />
                        </div>

                        <ContentSection heading="RESULTS DELIVERED">
                        INTELLECTRA’s detailed estimates and documentation helped the contractor win the bid with confidence. Our shop drawings were approved on the first round, cutting weeks off pre-construction timelines. Real-time pricing and clear scope breakdowns eliminated budget surprises, while our engineering documents enabled swift, vendor-ready procurement. Throughout the project, we remained responsive and hands-on—offering seamless support from coordination to RFI resolution.                        </ContentSection>

                        <ContentSection heading="CONCLUSION">
                        Sol on Park stands as a testament to how early-stage estimation and design support can define the trajectory of a complex project. With INTELLECTRA’s precise documentation and clear communication, the client was able to move from planning to execution with full confidence — and no second-guessing.
                        At INTELLECTRA, we don’t just provide services — we bring structure to uncertainty, and help our partners build better, faster, and smarter.
                        </ContentSection>

                    </div>
                </div>
            </section>

            <CTASection
                title="PLANNING SOMETHING BIG?"
                description_line1="Let's see what new INTELLECTRA can bring to your next build — from smart applications to your next bigger"
                description_line2="vision. Contact us and find out!"
                buttonText="Request a Quote"
                buttonPath="/contact"
            />
            <Footer />
        </>
    )
}

export default CaseStudy