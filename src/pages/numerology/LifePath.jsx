import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { Compass, Calculator, Target, Heart, Footprints } from "lucide-react";

/**
 * Life Path & Destiny Page
 * Updated with specific calculation logic and professional formatting.
 */
const LifePath = () => {
  return (
    <MainLayout title="Life Path & Destiny - Numerology Guide">
      {/* --- Intro Section --- */}
      <section className="relative py-20 bg-white dark:bg-[#050a15] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1
            className="text-3xl md:text-5xl font-black text-[#0a0a0a] dark:text-white uppercase tracking-tighter mb-6"
            data-aos="fade-up"
          >
            Life Path & <span className="text-[#2262b2]">Destiny</span>
          </h1>
          <p
            className="max-w-2xl mx-auto text-sm md:text-base text-gray-500 font-medium leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Your life is a sequence of vibrations. By decoding your birth date
            and name, we uncover the spiritual roadmap of your soul's journey.
          </p>
        </div>
      </section>

      {/* --- Calculation Guide --- */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-xl font-black text-[#0a0a0a] dark:text-white uppercase mb-8 flex items-center gap-3">
                <Calculator className="text-[#ff7e33]" size={24} />
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
              <h3 className="text-sm font-black uppercase text-[#2262b2] mb-4">
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

      {/* --- Specific Numbers Section --- */}
      <section className="py-20 bg-white dark:bg-[#050a15]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DestinyCard
              icon={<Footprints size={20} />}
              title="Life Path"
              subtitle="Your Journey"
              desc="Reveals the 'road' you are traveling. It defines the opportunities and challenges you will encounter."
            />
            <DestinyCard
              icon={<Target size={20} />}
              title="Expression"
              subtitle="Your Talent"
              desc="Highlights your natural capabilities and the unique traits you bring into the physical world."
            />
            <DestinyCard
              icon={<Heart size={20} />}
              title="Soul Urge"
              subtitle="Your Desires"
              desc="Focuses on your inner self, secret desires, and the 'why' behind your motivations."
            />
            <DestinyCard
              icon={<Compass size={20} />}
              title="Destiny"
              subtitle="Your Purpose"
              desc="Combines your name and path to reveal the ultimate goal of your current incarnation."
            />
          </div>
        </div>
      </section>

      {/* --- Predict Your Year --- */}
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
    </MainLayout>
  );
};

const CalcStep = ({ title, formula, example }) => (
  <div className="space-y-2 border-l-2 border-[#2262b2]/20 pl-6 py-2 hover:border-[#2262b2] transition-colors">
    <h4 className="text-sm font-black uppercase tracking-widest text-[#0a0a0a] dark:text-white">
      {title}
    </h4>
    <p className="text-xs text-gray-400 font-medium">{formula}</p>
    <p className="text-[11px] text-[#ff7e33] font-mono italic">Ex: {example}</p>
  </div>
);

const DestinyCard = ({ icon, title, subtitle, desc }) => (
  <div className="p-8 bg-gray-50 dark:bg-white/5 rounded-3xl border border-gray-100 dark:border-white/10 hover:shadow-xl transition-all group active:scale-95">
    <div className="text-[#2262b2] mb-6 group-hover:scale-110 transition-transform origin-left">
      {icon}
    </div>
    <p className="text-[10px] uppercase font-black tracking-widest text-[#ff7e33] mb-1">
      {subtitle}
    </p>
    <h3 className="text-lg font-black text-[#0a0a0a] dark:text-white uppercase mb-4">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
      {desc}
    </p>
  </div>
);

export default LifePath;
