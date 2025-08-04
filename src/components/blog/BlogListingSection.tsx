import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCategorySlider from "./BlogCategorySlider";
import BlogGrid, { Blog } from "./BlogGrid";
import { LinkButton } from "../../stories/components/Button";

const categories = [
  "All",
  "Estimation Strategy",
  "Data-Driven Design",
  "Innovation & Tools",
  "Technical Documentation",
  "Risk Management"
];

const allBlogs: (Blog & { category: string; link: string; alt?: string })[] = [
  {
    image: "/images/blogListing/blog-1.png",
    title: "How We Deliver Precise Estimation",
    date: "July 30, 2025",
    category: "Estimation Strategy",
    link: "/blog/how-we-deliver",
    alt: "Modern construction site with cranes representing precise MEP and electrical estimation for high-rise projects."
  },
  {
    image: "/images/blogListing/blog-2.jpg",
    title: "Built Smarter by Thinking Deeper First",
    date: "May 20, 2025",
    category: "Data-Driven Design",
    link: "",
    alt: "Engineer using digital estimation tools to plan smarter construction decisions with real-time data."
  },
  {
    image: "/images/blogListing/blog-3.jpg",
    title: "Blueprints Guide You, Numbers Decide All",
    date: "April 28, 2025",
    category: "Innovation & Tools",
    link: "",
        alt: "Tech professionals analyzing circuits, symbolizing the role of data and innovation in construction estimation."
  },
  {
    image: "/images/blogListing/blog-4.jpg",
    title: "Future Estimation, Smarter Builds",
    date: "March 30, 2025",
    category: "Technical Documentation",
    link: "",
    alt: "Project team in a strategy meeting, discussing future-ready estimation solutions and smarter build approaches."
  },
];

const BlogListingSection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [catIndex, setCatIndex] = useState(0);

  // Filter blogs by selected category
  const blogs = selectedCategory === "All"
    ? allBlogs
    : allBlogs.filter((b) => b.category === selectedCategory);

  const handlePrev = () => {
    const newIndex = catIndex === 0 ? categories.length - 1 : catIndex - 1;
    setCatIndex(newIndex);
    setSelectedCategory(categories[newIndex]);
  };
  const handleNext = () => {
    const newIndex = catIndex === categories.length - 1 ? 0 : catIndex + 1;
    setCatIndex(newIndex);
    setSelectedCategory(categories[newIndex]);
  };
  const handleSelect = (cat: string) => {
    setSelectedCategory(cat);
    setCatIndex(categories.indexOf(cat));
  };

  const handleCardClick = (idx: number) => {
    const blog = blogs[idx];
    if (blog && blog.link) {
      navigate(blog.link);
    }
  };

  return (
    <section className="relative w-full mx-auto px-4 md:px-8 xl:px-0 py-35  z-10">
      <BlogCategorySlider
        categories={categories}
        selected={selectedCategory}
        onSelect={handleSelect}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <BlogGrid blogs={blogs} onCardClick={handleCardClick} />
      <div className="flex justify-center mt-4 md:mt-8">
        <LinkButton children="Load More" variant="tertiary" showArrow />
      </div>
    </section>
  );
};

export default BlogListingSection;