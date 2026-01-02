import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Home, Car, Shield, Key, Sparkles } from "lucide-react";

/**
 * Vehicle & Property Numerology Page
 * Focused on Vastu alignment, asset safety, and success frequencies.
 */
const Property = () => {
  return (
    <MainLayout title="Vehicle & Property Numerology - Wealth & Safety">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center space-x-2 text-[#2262b2] mb-6">
              <Sparkles size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">
                Asset Synchronization
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase mb-8 tracking-tighter leading-tight">
              Property <span className="text-[#2262b2]">Alignment</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed mb-10">
              Whether it's your sanctuary at home, a strategic office space, or
              your vehicle of motion, the primary numbers attached to these
              assets vibrate daily. We ensure these frequencies are in
              Vastu-harmonized synergy with your personal chart.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AssetCard
                icon={<Home size={18} />}
                title="Flat & Villa"
                desc="Ensure your door number doesn't attract stagnation or debt."
              />
              <AssetCard
                icon={<Car size={18} />}
                title="Vehicle Plates"
                desc="Identify lucky plate numbers to promote safety and status."
              />
              <AssetCard
                icon={<Shield size={18} />}
                title="Asset Safety"
                desc="Vibrational checks for investment properties and land."
              />
              <AssetCard
                icon={<Key size={18} />}
                title="Bank & Vault"
                desc="Optimize locker numbers for financial security."
              />
            </div>
          </div>

          <div className="relative group" data-aos="fade-left">
            <div className="aspect-video sm:aspect-square bg-[#0a0a0a] rounded-[50px] flex items-center justify-center p-12 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-radial-[circle_at_20%_20%] from-[#2262b2]/20 to-transparent"></div>
              <div className="relative z-10 text-center space-y-6">
                <div className="inline-block p-6 border-2 border-white/10 rounded-full animate-pulse group-hover:border-[#ff7e33]/50 transition-colors">
                  <Key size={40} className="text-white opacity-80" />
                </div>
                <h4 className="text-white text-xl sm:text-2xl font-black uppercase tracking-tighter">
                  Unlock <br /> Lucky Aura
                </h4>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-black pt-4">
                  Vastu + Numerology
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#ff7e33] rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

const AssetCard = ({ icon, title, desc }) => (
  <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl group hover:border-[#2262b2] transition-all">
    <div className="text-[#2262b2] mb-4 group-hover:scale-110 transition-transform origin-left">
      {icon}
    </div>
    <h3 className="text-xs sm:text-sm font-black text-[#0a0a0a] dark:text-white uppercase mb-2">
      {title}
    </h3>
    <p className="text-[11px] text-gray-400 font-medium leading-normal">
      {desc}
    </p>
  </div>
);

export default Property;
