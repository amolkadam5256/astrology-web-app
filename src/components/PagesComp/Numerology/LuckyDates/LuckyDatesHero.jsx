import React from "react";
import { Sparkles } from "lucide-react";

const LuckyDatesHero = () => {
  return (
    <div className="text-center mb-16" data-aos="zoom-out">
      <div className="inline-flex items-center space-x-2 text-[var(--color-secondary)] mb-4">
        <Sparkles size={16} />
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">
          Optimized Timing
        </span>
      </div>
      <h1 className="text-3xl md:text-5xl font-black text-[var(--color-dark)] dark:text-white uppercase mb-6 tracking-tighter leading-tight">
        Lucky <span className="text-[var(--color-primary)]">Vibrations</span>
      </h1>
      <p className="text-gray-500 font-medium text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
        Identify the specific windows of opportunity when the universe is
        aligned with your personal energy. From daily choices to major life
        cycles.
      </p>
    </div>
  );
};

export default LuckyDatesHero;
