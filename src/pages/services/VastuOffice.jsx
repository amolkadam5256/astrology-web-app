import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import VastuHero from "../../components/PagesComp/Services/VastuOffice/VastuHero";
import VastuGrid from "../../components/PagesComp/Services/VastuOffice/VastuGrid";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

const VastuOffice = () => {
  return (
    <MainLayout
      title="Vastu for Office & Business | Professional Vastu Consulting"
      description="Boost your business productivity and prosperity with expert Vastu consulting. Corporate Vastu solutions for office layouts, placement, and positive energy flow."
      keywords="Vastu for Office, Business Vastu, Vastu Consulting, Corporate Vastu, Office Layout Vastu, Positive Energy Business"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <VastuHero />
        <VastuGrid />
      </div>
      <RelatedServices currentPath="/services/vastu-office" />
    </MainLayout>
  );
};

export default VastuOffice;
