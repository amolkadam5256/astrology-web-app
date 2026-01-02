import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import BusinessNameHero from "../../components/PagesComp/Numerology/BusinessName/BusinessNameHero";
import BusinessNamePillars from "../../components/PagesComp/Numerology/BusinessName/BusinessNamePillars";

/**
 * Business Name Numerology Page
 * Refactored into modular components.
 */
const BusinessName = () => {
  return (
    <MainLayout title="Business Name Numerology - Commercial Alignment">
      <BusinessNameHero />
      <BusinessNamePillars />
    </MainLayout>
  );
};

export default BusinessName;
