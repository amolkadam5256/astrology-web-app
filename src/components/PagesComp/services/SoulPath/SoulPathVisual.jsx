import React from "react";

const SoulPathVisual = () => {
  return (
    <div className="w-full lg:w-1/2 relative" data-aos="fade-left">
      <div className="aspect-4/5 bg-gray-100 dark:bg-white/5 rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-tr from-[#2262b2] to-transparent opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="w-full h-1 bg-gray-300 dark:bg-gray-700 relative">
            <div className="absolute left-1/2 -ml-4 -mt-4 w-8 h-8 bg-[#2262b2] rounded-full shadow-[0_0_20px_#2262b2] animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoulPathVisual;
