import React from "react";

const HomeFeatures = () => {
  const features = [
    {
      title: "Precision",
      desc: "Technical accuracy in every calculation.",
      aos: "fade-right",
    },
    {
      title: "Intuition",
      desc: "Spiritual depth and layered insights.",
      aos: "fade-up",
    },
    {
      title: "Success",
      desc: "Aligning your brand with high growth.",
      aos: "fade-left",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-white/5 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, i) => (
            <div
              key={i}
              data-aos={feature.aos}
              className="p-10 bg-white dark:bg-[#0a0a0a] shadow-xl rounded-3xl group hover:bg-[#2262b2] transition-all duration-500"
            >
              <h3 className="text-2xl font-black text-[#0a0a0a] dark:text-white uppercase mb-4 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 group-hover:text-white/80">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
