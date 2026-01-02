import React from "react";

const PersonalityMeanings = () => {
  const numberTraits = [
    { num: "1", trait: "Independence & Ambition", keyword: "Leadership" },
    { num: "2", trait: "Diplomacy & Sensitivity", keyword: "Cooperation" },
    { num: "3", trait: "Joy & Communication", keyword: "Creativity" },
    { num: "4", trait: "Discipline & Hard Work", keyword: "Stability" },
    { num: "5", trait: "Adventure & Adaptability", keyword: "Freedom" },
    { num: "6", trait: "Harmony & Nurturing", keyword: "Responsibility" },
    { num: "7", trait: "Analysis & Introspection", keyword: "Spirituality" },
    { num: "8", trait: "Business & Success", keyword: "Power" },
    { num: "9", trait: "Humanitarianism & Completion", keyword: "Compassion" },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-[var(--color-dark)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-black uppercase text-[var(--color-dark)] dark:text-white mb-4">
            The Vibration of Numbers
          </h2>
          <div className="w-20 h-1 bg-[var(--color-secondary)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {numberTraits.map((item, i) => (
            <div
              key={i}
              className="group p-6 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl text-center hover:border-[var(--color-primary)] transition-all"
            >
              <div className="text-2xl font-black text-[var(--color-primary)] mb-2 group-hover:scale-125 transition-transform">
                {item.num}
              </div>
              <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-[var(--color-secondary)] mb-3">
                {item.keyword}
              </p>
              <p className="text-[12px] text-gray-400 font-medium leading-tight">
                {item.trait}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalityMeanings;
