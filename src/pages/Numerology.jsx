import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { Sparkles, Binary, PenTool, TrendingUp } from "lucide-react";
import { images } from "../assets/images/images";

const NumerologyMain = () => {
  const sections = [
    {
      icon: Binary,
      title: "Core Analysis",
      desc: "Based on your Date of Birth, we reveal your Life Path, Destiny, and Soul Urge numbers.",
    },
    {
      icon: PenTool,
      title: "Name Correction",
      desc: "Identify how your name's spelling influences your success and harmonize its energy.",
    },
    {
      icon: Sparkles,
      title: "Lucky Elements",
      desc: "Find your most powerful numbers and dates for critical decisions and life events.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      desc: "Align your brand name and launch dates with high-frequency success vibrations.",
    },
  ];

  return (
    <MainLayout
      title="Numerology Services"
      description="Detailed numerology analysis, name correction, and life path insights by expert numerologists."
    >
      <div className="relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
          <img
            src={images.services.decoding}
            alt="Decoding background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div
            className="text-center max-w-3xl mx-auto mb-20 space-y-6"
            data-aos="fade-up"
          >
            <h2 className="text-[12px] uppercase tracking-[0.5em] font-black text-[#2262b2]">
              Science of Numbers
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase tracking-tighter leading-none">
              Your Life, Decoded by <br />{" "}
              <span className="text-[#2262b2]">Celestial Mathematics</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Numerology is not random—it is a 메시지 messages from the
              universe. Every number carries a vibration that shapes your
              personality, destiny, and the timing of your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group p-8 border border-gray-100 dark:border-white/5 hover:border-[#2262b2] dark:hover:border-[#2262b2] transition-all bg-gray-50/50 dark:bg-[#0a0a0a] relative overflow-hidden"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[#2262b2] mb-8 group-hover:bg-[#2262b2] group-hover:text-white transition-all">
                  <section.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-[#0a0a0a] dark:text-white uppercase tracking-tight mb-4">
                  {section.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {section.desc}
                </p>
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 dark:text-white text-black transition-opacity">
                  <section.icon className="w-20 h-20 -mr-8 -mt-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NumerologyMain;
