import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import NameCorrectionHero from "../../components/PagesComp/Numerology/NameCorrection/NameCorrectionHero";
import NameCorrectionScience from "../../components/PagesComp/Numerology/NameCorrection/NameCorrectionScience";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

/**
 * Name Correction Page
 * Refactored into modular components.
 */
const NameCorrection = () => {
  return (
    <MainLayout
      title="Name Correction Numerology | Align Your Name for Success"
      description="Align your name with your destiny for better luck and prosperity. Professional name correction services to attract positive vibrations and career growth."
      keywords="Name Correction, Name Numerology, Align Name for Success, Numerology Spelling, Success Numerology"
    >
      <NameCorrectionHero />
      <NameCorrectionScience />
      <RelatedServices currentPath="/numerology/name" />
    </MainLayout>
  );
};

export default NameCorrection;
