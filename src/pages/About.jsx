import React from "react";
import MainLayout from "../components/layout/MainLayout";
import { images } from "../assets/images/images";

const About = () => {
  return (
    <MainLayout
      title="About Us"
      description="Learn about AstroGuide's mission to provide professional numerology and spiritual healing services."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <h2 className="text-4xl font-black text-[#0a0a0a] dark:text-white uppercase tracking-tighter">
              The Wisdom Behind{" "}
              <span className="text-[#2262b2]">AstroGuide</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium italic">
              "Numbers are the highest degree of knowledge. It is knowledge
              itself." — Plato
            </p>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                AstroGuide was founded on the principle that the universe is
                mathematically structured. Our mission is to empower individuals
                to navigate their lives with clarity by understanding the deep
                energetic frequencies hidden within their birth dates and names.
              </p>
              <p>
                Led by Ms. Sheethal R, a seasoned Numerologist with over 17
                years of experience, we blend technical precision with spiritual
                intuition. Our expertise spans from Personal Numerology to the
                specialized BRAVE program for career success.
              </p>
            </div>
            <div className="pt-4" data-aos="zoom-in" data-aos-delay="400">
              <div className="border-l-4 border-[#2262b2] pl-6 py-2">
                <p className="font-black text-[#0a0a0a] dark:text-white uppercase tracking-widest text-sm">
                  Founded in 1977
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  A legacy of celestial wisdom continued by Ms. Sheethal R.
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative group overflow-hidden bg-gray-100 dark:bg-white/5 aspect-square"
            data-aos="fade-left"
          >
            <div className="absolute inset-0 border-2 border-[#2262b2] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
            <img
              src={images.about.expertProfile}
              alt="Expert Numerologist"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
