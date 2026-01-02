import React from "react";
import MainLayout from "../components/layout/MainLayout";
import HomeHero from "../components/PagesComp/Home/HomeHero";
import HomeFeatures from "../components/PagesComp/Home/HomeFeatures";

const Home = () => {
  return (
    <MainLayout>
      <HomeHero />
      <HomeFeatures />
    </MainLayout>
  );
};

export default Home;
