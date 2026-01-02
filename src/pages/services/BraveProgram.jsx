import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import BraveHero from "../../components/PagesComp/Services/BraveProgram/BraveHero";
import BraveGrid from "../../components/PagesComp/Services/BraveProgram/BraveGrid";

const BraveProgram = () => {
  return (
    <MainLayout title="BRAVE Success Program">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="bg-[#0a0a0a] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center"
          data-aos="zoom-in"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#2262b2] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <BraveHero />
          <BraveGrid />
        </div>
      </div>
    </MainLayout>
  );
};

export default BraveProgram;
