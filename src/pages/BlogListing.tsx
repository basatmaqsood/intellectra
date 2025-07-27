import CTASection from "../components/CTA"
import Footer from "../components/Footer"
import HeroSection from "../components/SimpleHero"
import BlogListingSection from "../components/blog/BlogListingSection"

function BlogListing() {

  const headlineData = {
    lines: [
      {
        text: "GO BEYOND THE",
        highlightedWords: [{ word: "", color: "text-primary-300" }],
      },
      {
        text: "BLUEPRINT",
        highlightedWords: [{ word: "BLUEPRINT", color: "text-primary-300" }],
      },
    ],
  }

  const taglineData = {
    lines: [
      {
        text: "Unpack insights, strategies, and stories that power precision.",
        highlightedWords: [], // No highlighted words in first line
      },
      {
        text: "From cutting-edge estimation tools to real-world case studies, explore how INTELLECTRA delivers clarity where it counts — and why accuracy is the future of every great build.",
        highlightedWords: [],
      },
    ],
  }

  return (
    <>
      <HeroSection headline={headlineData} tagline={taglineData} backgroundImage='/images/blog-listing-bg.png' />
      <BlogListingSection />
      <CTASection title="READY TO GET STARTED?" description_line1="Let us help you bring certainty to your next project." description_line2="We’ll take care of the numbers and drawings — you focus on building." buttonText="Request a Quote" buttonPath="/contact" />
      <Footer />
    </>
  )
}

export default BlogListing