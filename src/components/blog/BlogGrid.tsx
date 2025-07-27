import React from "react";
import BlogCard from "./BlogCard";

export interface Blog {
  image: string;
  title: string;
  date: string;
}

interface BlogGridProps {
  blogs: Blog[];
  onCardClick?: (index: number) => void;
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs, onCardClick }) => {
  return (
    <div className="w-full max-w-[60%] sm:max-w-[50%] md:max-w-[70%] mx-auto grid grid-cols-1  md:grid-cols-2  gap-12 sm:gap-10 md:gap-8 mb-8 md:mb-12">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} {...blog} onClick={() => onCardClick?.(idx)} />
      ))}
    </div>
  );
};

export default BlogGrid;
