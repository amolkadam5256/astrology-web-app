import React from "react";
import { Users } from "lucide-react";

const PersonalityCTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a15] border-t border-gray-100 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center space-x-2 text-[var(--color-primary)] mb-6">
          <Users size={20} />
          <span className="font-black uppercase tracking-widest text-xs">
            Self-Discovery
          </span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[var(--color-dark)] dark:text-white uppercase mb-6 italic">
          "Understanding your numbers is the first step to mastering your
          interactions."
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
          By combining your Personality Number with your Heart's Desire, you
          align your external actions with your internal soul path. This creates
          harmony in relationships, business, and daily life.
        </p>
        <button className="px-8 py-3 bg-[var(--color-primary)] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[var(--color-secondary)] transition-colors shadow-lg shadow-blue-500/20">
          Unlock Your Traits Today
        </button>
      </div>
    </section>
  );
};

export default PersonalityCTA;
