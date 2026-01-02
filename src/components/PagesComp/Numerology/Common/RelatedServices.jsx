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
  Flame,
  Heart,
  Shield,
  Map,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Binary,
    title: "Numerology Intro",
    link: "/numerology/intro",
  },
  {
    icon: TrendingUp,
    title: "Life Path & Destiny",
    link: "/numerology/life-path",
  },
  {
    icon: User,
    title: "Personality Blueprint",
    link: "/numerology/personality",
  },
  {
    icon: PenTool,
    title: "Name Correction",
    link: "/numerology/name",
  },
  {
    icon: Baby,
    title: "Baby Name",
    link: "/numerology/baby-name",
  },
  {
    icon: Building2,
    title: "Business Name",
    link: "/numerology/business",
  },
  {
    icon: Calendar,
    title: "Lucky Dates",
    link: "/numerology/lucky-dates",
  },
  {
    icon: Home,
    title: "Property & Vehicle",
    link: "/numerology/property",
  },
  {
    icon: Flame,
    title: "Angel Cards",
    link: "/services/angel-cards",
  },
  {
    icon: Map,
    title: "Soul Path",
    link: "/services/soul-path",
  },
  {
    icon: Shield,
    title: "Brave Program",
    link: "/services/brave",
  },
  {
    icon: Heart,
    title: "Spiritual Healing",
    link: "/services/healing",
  },
  {
    icon: Layers,
    title: "Vastu Office",
    link: "/services/vastu-office",
  },
];

const RelatedServices = ({ currentPath }) => {
  // Filter out the current page
  const related = services
    .filter((s) => s.link !== currentPath)
    .sort(() => 0.5 - Math.random()) // Randomize
    .slice(0, 4); // Take 4

  return (
    <section className="bg-gray-50/50 dark:bg-[#050a15] py-24 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs">
              Explore More
            </h4>
            <h2 className="text-3xl md:text-4xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Discover <span className="text-primary">Related</span> Services
            </h2>
          </div>
          <Link
            to="/numerology"
            className="flex items-center text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-dark dark:text-white group hover:text-primary transition-colors"
          >
            View All Services{" "}
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {related.map((service, idx) => (
            <Link
              key={idx}
              to={service.link}
              className="group p-8 border border-white dark:border-white/5 bg-white dark:bg-dark hover:border-primary transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <service.icon className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-black text-dark dark:text-white uppercase tracking-tight mb-2">
                {service.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">
                Discover More
              </p>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
