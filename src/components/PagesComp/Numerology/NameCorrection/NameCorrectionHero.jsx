import React from "react";
import { Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const BenefitItem = ({ text }) => (
  <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-bold group">
    <CheckCircle2
      size={16}
      className="text-[#2262b2] group-hover:scale-125 transition-transform"
    />
    <span>{text}</span>
  </div>
);

const ProcessBar = ({ label, progress }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center text-[10px] font-black uppercase text-white/60">
      <span>{label}</span>
      <span>{progress}</span>
    </div>
    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full bg-linear-to-r from-[#2262b2] to-[#ff7e33]"
        style={{ width: progress }}
      ></div>
    </div>
  </div>
);

const NameCorrectionHero = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a15]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#ff7e33]/10 text-[#ff7e33] rounded-md text-[10px] font-black uppercase tracking-widest mb-6">
              <Zap size={12} />
              <span>Precision Calibration</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase mb-8 leading-tight">
              Name <span className="text-[#2262b2]">Correction</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-medium">
              Does your name vibration harmonize with your birth date? In
              Chaldean and Vedic numerology, even a single-letter adjustment can
              realign your entire vibrational frequency, opening doors to
              prosperity that were previously locked.
            </p>

            <div className="space-y-4 mb-8">
              <BenefitItem text="Alignment with Destination & Life Path Numbers" />
              <BenefitItem text="Removal of Karmic Blockages in Spelling" />
              <BenefitItem text="Optimization for Career & Business Success" />
            </div>

            <button className="group px-8 py-4 bg-[#2262b2] text-white text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:bg-[#ff7e33] flex items-center space-x-3">
              <span>Request Your Name Audit</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          <div
            className="relative p-10 bg-[#0a0a0a] rounded-[40px] overflow-hidden group"
            data-aos="fade-left"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2262b2]/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 space-y-8">
              <h3 className="text-white text-xs font-black uppercase tracking-widest opacity-60">
                The Alignment Process
              </h3>
              <div className="space-y-6">
                <ProcessBar label="Frequency Check" progress="85%" />
                <ProcessBar label="Chaldean Mapping" progress="92%" />
                <ProcessBar label="Vedic Correction" progress="76%" />
              </div>
              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] bg-gray-800 flex items-center justify-center text-[8px] font-bold text-white uppercase"
                    >
                      ID
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-white/40 uppercase font-black">
                  5000+ Profiles Calibrated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NameCorrectionHero;
