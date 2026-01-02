import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import BabyNameHero from "../../components/PagesComp/Numerology/BabyName/BabyNameHero";
import BabyNamePillars from "../../components/PagesComp/Numerology/BabyName/BabyNamePillars";
import BabyNameCTA from "../../components/PagesComp/Numerology/BabyName/BabyNameCTA";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

/**
 * Baby Name Numerology Page
 * Refactored into modular components.
 */
const BabyName = () => {
  return (
    <MainLayout
      title="Lucky Baby Names by Numerology | Modern & Powerful Names"
      description="Choose the perfect name for your newborn based on numerology. Get lucky baby name recommendations to ensure a bright future and powerful vibration for your child."
      keywords="Baby Name Numerology, Lucky Baby Names, Modern Numerology Names, Powerful Baby Names, Numerology for Kids"
    >
      <BabyNameHero />
      <BabyNamePillars />
      <BabyNameCTA />
      <RelatedServices currentPath="/numerology/baby-name" />
    </MainLayout>
  );
};

export default BabyName;
