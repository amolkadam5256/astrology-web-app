import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import NameCorrectionHero from "../../components/PagesComp/Numerology/NameCorrection/NameCorrectionHero";
import NameCorrectionScience from "../../components/PagesComp/Numerology/NameCorrection/NameCorrectionScience";

/**
 * Name Correction Page
 * Refactored into modular components.
 */
const NameCorrection = () => {
  return (
    <MainLayout title="Name Correction & Vibrational Alignment">
      <NameCorrectionHero />
      <NameCorrectionScience />
    </MainLayout>
  );
};

export default NameCorrection;
