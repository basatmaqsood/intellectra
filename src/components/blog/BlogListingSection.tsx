import React, { useState } from "react";
import BlogCategoryNav from "./BlogCategoryNav";
import BlogGrid, { Blog } from "./BlogGrid";
import { LinkButton } from "../../stories/components/Button";

const categories = [
  "Estimation Strategy",
  "Data-Driven Design",
  "Innovation & Tools",
  "Technical Documentation",
  "Risk Management"
];

const allBlogs: Blog[] = [
  {
    image: "/images/blogListing/blog-1.png",
    title: "How We Deliver Precise Estimation",
    date: "July 30, 2025",
  },
  {
    image: "/images/blogListing/blog-2.jpg",
    title: "Built Smarter by Thinking Deeper First",
    date: "May 20, 2025",
  },
  {
    image: "/images/blogListing/blog-3.jpg",
    title: "Blueprints Guide You, Numbers Decide All",
    date: "April 28, 2025",
  },
  {
    image: "/images/blogListing/blog-4.jpg",
    title: "Future Estimation, Smarter Builds",
    date: "March 30, 2025",
  },
];

const BlogListingSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [catIndex, setCatIndex] = useState(0);

  // For demo, all blogs are shown for all categories
  // In real app, filter blogs by category
  const blogs = allBlogs;

  const handlePrev = () => {
    setCatIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
    setSelectedCategory(categories[(catIndex - 1 + categories.length) % categories.length]);
  };
  const handleNext = () => {
    setCatIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
    setSelectedCategory(categories[(catIndex + 1) % categories.length]);
  };
  const handleSelect = (cat: string) => {
    setSelectedCategory(cat);
    setCatIndex(categories.indexOf(cat));
  };

  return (
    <section className="relative w-full mx-auto px-4 md:px-8 xl:px-0 py-35  z-10">
      <BlogCategoryNav
        categories={categories}
        selected={selectedCategory}
        onSelect={handleSelect}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <BlogGrid blogs={blogs} />
      <div className="flex justify-center mt-4 md:mt-8">
        <LinkButton children="Load More" variant="tertiary" showArrow />
      </div>
    </section>
  );
};

export default BlogListingSection;
