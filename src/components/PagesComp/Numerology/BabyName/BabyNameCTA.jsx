import React from "react";
import { ShieldCheck } from "lucide-react";

const BabyNameCTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a15] text-center">
      <div className="max-w-lg mx-auto px-4">
        <div className="p-8 border-2 border-dashed border-[var(--color-primary)]/20 rounded-[40px] hover:border-[var(--color-primary)]/50 transition-colors">
          <ShieldCheck size={32} className="text-[var(--color-primary)] mx-auto mb-6" />
          <h3 className="text-lg font-black text-[var(--color-dark)] dark:text-white uppercase mb-4">
            Secure Their Future
          </h3>
          <p className="text-xs text-gray-400 mb-8 leading-relaxed">
            Let us provide a comprehensive report on 10 curated names for your
            newborn based on their unique celestial blueprint.
          </p>
          <button className="px-10 py-4 bg-[var(--color-primary)] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-black transition-colors">
            Check Baby Names
          </button>
        </div>
      </div>
    </section>
  );
};

export default BabyNameCTA;
