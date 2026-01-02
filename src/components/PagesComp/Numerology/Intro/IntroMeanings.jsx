import React from "react";

const IntroMeanings = () => {
  const coreNumbers = [
    { num: "1", trait: "Leadership, independence, ambition" },
    { num: "2", trait: "Cooperation, diplomacy, sensitivity" },
    { num: "3", trait: "Creativity, communication, joy" },
    { num: "4", trait: "Stability, discipline, hard work" },
    { num: "5", trait: "Freedom, adventure, adaptability" },
    { num: "6", trait: "Responsibility, harmony, nurturing" },
    { num: "7", trait: "Spirituality, analysis, introspection" },
    { num: "8", trait: "Power, business, material success" },
    { num: "9", trait: "Compassion, humanitarianism, completion" },
    {
      num: "11",
      trait: "Intuition, inspiration, spiritual insight (Master number)",
    },
    {
      num: "22",
      trait: "Master builder, vision, practical idealism (Master number)",
    },
    {
      num: "33",
      trait: "Master teacher, compassion, guidance (Master number)",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-[var(--color-dark)]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-[var(--color-dark)] dark:text-white uppercase mb-4">
            Number Meanings
          </h2>
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            Traits & Vibrations
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-white/5 shadow-lg bg-white dark:bg-[#0d1117]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--color-primary)] text-white uppercase text-[10px] font-black tracking-widest">
                <th className="px-6 py-4">Number</th>
                <th className="px-6 py-4">Meaning / Traits</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm">
              {coreNumbers.map((item, i) => (
                <tr
                  key={i}
                  className="border-b last:border-0 border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-3 font-black text-[var(--color-primary)]">
                    {item.num}
                  </td>
                  <td className="px-6 py-3 text-gray-600 dark:text-gray-400 font-medium">
                    {item.trait}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default IntroMeanings;
