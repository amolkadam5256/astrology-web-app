import React from "react";

const BlogHero = () => {
  return (
    <div className="text-center mb-16">
      <h2
        data-aos="fade-up"
        className="text-[12px] uppercase tracking-[0.5em] font-black text-[#2262b2] mb-4"
      >
        Celestial Journal
      </h2>
      <h3
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-4xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase tracking-tighter leading-tight"
      >
        Latest <span className="text-[#2262b2]">Cosmic Insights</span>
      </h3>
    </div>
  );
};

export default BlogHero;
