import React from "react";
import { images } from "../../../assets/images/images";

const AboutImage = () => {
  return (
    <div
      className="relative group overflow-hidden bg-gray-100 dark:bg-white/5 aspect-square"
      data-aos="fade-left"
    >
      <div className="absolute inset-0 border-2 border-[var(--color-primary)] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all"></div>
      <img
        src={images.about.expertProfile}
        alt="Expert Numerologist"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
      />
    </div>
  );
};

export default AboutImage;
