import React from "react";
import { Search, Globe, Target } from "lucide-react";

const PillarCard = ({ icon, title, desc }) => (
  <div className="p-10 bg-white dark:bg-[#0d1117] rounded-3xl border border-gray-100 dark:border-white/5 hover:border-[#2262b2]/50 transition-all text-center group">
    <div className="w-14 h-14 bg-gray-50 dark:bg-black/40 text-[#2262b2] rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-[#2262b2] group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-sm font-black uppercase text-[#0a0a0a] dark:text-white mb-4 tracking-widest">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
      {desc}
    </p>
  </div>
);

const BusinessNamePillars = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-black text-[#0a0a0a] dark:text-white uppercase mb-4">
            The DNA of Success
          </h2>
          <div className="w-16 h-1 bg-[#ff7e33] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PillarCard
            icon={<Search size={22} />}
            title="Vibrational Audit"
            desc="We analyze your existing brand name's consonants and vowels to check for commercial leaks."
          />
          <PillarCard
            icon={<Globe size={22} />}
            title="Naming New Ventures"
            desc="Starting from scratch? We provide a list of powerful, lucky names aligned with the founder's date of birth."
          />
          <PillarCard
            icon={<Target size={22} />}
            title="Market Timing"
            desc="Ensure your company formation or product launch happens during a 'Personal Year' of expansion."
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessNamePillars;
