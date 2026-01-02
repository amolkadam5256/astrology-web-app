import React from "react";
import { Footprints, Target, Heart, Compass } from "lucide-react";

const DestinyCard = ({ icon, title, subtitle, desc }) => (
  <div className="p-8 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 hover:shadow-xl transition-all group active:scale-95">
    <div className="text-[#2262b2] mb-6 group-hover:scale-110 transition-transform origin-left">
      {icon}
    </div>
    <p className="text-[10px] uppercase font-black tracking-widest text-[#ff7e33] mb-1">
      {subtitle}
    </p>
    <h3 className="text-lg font-black text-[#0a0a0a] dark:text-white uppercase mb-4">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
      {desc}
    </p>
  </div>
);

const LifePathDestinyCards = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a15]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DestinyCard
            icon={<Footprints size={20} />}
            title="Life Path"
            subtitle="Your Journey"
            desc="Reveals the 'road' you are traveling. It defines the opportunities and challenges you will encounter."
          />
          <DestinyCard
            icon={<Target size={20} />}
            title="Expression"
            subtitle="Your Talent"
            desc="Highlights your natural capabilities and the unique traits you bring into the physical world."
          />
          <DestinyCard
            icon={<Heart size={20} />}
            title="Soul Urge"
            subtitle="Your Desires"
            desc="Focuses on your inner self, secret desires, and the 'why' behind your motivations."
          />
          <DestinyCard
            icon={<Compass size={20} />}
            title="Destiny"
            subtitle="Your Purpose"
            desc="Combines your name and path to reveal the ultimate goal of your current incarnation."
          />
        </div>
      </div>
    </section>
  );
};

export default LifePathDestinyCards;
