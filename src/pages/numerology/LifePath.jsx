import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import LifePathHero from "../../components/PagesComp/Numerology/LifePath/LifePathHero";
import LifePathCalculation from "../../components/PagesComp/Numerology/LifePath/LifePathCalculation";
import LifePathDestinyCards from "../../components/PagesComp/Numerology/LifePath/LifePathDestinyCards";
import LifePathPredictor from "../../components/PagesComp/Numerology/LifePath/LifePathPredictor";

/**
 * Life Path & Destiny Page
 * Refactored into modular components.
 */
const LifePath = () => {
  return (
    <MainLayout title="Life Path & Destiny - Numerology Guide">
      <LifePathHero />
      <LifePathCalculation />
      <LifePathDestinyCards />
      <LifePathPredictor />
    </MainLayout>
  );
};

export default LifePath;
