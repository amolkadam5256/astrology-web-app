import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Sparkles, Heart, Baby, Check, ShieldCheck } from "lucide-react";

/**
 * Baby Name Numerology Page
 * Focused on the "Gift of Frequency" and a smooth start in life.
 */
const BabyName = () => {
  return (
    <MainLayout title="Baby Name Numerology - Gift a Powerful Vibration">
      {/* --- Intro Section --- */}
      <section className="py-20 bg-white dark:bg-[#050a15]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-down">
            <div className="inline-flex items-center space-x-2 text-[#ff7e33] mb-4">
              <Sparkles size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                The Ultimate Gift
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase tracking-tighter mb-6">
              Baby Name <span className="text-[#2262b2]">Numerology</span>
            </h1>
            <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
              A name is the first vibration a soul receives in this life. We
              help you choose a name that perfectly echoes your child's Life
              Path.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <FeatureBlock
              icon={<Baby className="text-[#2262b2]" />}
              title="Destiny Alignment"
              desc="We calculate your child's birth date numbers to find a name that supports their natural purpose and future challenges."
              point="Life Path Synergy"
            />
            <FeatureBlock
              icon={<Heart className="text-[#ff7e33]" />}
              title="Emotional Balance"
              desc="Certain sound frequencies promote calm and confidence. We filter names that evoke positive psychological traits."
              point="Vibrational Harmony"
            />
          </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a0a0a] border-y border-gray-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-black text-center text-[#0a0a0a] dark:text-white uppercase mb-12 tracking-widest">
            Our Selection Pillars
          </h2>
          <div className="space-y-4">
            <PillarItem
              title="Alphabetical Frequency"
              desc="Different letters carry different numeric weights. We avoid 'heavy' or dissonant combinations."
            />
            <PillarItem
              title="Nickname Impact"
              desc="The world calls your child by many names. We check common nicknames for vibrational safety."
            />
            <PillarItem
              title="Heritage & Meaning"
              desc="We combine numerical luck with your family heritage and the profound literal meaning of the name."
            />
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-white dark:bg-[#050a15] text-center">
        <div className="max-w-lg mx-auto px-4">
          <div className="p-8 border-2 border-dashed border-[#2262b2]/20 rounded-[40px] hover:border-[#2262b2]/50 transition-colors">
            <ShieldCheck size={32} className="text-[#2262b2] mx-auto mb-6" />
            <h3 className="text-lg font-black text-[#0a0a0a] dark:text-white uppercase mb-4">
              Secure Their Future
            </h3>
            <p className="text-xs text-gray-400 mb-8 leading-relaxed">
              Let us provide a comprehensive report on 10 curated names for your
              newborn based on their unique celestial blueprint.
            </p>
            <button className="px-10 py-4 bg-[#2262b2] text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-black transition-colors">
              Check Baby Names
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const FeatureBlock = ({ icon, title, desc, point }) => (
  <div className="p-8 sm:p-10 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl group hover:border-[#2262b2] transition-all">
    <div className="mb-6 group-hover:scale-110 transition-transform origin-left">
      {icon}
    </div>
    <h3 className="text-sm font-black uppercase tracking-widest text-[#0a0a0a] dark:text-white mb-4">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium mb-6">
      {desc}
    </p>
    <div className="flex items-center space-x-2 text-[10px] font-black text-[#2262b2] uppercase tracking-tighter">
      <Check size={12} />
      <span>{point}</span>
    </div>
  </div>
);

const PillarItem = ({ title, desc }) => (
  <div className="p-6 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div>
      <h4 className="text-xs sm:text-sm font-black text-[#0a0a0a] dark:text-white uppercase mb-1">
        {title}
      </h4>
      <p className="text-[11px] sm:text-[12px] text-gray-500 font-medium">
        {desc}
      </p>
    </div>
    <Check size={16} className="text-[#ff7e33] shrink-0" />
  </div>
);

export default BabyName;
