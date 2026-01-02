import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import LifePathHero from "../../components/PagesComp/Numerology/LifePath/LifePathHero";
import LifePathCalculation from "../../components/PagesComp/Numerology/LifePath/LifePathCalculation";
import LifePathDestinyCards from "../../components/PagesComp/Numerology/LifePath/LifePathDestinyCards";
import LifePathPredictor from "../../components/PagesComp/Numerology/LifePath/LifePathPredictor";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

/**
 * Life Path & Destiny Page
 * Refactored into modular components.
 */
const LifePath = () => {
  return (
    <MainLayout
      title="Life Path Number Calculator | Calculate Your Destiny Number"
      description="Calculate your Life Path Number and uncover your life's purpose and destiny. Get accurate numerology readings for character analysis and personal growth."
      keywords="Life Path Number, Destiny Number, Numerology Calculator, Calculate Life Path, Numerology Reading"
    >
      <LifePathHero />
      <LifePathCalculation />
      <LifePathDestinyCards />
      <LifePathPredictor />
      <RelatedServices currentPath="/numerology/life-path" />
    </MainLayout>
  );
};

export default LifePath;
