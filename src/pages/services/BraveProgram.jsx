import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import BraveHero from "../../components/PagesComp/Services/BraveProgram/BraveHero";
import BraveGrid from "../../components/PagesComp/Services/BraveProgram/BraveGrid";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

const BraveProgram = () => {
  return (
    <MainLayout
      title="Brave Program | Empowerment & Spiritual Growth"
      description="Join the Brave Program for deep spiritual healing, empowerment, and personal growth. Overcome fears and unlock your full potential with professional guidance."
      keywords="Brave Program, Empowerment, Spiritual Growth, Spiritual Healing, Overcome Fear, Personal Transformation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="bg-dark rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center"
          data-aos="zoom-in"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <BraveHero />
          <BraveGrid />
        </div>
      </div>
      <RelatedServices currentPath="/services/brave" />
    </MainLayout>
  );
};

export default BraveProgram;
