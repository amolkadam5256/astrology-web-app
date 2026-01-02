import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import PersonalityHero from "../../components/PagesComp/Numerology/Personality/PersonalityHero";
import PersonalityMeanings from "../../components/PagesComp/Numerology/Personality/PersonalityMeanings";
import PersonalityCTA from "../../components/PagesComp/Numerology/Personality/PersonalityCTA";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

/**
 * Personality Traits Page
 * Refactored into modular components.
 */
const Personality = () => {
  return (
    <MainLayout
      title="Personality Number Reading | Online Numerology Analysis"
      description="Discover what your name says about your personality traits. Get a detailed Personality Number reading to understand your outward behavior and social image."
      keywords="Personality Number, Numerology Analysis, Personality Traits, Name Numerology, Online Numerology Tool"
    >
      <PersonalityHero />
      <PersonalityMeanings />
      <PersonalityCTA />
      <RelatedServices currentPath="/numerology/personality" />
    </MainLayout>
  );
};

export default Personality;
