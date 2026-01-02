import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import PropertyContent from "../../components/PagesComp/Numerology/Property/PropertyContent";
import PropertyVisual from "../../components/PagesComp/Numerology/Property/PropertyVisual";

/**
 * Vehicle & Property Numerology Page
 * Refactored into modular components.
 */
const Property = () => {
  return (
    <MainLayout title="Vehicle & Property Numerology - Wealth & Safety">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <PropertyContent />
          <PropertyVisual />
        </div>
      </div>
    </MainLayout>
  );
};

export default Property;
