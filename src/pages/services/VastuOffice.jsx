import React from "react";
import MainLayout from "../../components/layout/MainLayout";

const VastuOffice = () => {
  return (
    <MainLayout title="Vastu For Office">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase mb-6 tracking-tighter">
            Vastu For{" "}
            <span className="text-[#2262b2]">Corporate Prosperity</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Optimize your workspace energy to attract wealth, foster leadership,
            and maintain a high-performing team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Entrance Optimization",
              desc: "Attract the right clients and opportunities from the first step.",
              side: "fade-up",
            },
            {
              title: "Placement Strategy",
              desc: "Scientific seat and desk placements for maximum productivity.",
              side: "fade-up",
            },
            {
              title: "Wealth Corridors",
              desc: "Clearing energetic pathways to ensure smooth financial flow.",
              side: "fade-up",
            },
            {
              title: "Leadership Zones",
              desc: "Aligning the CEO's cabin with the most powerful directional forces.",
              side: "fade-up",
            },
          ].map((card, i) => (
            <div
              key={i}
              data-aos={card.side}
              data-aos-delay={i * 200}
              className="p-12 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2rem] group hover:bg-[#2262b2] transition-all"
            >
              <h3 className="text-2xl font-black text-[#0a0a0a] dark:text-white mb-4 group-hover:text-white uppercase">
                {card.title}
              </h3>
              <p className="font-medium text-gray-500 dark:text-gray-400 group-hover:text-white/80 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default VastuOffice;
