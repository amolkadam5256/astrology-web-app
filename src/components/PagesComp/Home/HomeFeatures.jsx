import React from "react";
import { Target, Zap, ShieldCheck } from "lucide-react";

/**
 * HomeFeatures Component
 * Redesigned for a sharp, modern, and creative look without rounded corners.
 */
const HomeFeatures = () => {
  const features = [
    {
      icon: Target,
      title: "Ancient Precision",
      desc: "Harnessing the exact mathematical vibrations of Vedic and Chaldean systems for pinpoint accuracy in every roadmap.",
      aos: "fade-up",
      delay: "0",
    },
    {
      icon: Zap,
      title: "Soul Activation",
      desc: "Beyond numbers, we offer spiritual energy alignment that activates your dormant potential and clarifies your true path.",
      aos: "fade-up",
      delay: "100",
    },
    {
      icon: ShieldCheck,
      title: "Strategic Success",
      desc: "Proven methodologies to align your personal, business, and property vibrations with high-frequency success archetypes.",
      aos: "fade-up",
      delay: "200",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#050a15] py-32 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl space-y-4">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs">
              Why AstroGuide
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              The Science of <span className="text-primary">Celestial</span>{" "}
              Alignment
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium max-w-sm">
            We merge ancient wisdom with modern strategic analysis to deliver
            unparalleled clarity and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              data-aos={feature.aos}
              data-aos-delay={feature.delay}
              className="group relative p-10 md:p-14 border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/5 last:border-r-0 hover:bg-dark dark:hover:bg-[#1a202c] transition-all duration-500"
            >
              {/* Animation Layer */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              <div className="relative z-10 space-y-8">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black text-primary opacity-40">
                      0{i + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-dark dark:text-white uppercase tracking-tight group-hover:text-white dark:group-hover:text-dark transition-colors duration-500">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 dark:group-hover:text-gray-600 transition-colors duration-500">
                    {feature.desc}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="w-8 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
