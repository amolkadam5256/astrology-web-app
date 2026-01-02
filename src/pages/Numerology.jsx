import React from "react";
import MainLayout from "../components/layout/MainLayout";
import NumerologyHero from "../components/PagesComp/Numerology/Main/NumerologyHero";
import NumerologyServicesGrid from "../components/PagesComp/Numerology/Main/NumerologyServicesGrid";

const NumerologyMain = () => {
  return (
    <MainLayout
      title="Numerology Services"
      description="Detailed numerology analysis, name correction, and life path insights by expert numerologists."
    >
      <NumerologyHero />
      <NumerologyServicesGrid />
    </MainLayout>
  );
};

export default NumerologyMain;
