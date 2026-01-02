import React from "react";
import { Binary, Compass } from "lucide-react";

const SystemItem = ({ title, desc }) => (
  <div className="group border-b border-gray-100 dark:border-white/5 pb-4 last:border-0">
    <h5 className="text-sm font-black text-[var(--color-dark)] dark:text-white uppercase mb-1 group-hover:text-[var(--color-primary)] transition-colors">
      {title}
    </h5>
    <p className="text-xs text-gray-500 font-medium">{desc}</p>
  </div>
);

const IntroSystems = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#050a15]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Types */}
          <div>
            <h3 className="text-xl font-black text-[var(--color-dark)] dark:text-white uppercase mb-8 flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded-lg flex items-center justify-center">
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
            <h3 className="text-xl font-black text-[var(--color-dark)] dark:text-white uppercase mb-8 flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-lg flex items-center justify-center">
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
                  className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-xl hover:border-[var(--color-secondary)] transition-colors"
                >
                  <div className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full"></div>
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
  );
};

export default IntroSystems;
