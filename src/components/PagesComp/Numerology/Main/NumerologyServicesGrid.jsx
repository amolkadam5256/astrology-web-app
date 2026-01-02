import React from "react";
import { Link } from "react-router-dom";
import {
  Binary,
  PenTool,
  Sparkles,
  TrendingUp,
  User,
  Baby,
  Building2,
  Calendar,
  Home,
  ArrowRight,
} from "lucide-react";

const NumerologyServicesGrid = () => {
  const sections = [
    {
      icon: Binary,
      title: "Numerology Intro",
      desc: "Understand the basics of how numbers vibrate and influence your daily life and destiny.",
      link: "/numerology/intro",
    },
    {
      icon: TrendingUp,
      title: "Life Path & Destiny",
      desc: "Calculate your Life Path Number to reveal your true purpose and character archetype.",
      link: "/numerology/life-path",
    },
    {
      icon: User,
      title: "Personality Blueprint",
      desc: "Deep dive into your personality traits and how the world perceives your energetic field.",
      link: "/numerology/personality",
    },
    {
      icon: PenTool,
      title: "Name Correction",
      desc: "Harmonize your name's spelling to align with high-frequency success and prosperity vibrations.",
      link: "/numerology/name",
    },
    {
      icon: Baby,
      title: "Baby Name Numerology",
      desc: "Gift your newborn a name that carries a powerful and balanced vibration for their future.",
      link: "/numerology/baby-name",
    },
    {
      icon: Building2,
      title: "Business Numerology",
      desc: "Launch your brand with a name and date that guarantees growth and commercial success.",
      link: "/numerology/business",
    },
    {
      icon: Calendar,
      title: "Lucky Numbers & Dates",
      desc: "Find your auspicious dates for weddings, travel, and important life-changing decisions.",
      link: "/numerology/lucky-dates",
    },
    {
      icon: Home,
      title: "Property & Vehicle",
      desc: "Ensure your house and vehicle numbers are in harmony with your wealth and safety.",
      link: "/numerology/property",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {sections.map((section, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="group p-8 border border-gray-100 dark:border-white/5 hover:border-[var(--color-primary)] dark:hover:border-[var(--color-primary)] transition-all bg-gray-50/50 dark:bg-[var(--color-dark)] relative overflow-hidden flex flex-col"
          >
            {/* Background Icon Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 dark:text-white text-black transition-opacity pointer-events-none">
              <section.icon className="w-24 h-24 -mr-10 -mt-10" />
            </div>

            <div className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[var(--color-primary)] mb-8 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all shadow-sm">
              <section.icon className="w-6 h-6" />
            </div>

            <h4 className="text-xl font-black text-[var(--color-dark)] dark:text-white uppercase tracking-tight mb-4">
              {section.title}
            </h4>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 grow">
              {section.desc}
            </p>

            <div className="space-y-4">
              <Link
                to={section.link}
                className="flex items-center text-[10px] uppercase font-bold tracking-[0.2em] text-primary group/link hover:gap-3 transition-all"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="block w-full text-center py-4 bg-dark dark:bg-white/5 text-white text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-primary dark:hover:bg-primary transition-colors border border-transparent dark:border-white/10"
              >
                Book This Service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumerologyServicesGrid;
