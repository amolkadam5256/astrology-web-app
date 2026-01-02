import React from "react";
import { ShieldCheck, PenTool } from "lucide-react";

const InfoBox = ({ icon, title, desc }) => (
  <div className="p-8 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl">
    <div className="mb-4">{icon}</div>
    <h4 className="text-sm font-black uppercase text-[#0a0a0a] dark:text-white mb-2">
      {title}
    </h4>
    <p className="text-xs text-gray-500 leading-relaxed font-medium">{desc}</p>
  </div>
);

const NameCorrectionScience = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-black text-center text-[#0a0a0a] dark:text-white uppercase mb-16">
          The Science of Sound Vibration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <InfoBox
            icon={<ShieldCheck className="text-[#2262b2]" />}
            title="Spelling Matters"
            desc="Different spellings evoke different cosmic responses. We ensure your 'Expression Number' matches your 'Life Path' for maximum harmony."
          />
          <InfoBox
            icon={<PenTool className="text-[#ff7e33]" />}
            title="Signature Alignment"
            desc="A corrected name is only half the battle. We also provide guidance on how your signature should vibrate to manifest results."
          />
        </div>
      </div>
    </section>
  );
};

export default NameCorrectionScience;
