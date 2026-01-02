import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import HealingContent from "../../components/PagesComp/Services/Healing/HealingContent";
import HealingVisual from "../../components/PagesComp/Services/Healing/HealingVisual";

const Healing = () => {
  return (
    <MainLayout title="Healing Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <HealingContent />
          <HealingVisual />
        </div>
      </div>
    </MainLayout>
  );
};

export default Healing;
