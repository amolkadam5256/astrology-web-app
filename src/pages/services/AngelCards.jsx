import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import AngelCardsHero from "../../components/PagesComp/Services/AngelCards/AngelCardsHero";
import AngelCardsDisplay from "../../components/PagesComp/Services/AngelCards/AngelCardsDisplay";

const AngelCards = () => {
  return (
    <MainLayout title="Angel Card Reading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AngelCardsHero />
        <AngelCardsDisplay />
      </div>
    </MainLayout>
  );
};

export default AngelCards;
