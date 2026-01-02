import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import PersonalityHero from "../../components/PagesComp/Numerology/Personality/PersonalityHero";
import PersonalityMeanings from "../../components/PagesComp/Numerology/Personality/PersonalityMeanings";
import PersonalityCTA from "../../components/PagesComp/Numerology/Personality/PersonalityCTA";

/**
 * Personality Traits Page
 * Refactored into modular components.
 */
const Personality = () => {
  return (
    <MainLayout title="Personality Traits - Numerology Blueprint">
      <PersonalityHero />
      <PersonalityMeanings />
      <PersonalityCTA />
    </MainLayout>
  );
};

export default Personality;
