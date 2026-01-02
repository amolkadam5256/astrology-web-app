// Local image imports for Vite bundling
import heroMain from "./hero_main.jpg";
import heroDynamic from "./hero_dynamic.png";
import patternBg from "./pattern_bg.jpg";
import serviceNumerology from "./service_numerology.jpg";
import numerologyBg from "./numerology_bg.png";
import expertProfile from "./expert_profile.jpg";
import expertDynamic from "./expert_dynamic.png";
import blogPlaceholder from "./blog_placeholder.jpg";
import hero_bg from "./hero_bg.png";
import zodiacWheel from "./zodiac_wheel.png";

export const images = {
  hero: {
    astrologyBg: hero_bg, // Using high-quality generated image
    fallbackBg: heroMain,
    patternBg: patternBg,
    zodiacWheel: zodiacWheel,
  },
  services: {
    numerology: serviceNumerology,
    decoding: numerologyBg, // Using high-quality generated image
  },
  about: {
    expertProfile: expertDynamic, // Using high-quality generated image
    fallbackProfile: expertProfile,
  },
  placeholders: {
    blog: blogPlaceholder,
  },
};
