import React from "react";
import { Check } from "lucide-react";

const PillarItem = ({ title, desc }) => (
  <div className="p-6 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div>
      <h4 className="text-xs sm:text-sm font-black text-[var(--color-dark)] dark:text-white uppercase mb-1">
        {title}
      </h4>
      <p className="text-[11px] sm:text-[12px] text-gray-500 font-medium">
        {desc}
      </p>
    </div>
    <Check size={16} className="text-[var(--color-secondary)] shrink-0" />
  </div>
);

const BabyNamePillars = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[var(--color-dark)] border-y border-gray-100 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-black text-center text-[var(--color-dark)] dark:text-white uppercase mb-12 tracking-widest">
          Our Selection Pillars
        </h2>
        <div className="space-y-4">
          <PillarItem
            title="Alphabetical Frequency"
            desc="Different letters carry different numeric weights. We avoid 'heavy' or dissonant combinations."
          />
          <PillarItem
            title="Nickname Impact"
            desc="The world calls your child by many names. We check common nicknames for vibrational safety."
          />
          <PillarItem
            title="Heritage & Meaning"
            desc="We combine numerical luck with your family heritage and the profound literal meaning of the name."
          />
        </div>
      </div>
    </section>
  );
};

export default BabyNamePillars;
