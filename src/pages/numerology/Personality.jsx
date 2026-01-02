import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { User, Heart, Sparkles, Star, Users, Brain } from "lucide-react";

/**
 * Personality Traits Page
 * Updated with Heart's Desire, Outer Personality, and Core Meanings.
 */
const Personality = () => {
  const numberTraits = [
    { num: "1", trait: "Independence & Ambition", keyword: "Leadership" },
    { num: "2", trait: "Diplomacy & Sensitivity", keyword: "Cooperation" },
    { num: "3", trait: "Joy & Communication", keyword: "Creativity" },
    { num: "4", trait: "Discipline & Hard Work", keyword: "Stability" },
    { num: "5", trait: "Adventure & Adaptability", keyword: "Freedom" },
    { num: "6", trait: "Harmony & Nurturing", keyword: "Responsibility" },
    { num: "7", trait: "Analysis & Introspection", keyword: "Spirituality" },
    { num: "8", trait: "Business & Success", keyword: "Power" },
    { num: "9", trait: "Humanitarianism & Completion", keyword: "Compassion" },
  ];

  return (
    <MainLayout title="Personality Traits - Numerology Blueprint">
      {/* --- Section 1: Hero Analysis --- */}
      <section className="py-20 bg-white dark:bg-[#050a15]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2" data-aos="zoom-in">
              <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-[#ff7e33]/10 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 border border-dashed border-[#2262b2]/30 rounded-full"></div>
                <div className="relative text-center p-8">
                  <User size={48} className="text-[#2262b2] mx-auto mb-4" />
                  <h2 className="text-xl font-black uppercase text-[#0a0a0a] dark:text-white">
                    The Mirror
                  </h2>
                  <p className="text-xs text-gray-400 mt-2 font-medium italic">
                    "How the cosmos reflects your inner self."
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <h1 className="text-3xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase mb-8 leading-tight">
                Personality <span className="text-[#2262b2]">Traits</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                Your personality is a complex vibration of vowels and
                consonants. Your name isn't just a label—it is a character
                blueprint that reveals your motivations, desires, and the side
                the world sees.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <TraitMiniCard
                  icon={<Heart size={16} />}
                  title="Soul Urge"
                  desc="Calculated using vowels. Reveals your inner motivations and secret desires."
                />
                <TraitMiniCard
                  icon={<Sparkles size={16} />}
                  title="Personality Num"
                  desc="Calculated via consonants. Shows the side of you that others perceive."
                />
                <TraitMiniCard
                  icon={<Star size={16} />}
                  title="Birthday Number"
                  desc="The day you were born. Pinpoints your special talents and innate characteristics."
                />
                <TraitMiniCard
                  icon={<Brain size={16} />}
                  title="Mental Plane"
                  desc="Derived from your birth name. How you process thoughts and interactions."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Number Meanings Grid --- */}
      <section className="py-24 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black uppercase text-[#0a0a0a] dark:text-white mb-4">
              The Vibration of Numbers
            </h2>
            <div className="w-20 h-1 bg-[#ff7e33] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {numberTraits.map((item, i) => (
              <div
                key={i}
                className="group p-6 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl text-center hover:border-[#2262b2] transition-all"
              >
                <div className="text-2xl font-black text-[#2262b2] mb-2 group-hover:scale-125 transition-transform">
                  {item.num}
                </div>
                <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[#ff7e33] mb-3">
                  {item.keyword}
                </p>
                <p className="text-[12px] text-gray-400 font-medium leading-tight">
                  {item.trait}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 3: Connection Section --- */}
      <section className="py-20 bg-white dark:bg-[#050a15] border-t border-gray-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 text-[#2262b2] mb-6">
            <Users size={20} />
            <span className="font-black uppercase tracking-widest text-xs">
              Self-Discovery
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#0a0a0a] dark:text-white uppercase mb-6 italic">
            "Understanding your numbers is the first step to mastering your
            interactions."
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
            By combining your Personality Number with your Heart's Desire, you
            align your external actions with your internal soul path. This
            creates harmony in relationships, business, and daily life.
          </p>
          <button className="px-8 py-3 bg-[#2262b2] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#ff7e33] transition-colors shadow-lg shadow-blue-500/20">
            Unlock Your Traits Today
          </button>
        </div>
      </section>
    </MainLayout>
  );
};

const TraitMiniCard = ({ icon, title, desc }) => (
  <div className="p-4 bg-white dark:bg-black/20 border border-gray-100 dark:border-white/5 rounded-xl hover:bg-gray-50 dark:hover:bg-black/40 transition-colors group">
    <div className="flex items-center space-x-3 mb-2">
      <div className="text-[#ff7e33] group-hover:rotate-12 transition-transform">
        {icon}
      </div>
      <h5 className="text-[11px] font-black uppercase tracking-widest text-[#0a0a0a] dark:text-white">
        {title}
      </h5>
    </div>
    <p className="text-[11px] text-gray-400 leading-normal font-medium">
      {desc}
    </p>
  </div>
);

export default Personality;
