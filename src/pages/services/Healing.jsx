import React from "react";
import MainLayout from "../../components/layout/MainLayout";

const Healing = () => {
  return (
    <MainLayout title="Healing Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase mb-8 leading-none">
              Frequency <br /> <span className="text-[#2262b2]">Healing</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Restore balance to your energetic body. Our healing services
              target vibrational blockages that may be slowing your progress in
              life, health, or relationships.
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
          <div className="relative" data-aos="zoom-out">
            <div className="w-full aspect-square bg-[#2262b2]/10 rounded-full flex items-center justify-center p-20">
              <div className="w-full h-full border-4 border-[#2262b2] rounded-full animate-[spin_10s_linear_infinite]"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl animate-pulse">🧘‍♀️</span>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Healing;
