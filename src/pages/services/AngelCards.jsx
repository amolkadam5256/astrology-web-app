import React from "react";
import MainLayout from "../../components/layout/MainLayout";

const AngelCards = () => {
  return (
    <MainLayout title="Angel Card Reading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto" data-aos="zoom-in">
          <h1 className="text-5xl md:text-7xl font-black text-[#0a0a0a] dark:text-white uppercase mb-8 tracking-tighter">
            Divine <span className="text-[#2262b2]">Guidance</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            Angel card readings offer spiritual messages to provide comfort,
            clarity, and direction in your life. Connecting with your guardian
            angels helps resolve inner conflicts and find peace.
          </p>
          <div className="flex justify-center gap-12">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                data-aos="flip-left"
                data-aos-delay={i * 200}
                className="w-40 h-64 bg-[#2262b2]/5 border-2 border-[#2262b2]/20 rounded-xl flex items-center justify-center group hover:bg-[#2262b2] transition-all cursor-pointer"
              >
                <span className="text-4xl group-hover:scale-150 transition-transform">
                  🔱
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AngelCards;
