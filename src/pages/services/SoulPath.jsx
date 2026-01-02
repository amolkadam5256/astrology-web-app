import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import SoulPathContent from "../../components/PagesComp/Services/SoulPath/SoulPathContent";
import SoulPathVisual from "../../components/PagesComp/Services/SoulPath/SoulPathVisual";

const SoulPath = () => {
  return (
    <MainLayout title="Soul Path & Career">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <SoulPathContent />
          <SoulPathVisual />
        </div>
      </div>
    </MainLayout>
  );
};

export default SoulPath;
