import React from "react";
import { Key } from "lucide-react";

const PropertyVisual = () => {
  return (
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
  );
};

export default PropertyVisual;
