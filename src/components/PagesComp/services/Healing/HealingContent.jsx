import React from "react";

const HealingContent = () => {
  return (
    <div data-aos="fade-right">
      <h1 className="text-4xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase mb-8 leading-none">
        Frequency <br /> <span className="text-[#2262b2]">Healing</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
        Restore balance to your energetic body. Our healing services target
        vibrational blockages that may be slowing your progress in life, health,
        or relationships.
      </p>
      <div className="space-y-4">
        {[
          "Aura Cleansing",
          "Vibrational Alignment",
          "Chakra Harmony",
          "Energy Restoration",
        ].map((s, i) => (
          <div
            key={i}
            className="flex items-center space-x-4 p-4 border border-gray-100 dark:border-white/5 rounded-xl"
          >
            <span className="text-[#2262b2] text-xl">✦</span>
            <span className="font-bold text-gray-700 dark:text-gray-200 uppercase text-xs tracking-widest">
              {s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealingContent;
