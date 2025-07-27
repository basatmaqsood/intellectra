import React from "react";

interface BlogCategoryNavProps {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

const BlogCategoryNav: React.FC<BlogCategoryNavProps> = ({ categories, selected, onSelect, onPrev, onNext }) => {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 md:mb-12">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-black transition-colors"
        onClick={onPrev}
        aria-label="Previous"
        type="button"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M12.5 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <div className="flex flex-wrap gap-2 md:gap-4 max-w-full overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 rounded-full border border-primary-300 text-base md:text-lg font-medium transition-colors whitespace-nowrap ${selected === cat ? "bg-primary-300 text-black" : "text-primary-300 hover:bg-primary-300 hover:text-black"}`}
            onClick={() => onSelect(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </div>
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-black transition-colors"
        onClick={onNext}
        aria-label="Next"
        type="button"
      >
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
};

export default BlogCategoryNav;
