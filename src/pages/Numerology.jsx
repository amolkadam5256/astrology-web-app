import React from "react";
import MainLayout from "../components/layout/MainLayout";
import NumerologyHero from "../components/PagesComp/Numerology/Main/NumerologyHero";
import NumerologyServicesGrid from "../components/PagesComp/Numerology/Main/NumerologyServicesGrid";

import RelatedServices from "../components/PagesComp/Numerology/Common/RelatedServices";

const NumerologyMain = () => {
  return (
    <MainLayout
      title="Expert Numerology Services | Life Path & Name Correction"
      description="Professional numerology services including name correction, baby naming, business numerology, and destiny analysis. Start your journey towards clarity today."
      keywords="Numerology Services, Name Correction, Baby Naming, Business Numerology, Destiny Analysis"
    >
      <NumerologyHero />
      <NumerologyServicesGrid />
    </MainLayout>
  );
};

export default NumerologyMain;
