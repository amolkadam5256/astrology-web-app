import React from "react";

const AngelCardsDisplay = () => {
  return (
    <div className="flex justify-center flex-wrap gap-8 lg:gap-12">
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          data-aos="flip-left"
          data-aos-delay={i * 200}
          className="w-40 h-64 bg-[var(--color-primary)]/5 border-2 border-[var(--color-primary)]/20 rounded-xl flex items-center justify-center group hover:bg-[var(--color-primary)] transition-all cursor-pointer"
        >
          <span className="text-4xl group-hover:scale-150 transition-transform">
            🔱
          </span>
        </div>
      ))}
    </div>
  );
};

export default AngelCardsDisplay;
