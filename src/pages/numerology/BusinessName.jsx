import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import BusinessNameHero from "../../components/PagesComp/Numerology/BusinessName/BusinessNameHero";
import BusinessNamePillars from "../../components/PagesComp/Numerology/BusinessName/BusinessNamePillars";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

/**
 * Business Name Numerology Page
 * Refactored into modular components.
 */
const BusinessName = () => {
  return (
    <MainLayout
      title="Business Name Numerology | Company Name for Prosperity"
      description="Optimize your business success with professional name numerology. Get recommendations for company names that attract wealth, growth, and commercial success."
      keywords="Business Name Numerology, Company Name Calculator, Prosperity Numerology, Business Success, Commercial Numerology"
    >
      <BusinessNameHero />
      <BusinessNamePillars />
      <RelatedServices currentPath="/numerology/business" />
    </MainLayout>
  );
};

export default BusinessName;
