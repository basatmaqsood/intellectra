import React from "react";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, onClick }) => {
  return (
    <div
      className="rounded-2xl border border-primary-300 px-5 sm:px-8 md:px-10 lg:px-12 xl:px-13 pt-10 sm:pt-8 md:pt-12 lg:pt-15 xl:pt-17  pb-7 sm:pb-8 md:pb-9 lg:pb-10 xl:pb-11 bg-black/60 hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col h-full"
      onClick={onClick}
      style={{ minHeight: "100%" }}
      tabIndex={0}
      role="button"
      onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
    >
      <div className="rounded-xl overflow-hidden aspect-[16/10] mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="heading-4 text-primary-300 mb-4 leading-tight">
            {title}
          </h3>
          <div className="flex items-center justify-between mb-2 md:mb-3">
            <p className="heading-6 text-white">
              {date}
            </p>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white transition-colors ml-4">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
