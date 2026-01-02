import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import BabyNameHero from "../../components/PagesComp/Numerology/BabyName/BabyNameHero";
import BabyNamePillars from "../../components/PagesComp/Numerology/BabyName/BabyNamePillars";
import BabyNameCTA from "../../components/PagesComp/Numerology/BabyName/BabyNameCTA";

/**
 * Baby Name Numerology Page
 * Refactored into modular components.
 */
const BabyName = () => {
  return (
    <MainLayout title="Baby Name Numerology - Gift a Powerful Vibration">
      <BabyNameHero />
      <BabyNamePillars />
      <BabyNameCTA />
    </MainLayout>
  );
};

export default BabyName;
