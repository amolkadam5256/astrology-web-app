import React from "react";
import { Sparkles, Baby, Heart, Check } from "lucide-react";

const FeatureBlock = ({ icon, title, desc, point }) => (
  <div className="p-8 sm:p-10 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl group hover:border-[var(--color-primary)] transition-all">
    <div className="mb-6 group-hover:scale-110 transition-transform origin-left">
      {icon}
    </div>
    <h3 className="text-sm font-black uppercase tracking-widest text-[var(--color-dark)] dark:text-white mb-4">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium mb-6">
      {desc}
    </p>
    <div className="flex items-center space-x-2 text-[10px] font-black text-[var(--color-primary)] uppercase tracking-tighter">
      <Check size={12} />
      <span>{point}</span>
    </div>
  </div>
);

const BabyNameHero = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a15]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-down">
          <div className="inline-flex items-center space-x-2 text-[var(--color-secondary)] mb-4">
            <Sparkles size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">
              The Ultimate Gift
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[var(--color-dark)] dark:text-white uppercase tracking-tighter mb-6">
            Baby Name <span className="text-[var(--color-primary)]">Numerology</span>
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
            A name is the first vibration a soul receives in this life. We help
            you choose a name that perfectly echoes your child's Life Path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <FeatureBlock
            icon={<Baby className="text-[var(--color-primary)]" />}
            title="Destiny Alignment"
            desc="We calculate your child's birth date numbers to find a name that supports their natural purpose and future challenges."
            point="Life Path Synergy"
          />
          <FeatureBlock
            icon={<Heart className="text-[var(--color-secondary)]" />}
            title="Emotional Balance"
            desc="Certain sound frequencies promote calm and confidence. We filter names that evoke positive psychological traits."
            point="Vibrational Harmony"
          />
        </div>
      </div>
    </section>
  );
};

export default BabyNameHero;
