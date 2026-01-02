import React from "react";
import MainLayout from "../components/layout/MainLayout";
import HomeHero from "../components/PagesComp/Home/HomeHero";
import HomeFeatures from "../components/PagesComp/Home/HomeFeatures";
import NumerologyServicesGrid from "../components/PagesComp/Numerology/Main/NumerologyServicesGrid";
import Testimonials from "../components/common/Testimonials";

const Home = () => {
  return (
    <MainLayout
      title="Numerology Guide | Best Life Path & Destiny Calculator"
      description="Discover your destiny with the Best Numerology Guide. Get accurate life path, destiny, and soul urge number calculations for personal growth and success."
      keywords="Numerology Guide, Life Path Number, Destiny Number, Numerology Calculator, Online Numerology, Astrology"
    >
      <HomeHero />

      {/* Featured Services Section */}
      <div className="bg-white dark:bg-[#050a15] pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] sm:text-xs">
              Celestial Services
            </h4>
            <h2 className="text-3xl md:text-5xl font-black text-dark dark:text-white uppercase tracking-tighter leading-none">
              Explore Our <span className="text-primary">Numerology</span>{" "}
              Expertise
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium">
              Unlock the secrets of your numbers. From personal destiny to
              business alignment, our expert readings provide the clarity you
              need for a successful journey.
            </p>
          </div>
        </div>
        <NumerologyServicesGrid />
      </div>

      <HomeFeatures />
      <Testimonials />
    </MainLayout>
  );
};

export default Home;
