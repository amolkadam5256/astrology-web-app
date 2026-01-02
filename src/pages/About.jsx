import React from "react";
import MainLayout from "../components/layout/MainLayout";
import AboutContent from "../components/PagesComp/About/AboutContent";
import AboutImage from "../components/PagesComp/About/AboutImage";

import RelatedServices from "../components/PagesComp/Numerology/Common/RelatedServices";

const About = () => {
  return (
    <MainLayout
      title="About AstroGuide | Professional Numerology Services"
      description="Learn about AstroGuide, your trusted source for professional numerology and spiritual healing. Meet our expert numerologists and embark on a journey of self-discovery."
      keywords="About AstroGuide, Numerology Services, Expert Numerologists, Spiritual Healing, Professional Numerology"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AboutContent />
          <AboutImage />
        </div>
      </div>
      <RelatedServices currentPath="/about" />
    </MainLayout>
  );
};

export default About;
