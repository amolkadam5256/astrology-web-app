import React from "react";
import { User, Heart, Sparkles, Star, Brain } from "lucide-react";

const TraitMiniCard = ({ icon, title, desc }) => (
  <div className="p-4 bg-white dark:bg-black/20 border border-gray-100 dark:border-white/5 rounded-xl hover:bg-gray-50 dark:hover:bg-black/40 transition-colors group">
    <div className="flex items-center space-x-3 mb-2">
      <div className="text-[var(--color-secondary)] group-hover:rotate-12 transition-transform">
        {icon}
      </div>
      <h5 className="text-[11px] font-black uppercase tracking-widest text-[var(--color-dark)] dark:text-white">
        {title}
      </h5>
    </div>
    <p className="text-[11px] text-gray-400 leading-normal font-medium">
      {desc}
    </p>
  </div>
);

const PersonalityHero = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a15]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2" data-aos="zoom-in">
            <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center">
              <div className="absolute inset-0 bg-[var(--color-secondary)]/10 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-8 border border-dashed border-[var(--color-primary)]/30 rounded-full"></div>
              <div className="relative text-center p-8">
                <User size={48} className="text-[var(--color-primary)] mx-auto mb-4" />
                <h2 className="text-xl font-black uppercase text-[var(--color-dark)] dark:text-white">
                  The Mirror
                </h2>
                <p className="text-xs text-gray-400 mt-2 font-medium italic">
                  "How the cosmos reflects your inner self."
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <h1 className="text-3xl md:text-5xl font-black text-[var(--color-dark)] dark:text-white uppercase mb-8 leading-tight">
              Personality <span className="text-[var(--color-primary)]">Traits</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
              Your personality is a complex vibration of vowels and consonants.
              Your name isn't just a label—it is a character blueprint that
              reveals your motivations, desires, and the side the world sees.
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
  );
};

export default PersonalityHero;
