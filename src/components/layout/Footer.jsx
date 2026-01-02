import React from "react";
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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Our Blog", path: "/blog" },
        { name: "Contact Us", path: "/contact" },
        { name: "Book a Session", path: "/booking" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Personal Consultation", path: "/services/consultation" },
        { name: "Marriage Astrology", path: "/services/marriage" },
        { name: "Career Guidance", path: "/services/career" },
        { name: "Vastu Shastra", path: "/services/vastu" },
        { name: "Kundli Analysis", path: "/services/kundli" },
      ],
    },
    {
      title: "Popular Signs",
      links: [
        { name: "Aries Horoscope", path: "/horoscope/aries" },
        { name: "Leo Horoscope", path: "/horoscope/leo" },
        { name: "Scorpio Horoscope", path: "/horoscope/scorpio" },
        { name: "Pisces Horoscope", path: "/horoscope/pisces" },
        { name: "All Zodiac Signs", path: "/zodiac" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-[#050505] border-t border-gray-200 dark:border-white/5 pt-5 pb-5 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#2262b2]/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#2262b2]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="group inline-block">
              <span className="text-3xl font-black tracking-tighter text-[#0a0a0a] dark:text-white">
                Astro<span className="text-[#2262b2]">Guide</span>
              </span>
              <div className="w-12 h-1 bg-[#2262b2] mt-1 group-hover:w-full transition-all duration-500"></div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-[14px] leading-relaxed max-w-md font-medium">
              Empowering your journey through celestial wisdom. We provide
              ancient Vedic insights for the modern world to help you navigate
              life's most important decisions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[#2262b2] group-hover:bg-[#2262b2] group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">
                    Email Us
                  </p>
                  <p className="font-bold dark:text-gray-200 text-gray-800 text-[14px]">
                    contact@astroguide.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[#2262b2] group-hover:bg-[#2262b2] group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-black text-gray-400">
                    Call Support
                  </p>
                  <p className="font-bold dark:text-gray-200 text-gray-800 text-[14px]">
                    +1 (800) ASTRO-GUIDE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h4 className="text-[12px] uppercase tracking-[0.3em] font-black text-[#0a0a0a] dark:text-white">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="group flex items-center text-gray-500 dark:text-gray-400 hover:text-[#2262b2] dark:hover:text-white transition-colors text-[13px] font-bold"
                    >
                      <ArrowRight className="w-0 h-4 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                      {link.name}
                    </a>
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
                <Sparkles className="w-4 h-4 mr-3 text-[#2262b2]" />
                Subscribe to Cosmic Updates
              </h5>
              <div className="flex w-full">
                <input
                  type="email"
                  placeholder="Your cosmic email"
                  className="w-full lg:w-80 px-5 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:outline-none focus:border-[#2262b2] transition-colors font-bold text-[13px]"
                />
                <button className="px-8 py-4 bg-[#2262b2] hover:bg-[#1b4f91] text-white font-black text-[13px] transition-all">
                  JOIN
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "Youtube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-12 h-12 flex items-center justify-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-400 hover:text-[#2262b2] hover:border-[#2262b2] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] gap-5 text-center">
            <p>
              © {currentYear} Astro<span className="text-[#2262b2]">Guide</span>{" "}
              Cosmic Portal. All Celestial rights reserved.
            </p>
            <div className="flex items-center space-x-10">
              <a
                href="/privacy"
                className="hover:text-[#2262b2] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-[#2262b2] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/disclaimer"
                className="hover:text-[#2262b2] transition-colors"
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
