import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import HealingContent from "../../components/PagesComp/Services/Healing/HealingContent";
import HealingVisual from "../../components/PagesComp/Services/Healing/HealingVisual";

import RelatedServices from "../../components/PagesComp/Numerology/Common/RelatedServices";

const Healing = () => {
  return (
    <MainLayout
      title="Spiritual Healing Services | Energy & Chakra Balancing"
      description="Restore balance and harmony to your life with professional spiritual healing. Energy cleansing, chakra balancing, and holistic wellness sessions for inner peace."
      keywords="Spiritual Healing, Energy Cleansing, Chakra Balancing, Holistic Wellness, Inner Peace, Reiki Healing"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <HealingContent />
          <HealingVisual />
        </div>
      </div>
      <RelatedServices currentPath="/services/healing" />
    </MainLayout>
  );
};

export default Healing;
