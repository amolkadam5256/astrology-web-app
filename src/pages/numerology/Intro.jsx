import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import { images } from "../../assets/images/images";
import {
  Hash,
  Sparkles,
  Binary,
  Compass,
  Star,
  Settings,
  Layout,
  Info,
} from "lucide-react";

/**
 * Numerology Intro Page
 * Comprehensive guide based on the provided reference material.
 */
const Intro = () => {
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
    <MainLayout title="What is Numerology? - Jyotish Astrology">
      {/* --- Header Section --- */}
      <section className="bg-gray-50 dark:bg-[#0a0a0a] py-16 border-b border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#2262b2]/10 text-[#2262b2] rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                <Hash size={12} />
                <span>Ancient Wisdom</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-[#0a0a0a] dark:text-white uppercase leading-tight mb-6">
                What is <span className="text-[#2262b2]">Numerology?</span>
              </h1>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                <p>
                  Numerology is the study of numbers and their mystical
                  influence on human life and events. It’s based on the idea
                  that numbers are not just mathematical symbols but also carry
                  vibrational frequencies that can affect personality, destiny,
                  relationships, and life events.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <Sparkles
                      className="text-[#ff7e33] mt-1 shrink-0"
                      size={14}
                    />
                    <span>
                      Every number has a unique vibration and meaning.
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Sparkles
                      className="text-[#ff7e33] mt-1 shrink-0"
                      size={14}
                    />
                    <span>
                      Your name and birth date are considered to hold key
                      numbers influencing your life path.
                    </span>
                  </li>
                </ul>
                <p className="font-bold text-[#0a0a0a] dark:text-white italic bg-white dark:bg-white/5 p-4 border-l-4 border-[#ff7e33]">
                  "In short, numerology is like a map of your life expressed
                  through numbers."
                </p>
              </div>
            </div>
            <div className="relative" data-aos="zoom-in">
              <img
                src={images.services.numerology}
                alt="Numerology Analysis"
                className="rounded-2xl shadow-xl w-full object-cover aspect-video lg:aspect-square"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ff7e33] -z-10 rounded-xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Core Concepts --- */}
      <section className="py-20 bg-white dark:bg-[#050a15]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#0a0a0a] dark:text-white uppercase mb-4">
              Core Concepts
            </h2>
            <div className="w-16 h-1 bg-[#2262b2] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ConceptCard
              icon={<Compass size={20} />}
              title="Life Path Number"
              desc="Calculated from your birth date. Represents your life purpose, innate abilities, and challenges."
              formula="Sum all digits of birth date until single digit (or master number 11, 22, 33)."
              example="15-07-1990 -> 1+5+0+7+1+9+9+0 = 32 -> 3+2 = 5"
            />
            <ConceptCard
              icon={<Binary size={20} />}
              title="Expression Number"
              desc="Derived from full birth name. Reflects talents, strengths, and life goals."
              formula="Each letter maps (A=1, B=2...). Sum result and reduce."
            />
            <ConceptCard
              icon={<Star size={20} />}
              title="Soul Urge Number"
              desc="Focuses on your inner self, desires, and heart's secret motivations."
              formula="Calculated using only the vowels in your full name."
            />
            <ConceptCard
              icon={<Settings size={20} />}
              title="Personality Number"
              desc="Shows the external side of you—the version the world sees."
              formula="Calculated using the consonants in your full name."
            />
            <ConceptCard
              icon={<Layout size={20} />}
              title="Birthday Number"
              desc="Simply the day you were born. Reveals special talents."
              formula="The specific day digit of your birth date."
            />
            <ConceptCard
              icon={<Hash size={20} />}
              title="Personal Year"
              desc="Predicts life cycles, themes, and upcoming yearly opportunities."
              formula="Birth date + current year sum reduced."
            />
          </div>
        </div>
      </section>

      {/* --- Meanings Table --- */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#0a0a0a] dark:text-white uppercase mb-4">
              Number Meanings
            </h2>
            <p className="text-gray-500 text-xs tracking-widest uppercase">
              Traits & Vibrations
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-white/5 shadow-lg bg-white dark:bg-[#0d1117]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#2262b2] text-white uppercase text-[10px] font-black tracking-widest">
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
                    <td className="px-6 py-3 font-black text-[#2262b2]">
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

      {/* --- Systems & Uses --- */}
      <section className="py-20 bg-white dark:bg-[#050a15]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Types */}
            <div>
              <h3 className="text-xl font-black text-[#0a0a0a] dark:text-white uppercase mb-8 flex items-center gap-2">
                <div className="w-8 h-8 bg-[#ff7e33]/10 text-[#ff7e33] rounded-lg flex items-center justify-center">
                  <Binary size={18} />
                </div>
                Types of Numerology
              </h3>
              <div className="space-y-6">
                <SystemItem
                  title="Pythagorean"
                  desc="Most popular western system. Uses 1–9 and A-Z mapping."
                />
                <SystemItem
                  title="Chaldean"
                  desc="Ancient system based on sound vibrations. 9 is sacred and avoided."
                />
                <SystemItem
                  title="Kabbalah"
                  desc="Hebrew-based system focusing primarily on spiritual growth."
                />
                <SystemItem
                  title="Vedic / Indian"
                  desc="Similar to Chaldean, heavily used in name corrections."
                />
              </div>
            </div>

            {/* Uses */}
            <div>
              <h3 className="text-xl font-black text-[#0a0a0a] dark:text-white uppercase mb-8 flex items-center gap-2">
                <div className="w-8 h-8 bg-[#2262b2]/10 text-[#2262b2] rounded-lg flex items-center justify-center">
                  <Compass size={18} />
                </div>
                Practical Applications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Personal Growth",
                  "Relationship Compatibility",
                  "Career Guidance",
                  "Name Selection",
                  "Decision Making",
                  "Healing & Spirituality",
                ].map((use, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl hover:border-[#ff7e33] transition-colors"
                  >
                    <div className="w-1.5 h-1.5 bg-[#ff7e33] rounded-full"></div>
                    <span className="text-xs sm:text-sm font-bold opacity-80">
                      {use}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Quick Tips --- */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black uppercase mb-12">
            Expert Quick Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            <TipItem text="Always reduce numbers to single digits unless it's a master number (11, 22, 33)." />
            <TipItem text="Pay attention to repeating numbers (Angel Numbers)—they carry extra significance." />
            <TipItem text="Combine numerology with astrology for deeper, more dimensional insights." />
            <TipItem text="Use numerology as guidance, not rigid rules—personal choice always matters." />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const ConceptCard = ({ icon, title, desc, formula, example }) => (
  <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl hover:bg-white dark:hover:bg-[#2262b2]/5 transition-all group active:scale-[0.98]">
    <div className="w-10 h-10 bg-white dark:bg-[#0a0a0a] text-[#ff7e33] rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 dark:border-white/10 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-sm font-black uppercase tracking-widest text-[#0a0a0a] dark:text-white mb-3">
      {title}
    </h4>
    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed font-medium">
      {desc}
    </p>
    <div className="pt-4 border-t border-gray-100 dark:border-white/10 space-y-2">
      <p className="text-[10px] uppercase font-black text-[#2262b2]">Method:</p>
      <p className="text-[11px] text-gray-400 font-mono bg-white dark:bg-black/20 p-2 rounded leading-tight">
        {formula}
      </p>
      {example && (
        <p className="text-[10px] text-[#ff7e33]/80 italic">Ex: {example}</p>
      )}
    </div>
  </div>
);

const SystemItem = ({ title, desc }) => (
  <div className="group border-b border-gray-100 dark:border-white/5 pb-4 last:border-0">
    <h5 className="text-sm font-black text-[#0a0a0a] dark:text-white uppercase mb-1 group-hover:text-[#2262b2] transition-colors">
      {title}
    </h5>
    <p className="text-xs text-gray-500 font-medium">{desc}</p>
  </div>
);

const TipItem = ({ text }) => (
  <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-[#ff7e33]/30 transition-colors">
    <Info className="text-[#ff7e33] shrink-0" size={18} />
    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{text}</p>
  </div>
);

export default Intro;
