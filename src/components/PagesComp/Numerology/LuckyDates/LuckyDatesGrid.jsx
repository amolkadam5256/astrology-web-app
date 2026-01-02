import React from "react";
import { Star, Calendar, Clock } from "lucide-react";

const LuckyDatesGrid = () => {
  const cards = [
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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {cards.map((card, i) => (
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
  );
};

export default LuckyDatesGrid;
