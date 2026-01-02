import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import LuckyDatesHero from "../../components/PagesComp/Numerology/LuckyDates/LuckyDatesHero";
import LuckyDatesGrid from "../../components/PagesComp/Numerology/LuckyDates/LuckyDatesGrid";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

/**
 * Lucky Numbers & Dates Page
 * Refactored into modular components.
 */
const LuckyDates = () => {
  return (
    <MainLayout
      title="Lucky Dates & Numbers | Numerology for Important Events"
      description="Identify your lucky dates for marriage, business, and travel. Use numerology to find the most auspicious timing for success in all your important life events."
      keywords="Lucky Dates, Lucky Numbers, Auspicious Timing, Numerology for Events, Success Timing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <LuckyDatesHero />
        <LuckyDatesGrid />
      </div>
      <RelatedServices currentPath="/numerology/lucky-dates" />
    </MainLayout>
  );
};

export default LuckyDates;
