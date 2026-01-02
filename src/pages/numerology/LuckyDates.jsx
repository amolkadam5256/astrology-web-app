import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import LuckyDatesHero from "../../components/PagesComp/Numerology/LuckyDates/LuckyDatesHero";
import LuckyDatesGrid from "../../components/PagesComp/Numerology/LuckyDates/LuckyDatesGrid";

/**
 * Lucky Numbers & Dates Page
 * Refactored into modular components.
 */
const LuckyDates = () => {
  return (
    <MainLayout title="Lucky Numbers & Dates - Dynamic Timing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <LuckyDatesHero />
        <LuckyDatesGrid />
      </div>
    </MainLayout>
  );
};

export default LuckyDates;
