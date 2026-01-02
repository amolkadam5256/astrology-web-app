import React from "react";
import { Info } from "lucide-react";

const TipItem = ({ text }) => (
  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[var(--color-secondary)]/30 transition-colors">
    <Info className="text-[var(--color-secondary)] shrink-0" size={18} />
    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{text}</p>
  </div>
);

const IntroTips = () => {
  return (
    <section className="py-20 bg-[var(--color-dark)] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-black uppercase mb-12">
          Expert Quick Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          <TipItem text="Always reduce numbers to single digits unless it's a master number (11, 22, 33)." />
          <TipItem text="Pay attention to repeating numbers (Angel Numbers)—they carry extra significance." />
          <TipItem text="Combine numerology with astrology for deeper, more dimensional insights." />
          <TipItem text="Use numerology as guidance, not rigid rules—personal choice always matters." />
        </div>
      </div>
    </section>
  );
};

export default IntroTips;
