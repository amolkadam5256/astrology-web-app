import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import PropertyContent from "../../components/PagesComp/Numerology/Property/PropertyContent";
import PropertyVisual from "../../components/PagesComp/Numerology/Property/PropertyVisual";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

/**
 * Vehicle & Property Numerology Page
 * Refactored into modular components.
 */
const Property = () => {
  return (
    <MainLayout
      title="Property & Vehicle Numerology | Wealth & Safety Analysis"
      description="Ensure your home and vehicle bring peace and prosperity. Expert numerology analysis for house numbers, office spaces, and land for maximum wealth and safety."
      keywords="Property Numerology, Vehicle Numerology, House Number Analysis, Wealth and Safety, Vastu Numerology"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <PropertyContent />
          <PropertyVisual />
        </div>
      </div>
      <RelatedServices currentPath="/numerology/property" />
    </MainLayout>
  );
};

export default Property;
