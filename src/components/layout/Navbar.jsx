import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Calendar,
} from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";
import { SITE_DATA } from "../../constants/siteData";

const DropdownItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);
  const hasChildren = item.children && item.children.length > 0;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <div
      className="relative border-b border-gray-100 dark:border-white/5 last:border-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={item.path}
        className={`w-full flex items-center justify-between px-5 py-3.5 text-[13px] font-bold transition-all text-left ${
          isOpen
            ? "bg-[#2262b2] text-white"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#2262b2]"
        }`}
        onClick={(e) => {
          if (hasChildren) e.preventDefault();
        }}
      >
        <span>{item.name}</span>
        {hasChildren && (
          <ChevronRight
            className={`w-4 h-4 ml-3 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        )}
      </Link>

      {hasChildren && isOpen && (
        <div className="md:absolute bg-white dark:bg-dark shadow-2xl border border-gray-200 dark:border-white/5 min-w-[220px] z-50 top-0 left-full animate-fadeIn transition-all">
          {item.children.map((child, index) => (
            <DropdownItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Numerology",
      path: "/numerology",
      children: [
        {
          name: "Core Analysis",
          children: [
            { name: "What is Numerology?", path: "/numerology/intro" },
            { name: "Life Path & Destiny", path: "/numerology/life-path" },
            { name: "Personality Traits", path: "/numerology/personality" },
          ],
        },
        {
          name: "Name Services",
          children: [
            { name: "Name Correction", path: "/numerology/name" },
            { name: "Baby Name Numerology", path: "/numerology/baby-name" },
            { name: "Business Name Numerology", path: "/numerology/business" },
          ],
        },
        {
          name: "Spiritual Guidance",
          children: [
            { name: "Angel Card Reading", path: "/services/angel-cards" },
            { name: "Soul Path / Career", path: "/services/soul-path" },
            { name: "BRAVE Success Program", path: "/services/brave" },
            { name: "Healing Services", path: "/services/healing" },
          ],
        },
        {
          name: "Vastu & Planning",
          children: [
            { name: "Vastu For Office", path: "/services/vastu-office" },
            { name: "Lucky Numbers & Dates", path: "/numerology/lucky-dates" },
            { name: "Vehicle/Flat Numerology", path: "/numerology/property" },
          ],
        },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-dark shadow-md border-b border-gray-200 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl font-black tracking-tight text-dark dark:text-white">
                {SITE_DATA.brand.name}
                <span className="text-primary">
                  {SITE_DATA.brand.highlight}
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-0 h-full">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={item.path}
                  className={`px-5 h-full flex items-center text-[14px] font-bold transition-colors ${
                    scrolled
                      ? "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-primary"
                      : "text-dark dark:text-white hover:bg-white/10"
                  } ${
                    activeMenu === item.name
                      ? scrolled
                        ? "bg-gray-50 dark:bg-white/5 text-primary"
                        : "bg-white/10"
                      : ""
                  }`}
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 ml-1.5 transition-transform ${
                        activeMenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Level 1 Dropdown */}
                {item.children && activeMenu === item.name && (
                  <div className="absolute top-full left-0 bg-white dark:bg-dark shadow-2xl border border-gray-200 dark:border-white/5 min-w-[220px] z-50 animate-fadeIn">
                    {item.children.map((child, index) => (
                      <DropdownItem key={index} item={child} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-0">
            <div className="px-2">
              <ThemeToggle />
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-primary hover:bg-primary-dark-1 text-white transition-all font-bold text-sm tracking-wide"
            >
              BOOK SESSION
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-4 text-dark dark:text-white"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white dark:bg-dark z-40 overflow-y-auto animate-fadeIn">
          <div className="border-t border-gray-100 dark:border-white/5">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="border-b border-gray-100 dark:border-white/5"
              >
                <div className="flex items-center justify-between px-6 py-5">
                  <Link
                    to={item.path}
                    className="text-sm font-bold text-dark dark:text-white"
                    onClick={(e) => {
                      if (!item.children) setIsOpen(false);
                      else e.preventDefault();
                    }}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() =>
                        setActiveMenu(
                          activeMenu === item.name ? null : item.name
                        )
                      }
                      className={`p-2 ${
                        activeMenu === item.name
                          ? "bg-primary text-white"
                          : "text-gray-400"
                      }`}
                    >
                      <ChevronDown
                        className={`w-6 h-6 transition-transform ${
                          activeMenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.children && activeMenu === item.name && (
                  <div className="bg-gray-50 dark:bg-black/20 pb-4">
                    {item.children.map((child, index) => (
                      <div
                        key={index}
                        className="px-10 py-3 border-l-4 border-primary/20"
                      >
                        <div className="flex items-center justify-between">
                          <Link
                            to={child.path}
                            className="font-semibold text-gray-600 dark:text-gray-400"
                            onClick={() => !child.children && setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                          {child.children && (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                          )}
                        </div>
                        {child.children && (
                          <div className="mt-3 ml-4 flex flex-col space-y-3">
                            {child.children.map((sub, idx) => (
                              <Link
                                key={idx}
                                to={sub.path}
                                className="text-[14px] text-gray-500 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="p-6 space-y-4 pb-20">
            <Link
              to="/contact"
              className="block w-full text-center py-5 bg-primary text-white font-black tracking-widest uppercase"
              onClick={() => setIsOpen(false)}
            >
              BOOK SESSION
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
