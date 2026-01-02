import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import SoulPathContent from "../../components/PagesComp/Services/SoulPath/SoulPathContent";
import SoulPathVisual from "../../components/PagesComp/Services/SoulPath/SoulPathVisual";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

const SoulPath = () => {
  return (
    <MainLayout
      title="Soul Path Discovery | Inner Wisdom & Career Heading"
      description="Uncover your soul's true purpose and career direction. Explore soul path discovery and spiritual healing services for a balanced and fulfilling life journey."
      keywords="Soul Path, Career Guidance, Life Purpose, Inner Wisdom, Spiritual Journey, Soul Urge Number"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <SoulPathContent />
          <SoulPathVisual />
        </div>
      </div>
      <RelatedServices currentPath="/services/soul-path" />
    </MainLayout>
  );
};

export default SoulPath;
