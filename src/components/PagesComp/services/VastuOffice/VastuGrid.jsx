import React from "react";

const VastuGrid = () => {
  const cards = [
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
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cards.map((card, i) => (
        <div
          key={i}
          data-aos={card.side}
          data-aos-delay={i * 200}
          className="p-12 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2rem] group hover:bg-[var(--color-primary)] transition-all"
        >
          <h3 className="text-2xl font-black text-[var(--color-dark)] dark:text-white mb-4 group-hover:text-white uppercase">
            {card.title}
          </h3>
          <p className="font-medium text-gray-500 dark:text-gray-400 group-hover:text-white/80 leading-relaxed">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default VastuGrid;
