// removed duplicate React import

interface BlogCategorySliderProps {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

import React, { useRef } from "react";

const BlogCategorySlider: React.FC<BlogCategorySliderProps> = ({ categories, selected, onSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = 120; // px

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
    }
  };
  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center max-w-[80%] mx-auto gap-2 md:gap-4 mb-8 md:mb-12 w-full">
      <button
        className="min-w-10 min-h-10 w-10 h-10 max-w-10 max-h-10 flex items-center justify-center rounded-full border border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white transition-colors p-0"
        onClick={handlePrev}
        aria-label="Scroll categories left"
        type="button"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M12.5 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div
        ref={scrollRef}
        className="flex gap-2 md:gap-4 max-w-full overflow-x-auto scrollbar-hide no-scrollbar px-1"
        style={{ scrollBehavior: "smooth" }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 rounded-full border border-primary-300 body-text font-medium transition-colors whitespace-nowrap ${selected === cat ? "bg-primary-300 text-white" : "text-primary-300 hover:bg-primary-300 hover:text-white"}`}
            onClick={() => onSelect(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>
      <button
        className="min-w-10 min-h-10 w-10 h-10 max-w-10 max-h-10 flex items-center justify-center rounded-full border border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white transition-colors p-0"
        onClick={handleNext}
        aria-label="Scroll categories right"
        type="button"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
};

export default BlogCategorySlider;
