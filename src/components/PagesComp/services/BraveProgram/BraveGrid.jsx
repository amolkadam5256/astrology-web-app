import React from "react";

const BraveGrid = () => {
  const words = ["Bespoke", "Resonant", "Aligned", "Vibrant", "Evolved"];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {words.map((word, i) => (
        <div
          key={i}
          data-aos="fade-up"
          data-aos-delay={i * 100}
          className="p-6 border border-white/10 bg-white/5 text-white font-black uppercase text-xs tracking-widest"
        >
          {word}
        </div>
      ))}
    </div>
  );
};

export default BraveGrid;
