import React from "react";
import { Compass, Binary, Star, Settings, Layout, Hash } from "lucide-react";

const ConceptCard = ({ icon, title, desc, formula, example }) => (
  <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl hover:bg-white dark:hover:bg-[var(--color-primary)]/5 transition-all group active:scale-[0.98]">
    <div className="w-10 h-10 bg-white dark:bg-[var(--color-dark)] text-[var(--color-secondary)] rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-sm font-black uppercase tracking-widest text-[var(--color-dark)] dark:text-white mb-3">
      {title}
    </h4>
    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed font-medium">
      {desc}
    </p>
    <div className="pt-4 border-t border-gray-100 dark:border-white/10 space-y-2">
      <p className="text-[10px] uppercase font-black text-[var(--color-primary)]">Method:</p>
      <p className="text-[11px] text-gray-400 font-mono bg-white dark:bg-black/20 p-2 rounded leading-tight">
        {formula}
      </p>
      {example && (
        <p className="text-[10px] text-[var(--color-secondary)]/80 italic">Ex: {example}</p>
      )}
    </div>
  </div>
);

const IntroConcepts = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a15]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-dark)] dark:text-white uppercase mb-4">
            Core Concepts
          </h2>
          <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ConceptCard
            icon={<Compass size={20} />}
            title="Life Path Number"
            desc="Calculated from your birth date. Represents your life purpose, innate abilities, and challenges."
            formula="Sum all digits of birth date until single digit (or master number 11, 22, 33)."
            example="15-07-1990 -> 1+5+0+7+1+9+9+0 = 32 -> 3+2 = 5"
          />
          <ConceptCard
            icon={<Binary size={20} />}
            title="Expression Number"
            desc="Derived from full birth name. Reflects talents, strengths, and life goals."
            formula="Each letter maps (A=1, B=2...). Sum result and reduce."
          />
          <ConceptCard
            icon={<Star size={20} />}
            title="Soul Urge Number"
            desc="Focuses on your inner self, desires, and heart's secret motivations."
            formula="Calculated using only the vowels in your full name."
          />
          <ConceptCard
            icon={<Settings size={20} />}
            title="Personality Number"
            desc="Shows the external side of you—the version the world sees."
            formula="Calculated using the consonants in your full name."
          />
          <ConceptCard
            icon={<Layout size={20} />}
            title="Birthday Number"
            desc="Simply the day you were born. Reveals special talents."
            formula="The specific day digit of your birth date."
          />
          <ConceptCard
            icon={<Hash size={20} />}
            title="Personal Year"
            desc="Predicts life cycles, themes, and upcoming yearly opportunities."
            formula="Birth date + current year sum reduced."
          />
        </div>
      </div>
    </section>
  );
};

export default IntroConcepts;
