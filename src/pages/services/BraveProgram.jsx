import React from "react";
import MainLayout from "../../components/layout/MainLayout";

const BraveProgram = () => {
  return (
    <MainLayout title="BRAVE Success Program">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="bg-[#0a0a0a] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center"
          data-aos="zoom-in"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#2262b2] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <h4 className="text-[#2262b2] font-black uppercase tracking-[0.4em] mb-6">
            Exclusive Program
          </h4>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase mb-8 tracking-tighter">
            B.R.A.V.E.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
            A high-performance success framework designed for entrepreneurs and
            visionaries who want to scale their impact using celestial data.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Bespoke", "Resonant", "Aligned", "Vibrant", "Evolved"].map(
              (word, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="p-6 border border-white/10 bg-white/5 text-white font-black uppercase text-xs tracking-widest"
                >
                  {word}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BraveProgram;
