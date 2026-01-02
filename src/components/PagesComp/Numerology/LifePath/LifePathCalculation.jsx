import React from "react";
import { Calculator } from "lucide-react";

const CalcStep = ({ title, formula, example }) => (
  <div className="space-y-2 border-l-2 border-[var(--color-primary)]/20 pl-6 py-2 hover:border-[var(--color-primary)] transition-colors">
    <h4 className="text-sm font-black uppercase tracking-widest text-[var(--color-dark)] dark:text-white">
      {title}
    </h4>
    <p className="text-xs text-gray-400 font-medium">{formula}</p>
    <p className="text-[11px] text-[var(--color-secondary)] font-mono italic">Ex: {example}</p>
  </div>
);

const LifePathCalculation = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[var(--color-dark)]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-xl font-black text-[var(--color-dark)] dark:text-white uppercase mb-8 flex items-center gap-3">
              <Calculator className="text-[var(--color-secondary)]" size={24} />
              How to Calculate
            </h2>
            <div className="space-y-6">
              <CalcStep
                title="1. Life Path Number"
                formula="Add all digits of your birth date until you get a single digit (1–9) or a Master number (11, 22, 33)."
                example="15-07-1990 -> (1+5) + (0+7) + (1+9+9+0) = 6 + 7 + 19 (1+9=1) -> 6+7+1 = 14 (1+4) = 5"
              />
              <CalcStep
                title="2. Expression / Destiny Number"
                formula="Each letter maps (A=1, B=2... I=9). Sum all numbers in your full birth name and reduce."
                example="Sum(Full Name Letters) -> Reduce to Single/Master Digit."
              />
            </div>
          </div>
          <div
            className="p-8 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl"
            data-aos="fade-left"
          >
            <h3 className="text-sm font-black uppercase text-[var(--color-primary)] mb-4">
              Why these numbers matter?
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              <p>
                The <strong>Life Path Number</strong> represents your life
                purpose, challenges, and innate abilities. It is the most
                important number in your chart.
              </p>
              <p>
                The <strong>Expression Number</strong> reflects your talents,
                strengths, and life goals. It shows what you are destined to
                achieve with the tools you were given.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifePathCalculation;
