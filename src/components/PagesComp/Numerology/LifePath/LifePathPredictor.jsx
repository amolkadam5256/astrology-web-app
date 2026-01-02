import React from "react";

const LifePathPredictor = () => {
  return (
    <section className="py-20 bg-[#2262b2] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl font-black uppercase mb-6" data-aos="fade-up">
          Predicting Your Personal Year
        </h2>
        <p
          className="text-sm sm:text-base opacity-80 mb-8 leading-relaxed font-medium"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Numerology predicts cycles. By adding your Birth Month + Birth Day +
          Current Year, you reveal the theme of your current phase.
        </p>
        <div
          className="inline-block p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20"
          data-aos="zoom-in"
        >
          <p className="text-[10px] font-black uppercase tracking-widest mb-1">
            The Formula
          </p>
          <p className="text-xs sm:text-sm font-mono">
            Birth Month + Birth Day + 2024 = Personal Year
          </p>
        </div>
      </div>
    </section>
  );
};

export default LifePathPredictor;
