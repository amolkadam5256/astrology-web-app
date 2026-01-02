import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import IntroHero from "../../components/PagesComp/Numerology/Intro/IntroHero";
import IntroConcepts from "../../components/PagesComp/Numerology/Intro/IntroConcepts";
import IntroMeanings from "../../components/PagesComp/Numerology/Intro/IntroMeanings";
import IntroSystems from "../../components/PagesComp/Numerology/Intro/IntroSystems";
import IntroTips from "../../components/PagesComp/Numerology/Intro/IntroTips";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

/**
 * Numerology Intro Page
 * Refactored into modular components.
 */
const Intro = () => {
  return (
    <MainLayout
      title="Introduction to Numerology | Basics of Numbers & Destiny"
      description="Learn the fundamentals of numerology. Understand how numbers influence your life, personality, and future with our comprehensive guide to celestial vibrations."
      keywords="What is Numerology, Numerology Basics, Numbers and Destiny, Celestial Vibrations, Numerology Guide"
    >
      <IntroHero />
      <IntroConcepts />
      <IntroMeanings />
      <IntroSystems />
      <IntroTips />
      <RelatedServices currentPath="/numerology/intro" />
    </MainLayout>
  );
};

export default Intro;
