import React from "react";

const HealingVisual = () => {
  return (
    <div className="relative" data-aos="zoom-out">
      <div className="w-full aspect-square bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center p-20">
        <div className="w-full h-full border-4 border-[var(--color-primary)] rounded-full animate-[spin_10s_linear_infinite]"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl animate-pulse">🧘‍♀️</span>
      </div>
    </div>
  );
};

export default HealingVisual;
