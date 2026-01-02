import React from "react";
import { images } from "../../../../assets/images/images";
import { Hash, Sparkles } from "lucide-react";

const IntroHero = () => {
  return (
    <section className="bg-gray-50 dark:bg-[var(--color-dark)] py-16 border-b border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
              <Hash size={12} />
              <span>Ancient Wisdom</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-[var(--color-dark)] dark:text-white uppercase leading-tight mb-6">
              What is <span className="text-[var(--color-primary)]">Numerology?</span>
            </h1>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                Numerology is the study of numbers and their mystical influence
                on human life and events. It’s based on the idea that numbers
                are not just mathematical symbols but also carry vibrational
                frequencies that can affect personality, destiny, relationships,
                and life events.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <Sparkles
                    className="text-[var(--color-secondary)] mt-1 shrink-0"
                    size={14}
                  />
                  <span>Every number has a unique vibration and meaning.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Sparkles
                    className="text-[var(--color-secondary)] mt-1 shrink-0"
                    size={14}
                  />
                  <span>
                    Your name and birth date are considered to hold key numbers
                    influencing your life path.
                  </span>
                </li>
              </ul>
              <p className="font-bold text-[var(--color-dark)] dark:text-white italic bg-white dark:bg-white/5 p-4 border-l-4 border-[var(--color-secondary)]">
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
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--color-secondary)] -z-10 rounded-xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroHero;
