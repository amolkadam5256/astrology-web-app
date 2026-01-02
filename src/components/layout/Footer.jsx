import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SITE_DATA } from "../../constants/siteData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Numerology & Names",
      links: [
        { name: "What is Numerology?", path: "/numerology/intro" },
        { name: "Life Path & Destiny", path: "/numerology/life-path" },
        { name: "Name Correction", path: "/numerology/name" },
        { name: "Baby Numerology", path: "/numerology/baby-name" },
        { name: "Lucky Numbers & Dates", path: "/numerology/lucky-dates" },
      ],
    },
    {
      title: "Spiritual Healing",
      links: [
        { name: "Angel Card Reading", path: "/services/angel-cards" },
        { name: "Soul Path / Career", path: "/services/soul-path" },
        { name: "Relationship Healing", path: "/services/relationship" },
        { name: "Past Life Healing", path: "/services/past-life" },
        { name: "BRAVE Success Program", path: "/services/brave" },
      ],
    },
    {
      title: "Vastu & Property",
      links: [
        { name: "Vastu for Office", path: "/services/vastu-office" },
        { name: "Vastu for Home", path: "/services/vastu-home" },
        { name: "Vehicle Numerology", path: "/numerology/property" },
        { name: "Flat Numerology", path: "/numerology/flat" },
        { name: "Business Numerology", path: "/numerology/business" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-[#050505] border-t border-gray-200 dark:border-white/5 pt-5 pb-5 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[var(--color-primary)]/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-primary)]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6" data-aos="fade-right">
            <div className="group inline-block">
              <span className="text-3xl font-black tracking-tighter text-[var(--color-dark)] dark:text-white">
                {SITE_DATA.brand.name}
                <span className="text-[var(--color-primary)]">
                  {SITE_DATA.brand.highlight}
                </span>
              </span>
              <div className="w-12 h-1 bg-[var(--color-primary)] mt-1 group-hover:w-full transition-all duration-500"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-[14px] leading-relaxed max-w-md font-medium">
              {SITE_DATA.brand.tagline}
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">
                    {SITE_DATA.contact.emailLabel}
                  </p>
                  <p className="font-bold dark:text-gray-200 text-gray-800 text-[14px]">
                    {SITE_DATA.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">
                    {SITE_DATA.contact.supportLabel}
                  </p>
                  <p className="font-bold dark:text-gray-200 text-gray-800 text-[14px]">
                    {SITE_DATA.contact.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-[12px] uppercase tracking-[0.3em] font-black text-[var(--color-dark)] dark:text-white">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] transition-colors flex items-center group/link"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="pt-5 border-t border-gray-200 dark:border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            {/* Newsletter */}
            <div className="w-full lg:w-max space-y-4">
              <h5 className="flex items-center text-sm font-black dark:text-white text-gray-900 uppercase tracking-widest">
                <Sparkles className="w-4 h-4 mr-3 text-[var(--color-primary)]" />
                Subscribe to Cosmic Updates
              </h5>
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Your cosmic email"
                  className="w-full lg:w-80 px-5 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-[var(--color-primary)] transition-colors font-bold text-[13px]"
                />
                <button className="px-8 py-4 bg-[var(--color-primary)] hover:bg-[#1b4f91] text-white font-black text-[13px] transition-all">
                  JOIN
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {SITE_DATA.socials.map((social) => {
                const Icon = {
                  Facebook: Facebook,
                  Twitter: Twitter,
                  Instagram: Instagram,
                  Youtube: Youtube,
                }[social.name];

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-400 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] gap-5 text-center">
            <p>
              © {currentYear}{" "}
              <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">
                {SITE_DATA.brand.name}
                <span className="text-[var(--color-primary)]">
                  {SITE_DATA.brand.highlight}
                </span>
              </Link>{" "}
              Cosmic Portal. All Celestial rights reserved.
            </p>
            <div className="flex items-center space-x-10">
              <a
                href="/privacy"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/disclaimer"
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                Astrology Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
