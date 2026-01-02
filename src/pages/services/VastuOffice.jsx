import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import VastuHero from "../../components/PagesComp/Services/VastuOffice/VastuHero";
import VastuGrid from "../../components/PagesComp/Services/VastuOffice/VastuGrid";

const VastuOffice = () => {
  return (
    <MainLayout title="Vastu For Office">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <VastuHero />
        <VastuGrid />
      </div>
    </MainLayout>
  );
};

export default VastuOffice;
