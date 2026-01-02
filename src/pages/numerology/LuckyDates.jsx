import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Calendar, Star, Clock, Sparkles } from "lucide-react";

/**
 * Lucky Numbers & Dates Page
 * Focused on timing, personal years, and daily vibrations.
 */
const LuckyDates = () => {
  return (
    <MainLayout title="Lucky Numbers & Dates - Dynamic Timing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16" data-aos="zoom-out">
          <div className="inline-flex items-center space-x-2 text-[#ff7e33] mb-4">
            <Sparkles size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">
              Optimized Timing
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase mb-6 tracking-tighter leading-tight">
            Lucky <span className="text-[#2262b2]">Vibrations</span>
          </h1>
          <p className="text-gray-500 font-medium text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Identify the specific windows of opportunity when the universe is
            aligned with your personal energy. From daily choices to major life
            cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Power Numbers",
              icon: <Star className="text-[#2262b2]" />,
              desc: "Identify your core power digits for pins, accounts, and identifiers that trigger success.",
              detail: "Derived from Life Path & Soul Urge.",
            },
            {
              title: "Monthly Peak Days",
              icon: <Calendar className="text-[#ff7e33]" />,
              desc: "Discover the 3 to 5 days each month when your frequency resonates perfectly with the lunar cycle.",
              detail: "Avoid 'dead days' for major signings.",
            },
            {
              title: "The Golden Hour",
              icon: <Clock className="text-[#2262b2]" />,
              desc: "Hourly breakdown to choose the exact minute for critical conversations or business launches.",
              detail: "Hyper-personalized timing.",
            },
          ].map((card, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="p-8 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl group hover:border-[#2262b2] transition-all"
            >
              <div className="w-12 h-12 bg-gray-50 dark:bg-black/40 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-sm font-black text-[#0a0a0a] dark:text-white uppercase mb-4 tracking-widest">
                {card.title}
              </h3>
              <p className="text-[11px] sm:text-[12px] text-gray-500 font-medium leading-relaxed mb-6">
                {card.desc}
              </p>
              <div className="pt-4 border-t border-gray-100 dark:border-white/5 text-[9px] font-black uppercase text-[#2262b2]">
                {card.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default LuckyDates;
