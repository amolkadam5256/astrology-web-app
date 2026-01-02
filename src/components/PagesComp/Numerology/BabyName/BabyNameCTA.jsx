import React from "react";
import { ShieldCheck } from "lucide-react";

const BabyNameCTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a15] text-center">
      <div className="max-w-lg mx-auto px-4">
        <div className="p-8 border-2 border-dashed border-[#2262b2]/20 rounded-[40px] hover:border-[#2262b2]/50 transition-colors">
          <ShieldCheck size={32} className="text-[#2262b2] mx-auto mb-6" />
          <h3 className="text-lg font-black text-[#0a0a0a] dark:text-white uppercase mb-4">
            Secure Their Future
          </h3>
          <p className="text-xs text-gray-400 mb-8 leading-relaxed">
            Let us provide a comprehensive report on 10 curated names for your
            newborn based on their unique celestial blueprint.
          </p>
          <button className="px-10 py-4 bg-[#2262b2] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-black transition-colors">
            Check Baby Names
          </button>
        </div>
      </div>
    </section>
  );
};

export default BabyNameCTA;
