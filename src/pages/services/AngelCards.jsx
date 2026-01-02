import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import AngelCardsHero from "../../components/PagesComp/Services/AngelCards/AngelCardsHero";
import AngelCardsDisplay from "../../components/PagesComp/Services/AngelCards/AngelCardsDisplay";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

const AngelCards = () => {
  return (
    <MainLayout
      title="Angel Card Reading | Divine Spiritual Guidance"
      description="Receive divine messages and spiritual clarity with our expert Angel Card readings. Get guidance for love, career, and personal challenges from the celestial realm."
      keywords="Angel Card Reading, Spiritual Guidance, Divine Messages, Angelic Consultation, Celestial Clarity"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AngelCardsHero />
        <AngelCardsDisplay />
      </div>
      <RelatedServices currentPath="/services/angel-cards" />
    </MainLayout>
  );
};

export default AngelCards;
