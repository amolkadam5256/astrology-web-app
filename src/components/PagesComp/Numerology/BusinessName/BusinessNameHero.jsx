import React from "react";
import { TrendingUp, Briefcase } from "lucide-react";

const FeatureItem = ({ title, desc }) => (
  <div className="p-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-xl">
    <h4 className="text-[11px] font-black uppercase text-[#2262b2] mb-1">
      {title}
    </h4>
    <p className="text-[10px] text-gray-500 font-medium leading-tight">
      {desc}
    </p>
  </div>
);

const BusinessNameHero = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="flex items-center space-x-2 text-[#2262b2] mb-6">
              <TrendingUp size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                Accelerate Your Growth
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase mb-8 leading-tight">
              Business <span className="text-[#2262b2]">Numerology</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-medium">
              In the marketplace, vibration is synonymous with resonance. A
              brand name that resonates at a frequency of success (like Number 1
              or 5) can attract global recognition, while a dissonant name can
              lead to internal friction and stagnation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureItem
                title="Brand Audit"
                desc="Reveal the current frequency of your company name."
              />
              <FeatureItem
                title="Product Launch"
                desc="Select the best dates and names for new products."
              />
              <FeatureItem
                title="Partner Sync"
                desc="Ensure directors' frequencies align with the company's path."
              />
              <FeatureItem
                title="Global Scale"
                desc="Check if your brand vibrates well for international markets."
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2" data-aos="zoom-in">
            <div className="relative p-12 bg-gray-900 border border-white/5 rounded-[50px] overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2262b2] rounded-full blur-[120px] opacity-10"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex justify-between items-center text-white/40 text-[10px] uppercase font-black tracking-widest">
                  <span>Analysis Node</span>
                  <span>Active</span>
                </div>
                <div className="flex items-center justify-center h-48 sm:h-64 border-2 border-dashed border-white/10 rounded-3xl group">
                  <Briefcase
                    size={80}
                    className="text-[#2262b2] group-hover:scale-110 transition-transform opacity-40"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-1 bg-white/10 rounded-full">
                      <div className="h-full bg-[#ff7e33] w-2/3"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessNameHero;
