import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import IntroHero from "../../components/PagesComp/Numerology/Intro/IntroHero";
import IntroConcepts from "../../components/PagesComp/Numerology/Intro/IntroConcepts";
import IntroMeanings from "../../components/PagesComp/Numerology/Intro/IntroMeanings";
import IntroSystems from "../../components/PagesComp/Numerology/Intro/IntroSystems";
import IntroTips from "../../components/PagesComp/Numerology/Intro/IntroTips";

/**
 * Numerology Intro Page
 * Refactored into modular components.
 */
const Intro = () => {
  return (
    <MainLayout title="What is Numerology? - Jyotish Astrology">
      <IntroHero />
      <IntroConcepts />
      <IntroMeanings />
      <IntroSystems />
      <IntroTips />
    </MainLayout>
  );
};

export default Intro;
