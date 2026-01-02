import React from "react";
import MainLayout from "../components/layout/MainLayout";
import AboutContent from "../components/PagesComp/About/AboutContent";
import AboutImage from "../components/PagesComp/About/AboutImage";

const About = () => {
  return (
    <MainLayout
      title="About Us"
      description="Learn about AstroGuide's mission to provide professional numerology and spiritual healing services."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AboutContent />
          <AboutImage />
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
